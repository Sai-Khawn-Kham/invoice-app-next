"use client";
import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Link from "next/link";
import { deleteProduct, productApiUrl } from "@/services/product";
import toast from "react-hot-toast";
import { mutate } from "swr";
import { useSearchParams } from "next/navigation";
import SpinnerBtn from "@/components/SpinnerBtn";
import ShowDateTime from "@/components/ShowDateTime";

const ProductRow = ({ product: { id, product_name, price, created_at, updated_at }}) => {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const searchParams = useSearchParams();
  const key = searchParams.toString()
    ? `${productApiUrl}?${searchParams.toString()}`
    : productApiUrl;

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await deleteProduct(id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);
      mutate(key);
    } catch (error) {
      toast.error("An error occurred while deleting the product.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <tr className="odd:bg-gray-50 odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800">
      <td className="px-6 py-4">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {product_name}
      </td>
      <td className="px-6 py-4 text-end">
        {price}
      </td>
      <td className="px-6 py-4 text-center">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-center">
        <ShowDateTime timestamp={updated_at} />
      </td>
      <td className="px-6 py-4 text-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link
            href={`/dashboard/products/${id}`}
            className="size-10 flex justify-center items-center font-medium text-sm hover:text-blue-500 focus:text-blue-500 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-s-lg focus:z-10"
          >
            <HiOutlinePencil />
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            className="size-10 flex justify-center items-center font-medium text-sm hover:text-red-500 focus:text-red-500 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-e-lg focus:z-10 cursor-pointer"
          >
            {isDeleting ? <SpinnerBtn /> : <HiOutlineTrash />}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
