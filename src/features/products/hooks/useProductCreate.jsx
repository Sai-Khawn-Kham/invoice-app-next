"use client";
import { createProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useProductCreate = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm();

  const handleProductCreate = async (formData) => {
    try {
      const res = await createProduct({
        product_name: formData.product_name,
        price: formData.price,
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);
      reset();
      if (formData.back_to_product_list) {
        router.push("/dashboard/products");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    handleProductCreate,
  };
};

export default useProductCreate;
