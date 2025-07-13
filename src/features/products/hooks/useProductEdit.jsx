"use client";

import { fetchProduct, productApiUrl, updateProduct } from "@/services/product";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSWR from "swr";

const useProductEdit = () => {
  const { id } = useParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const { data, isLoading, error } = useSWR(`${productApiUrl}/${id}`, fetchProduct);

  const handleProductEdit = async (formData) => {
    try {
      const res = await updateProduct(id, {
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
    data,
    isLoading,
    error,
    register,
    handleSubmit,
    isSubmitting,
    errors,
    handleProductEdit,
  };
};

export default useProductEdit;
