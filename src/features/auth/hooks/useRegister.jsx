"use client";
import { registerAccount } from "@/services/auth";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useRegister = () => {
  const router = useRouter();
  const { setToken, setAccount } = useAccountStore();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const handleRegister = async (data) => {
    try {
      const res = await registerAccount(data);
      const json = await res.json();
      if(!res.ok) {
        throw new Error(json.message || "Register failed");
      }
      setToken(json.token);
      setAccount(json.user);
      toast.success("Register Successfully");
      router.push("/dashboard");
    } catch(error) {
      toast.error(error.message);
    }
  }
  return {
    register,
    handleSubmit,
    isSubmitting,
    handleRegister
  }
}

export default useRegister