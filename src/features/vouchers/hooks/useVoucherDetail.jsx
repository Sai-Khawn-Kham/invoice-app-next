"use client";
import { fetchVoucher, voucherApiUrl } from "@/services/voucher";
import { useParams } from "next/navigation";
import useSWR from "swr";

const useVoucherDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR( `${voucherApiUrl}/${id}`, fetchVoucher );

  // const handlePrint = () => {
  //   printJS({
  //     printable: "printArea",
  //     type: "html",
  //     scanStyles: true,
  //     css: [
  //       "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
  //     ],
  //   });
  // };

  // const handlePdf = () => {
  //   const element = document.getElementById("printArea");
  //   const opt = {
  //     margin: 0.1,
  //     filename: "invoice.pdf",
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 1 },
  //     jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
  //   };
  //   html2pdf().from(element).set(opt).save();
  // };

  return {
    data,
    isLoading,
    error,
    // handlePdf,
    // handlePrint,
  };
};

export default useVoucherDetail;
