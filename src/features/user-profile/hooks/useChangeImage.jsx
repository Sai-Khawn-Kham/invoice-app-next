"use client";
import { changeImage } from "@/services/profile";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useChangeImage = () => {
  const router = useRouter();
  const { setAccount } = useAccountStore();

  const handleChangeImage = async (e) => {
    const toastId = toast.loading("Uploading ....");
    try {
      const res = await changeImage(e.target.files[0]);
      const json = await res.json();
      if(!res.ok) {
        throw new Error(json.message || "Profile Image Change failed");
      }
      setAccount(json.user);
      toast.success("Profile Image Changed Successfully", {
        id: toastId,
      });
      router.push("/dashboard/user-profile");
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
      });
    }
  };

  return {
    handleChangeImage,
  };
};

export default useChangeImage;
