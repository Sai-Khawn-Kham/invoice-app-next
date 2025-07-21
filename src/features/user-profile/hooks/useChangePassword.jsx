"use client";
import { changePassword } from "@/services/profile";
import useAccountStore from "@/store/useAccountStore";
import { useForm } from "react-hook-form";

const useChangePassword = () => {
  const { logout } = useAccountStore();
  const { register, handleSubmit, formState: { isSubmitting, errors }} = useForm();

  const handleChangePassword = async (formData) => {
    try {
      const res = await changePassword(formData);
      const json = await res.json();
      if(!res.ok) {
        throw new Error(json.message || "Password Change Failed");
      }
      logout();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    handleChangePassword,
  };
};

export default useChangePassword;