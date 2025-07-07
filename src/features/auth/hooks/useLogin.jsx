"use client"
import { login } from "@/services/auth";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();
  const { setAccount, setToken } = useAccountStore();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      const json = await res.json();
      if(!res.ok) {
        throw new Error(json.message || "Login failed");
      }
      setToken(json.token);
      setAccount(json.user);
      toast.success("Login Successfully");
      router.push("/dashboard");
    } catch(error) {
      toast.error(error.message);
    }
  }
  return {
    register,
    handleSubmit,
    isSubmitting,
    handleLogin
  }
}

export default useLogin