"use client";
import { createVoucher } from "@/services/voucher";
import useSaleProductStore from "@/store/useSaleProductStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useSale = () => {
  const router = useRouter();
  const { records, resetRecord } = useSaleProductStore();
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm();

  const currentDate = (a) => {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10).replaceAll("-", a);
    // const formattedDate = date.toLocaleString().slice(0, 10).split("/").reverse().join(a);
    return formattedDate;
  }

  const generateInvoiceNumber = () => {
    const formattedDate = currentDate("");
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;
    return invoiceNumber;
  }

  const handleSale = async (formData) => {
    try {
      const total = records.reduce((a, b) => a + b.cost, 0);
      const tax = total * 0.07;
      const net_total = total + tax;
      const currentVoucher = { ...formData, records, total, tax, net_total };

      const res = await createVoucher(currentVoucher);
      const json = await res.json();

      if(!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);
      resetRecord();
      reset();
      if (formData.redirect_to_detail) {
        router.push(`/dashboard/vouchers/${json?.data?.id}`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    generateInvoiceNumber,
    currentDate,
    handleSale
  };
};

export default useSale;
