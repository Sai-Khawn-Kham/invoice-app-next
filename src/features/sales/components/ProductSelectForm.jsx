"use client";
import React from "react";
import useProductSelect from "../hooks/useProductSelect";

const ProductSelectForm = () => {
  const { data, isLoading, error, register, handleSubmit, isSubmitting, errors, handleRecord } = useProductSelect();
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded shadow p-5 mb-5">
      <form onSubmit={handleSubmit(handleRecord)}>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <label
              htmlFor="product_select"
              className="block font-medium text-sm dark:text-white mb-2"
            >
              Select Your Product
            </label>
            <select
              id="product_select"
              {...register("product")}
              className="block w-full text-sm dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded py-2.5"
              required
            >
              <option value="">Select a product</option>
              {!isLoading && data?.data?.map((product) => (
                <option key={product.id} value={JSON.stringify(product)}>
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantity_input"
              className="block font-medium text-sm dark:text-white mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity_input"
              {...register("quantity")}
              className="block w-full text-sm dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded py-2.5 ps-2"
              placeholder="e.g. 10"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              disabled={isSubmitting}
              className="w-full h-full flex justify-center items-center font-medium text-sm text-center text-blue-700 hover:text-white dark:text-blue-500 hover:bg-blue-800 dark:hover:bg-blue-500 border border-blue-700 dark:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 me-2 mb-2 cursor-pointer"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductSelectForm;
