"use client";
import { changeName } from "@/services/profile";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useChangeName = () => {
  const router = useRouter();
  const { setAccount } = useAccountStore();
  const { register, handleSubmit, formState: { isSubmitting, errors }} = useForm();

  const handleChangeName = async (formData) => {
    try {
      const res = await changeName(formData);
      const json = await res.json();
      if(!res.ok) {
        throw new Error(json.message || "Name Change Failed");
      }
      toast.success(json.message);
      setAccount(json.user);
      router.push("/dashboard/user-profile");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    handleChangeName,
  }
}

export default useChangeName