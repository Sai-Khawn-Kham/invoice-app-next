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

const ProductRow = ({
  product: { id, product_name, price, created_at, updated_at },
}) => {
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
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 ">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
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
            className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? <SpinnerBtn /> : <HiOutlineTrash />}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
