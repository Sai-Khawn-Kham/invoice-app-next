"use client";
import { fetchProduct, productApiUrl } from "@/services/product";
import useSaleProductStore from "@/store/useSaleProductStore";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSWR from "swr";

const useProductSelect = () => {
  const { data, isLoading, error } = useSWR(`${productApiUrl}?limit=100`, fetchProduct);
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm();
  const { records, addRecord, changeQuantity } = useSaleProductStore();

  const handleRecord = async (formData) => {
    if(formData.quantity > 0) {
      const currentProduct = JSON.parse(formData.product);
      const isExited = records.find((record) => record.product.id === currentProduct.id);
      if(isExited) {
        changeQuantity(isExited.product_id, formData.quantity);
      } else {
        addRecord({
          product: currentProduct,
          product_id: currentProduct.id,
          quantity: formData.quantity,
          cost: currentProduct.price * formData.quantity,
          created_at: new Date().toISOString(),
        })
      }
      reset();
    } else {
      toast.error("Quantity must be greater than 0");
    }
  }

  return {
    data,
    isLoading,
    error,
    register,
    handleSubmit,
    isSubmitting,
    errors,
    handleRecord,
  };
};

export default useProductSelect;
