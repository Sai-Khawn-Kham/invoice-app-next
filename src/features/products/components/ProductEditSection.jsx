"use client";
import React from 'react'
import useProductEdit from '../hooks/useProductEdit';
import Link from "next/link";
import SpinnerBtn from "@/components/SpinnerBtn";

const ProductEditSection = () => {
  const { data, isLoading, error, register, handleSubmit, isSubmitting, errors, handleProductEdit } = useProductEdit();
  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="font-bold text-3xl dark:text-gray-50 mb-3">
        Edit Product
      </h1>
      <p className="mb-10 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(handleProductEdit)}>
        <div className="mb-5">
          <label
            htmlFor="product_name"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            defaultValue={data?.data?.product_name}
            {...register("product_name", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.product_name
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
            placeholder="e.g., apple"
          />
          {errors.product_name && (
            <p className="text-red-500 text-sm mt-1">
              Product name is required
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="price"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            Product Price
          </label>
          <input
            type="number"
            id="price"
            defaultValue={data?.data?.price}
            {...register("price", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.price
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
            placeholder="e.g., 500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">
              Product price is required
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="all_correct"
            className="size-4"
            required
          />
          <label
            htmlFor="all_correct"
            className="font-medium text-sm dark:text-gray-50 ml-2"
          >
            Make sure all fields are correct
          </label>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="back_to_product_list"
            {...register("back_to_product_list")}
            className="size-4"
          />
          <label
            htmlFor="back_to_product_list"
            className="font-medium text-sm dark:text-gray-50 ml-2"
          >
            Back to Product List after saving
          </label>
        </div>

        <div>
          <Link
            href="/dashboard/products"
            className="font-medium text-sm bg-white hover:bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-500 py-2.5 px-5 mr-2 mb-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-medium text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 px-5 py-2.5 disabled:pointer-events-none disabled:opacity-80"
          >
            <span>Save Product</span>
            {isSubmitting && <SpinnerBtn />}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductEditSection