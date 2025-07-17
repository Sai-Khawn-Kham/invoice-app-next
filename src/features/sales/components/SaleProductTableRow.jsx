"use client";
import useSaleProductStore from "@/store/useSaleProductStore";
import toast from "react-hot-toast";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";

const SaleProductTableRow = ({ record: { cost, quantity, product: { id, product_name, price }}, index }) => {
  const { removeRecord, changeQuantity } = useSaleProductStore();
  const handleDelete = () => {
    removeRecord(id);
  };
  const handleIncreaseQuantity = () => {
    changeQuantity(id, 1);
  };
  const handleDecreaseQuantity = () => {
    if(quantity > 1) {
      changeQuantity(id, -1);
    } else {
      toast.error("Quantity must be greater than 0");
    }
  };

  return (
    <tr className="group odd:bg-gray-50 odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800">
      <td className="px-6 py-4">
        {index + 1}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap"
      >
        {product_name}
      </td>
      <td className="px-6 py-4 text-end">
        {price}
      </td>
      <td className="px-6 py-4 text-end">
        <button
          onClick={handleDecreaseQuantity}
          className="opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-200 bg-gray-200 dark:bg-gray-700 text-blue-500 p-1 rounded cursor-pointer"
        >
          <HiMinus />
        </button>
        <span className="record-q w-5 inline-block">{quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className="opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-200 bg-gray-200 dark:bg-gray-700 text-blue-500 p-1 rounded cursor-pointer"
        >
          <HiPlus />
        </button>
      </td>
      <td className="px-6 py-4 text-end relative">
        {cost}
      </td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={handleDelete}
          className="active:scale-75 bg-gray-200 dark:bg-gray-700 text-red-500 p-1.5 rounded-lg cursor-pointer"
        >
          <HiOutlineTrash className="size-4.5" />
        </button>
      </td>
    </tr>
  );
};

export default SaleProductTableRow;
