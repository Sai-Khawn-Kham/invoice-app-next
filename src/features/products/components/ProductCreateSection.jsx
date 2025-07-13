"use client";
import React from "react";
import useProductCreate from "../hooks/useProductCreate";
import Link from "next/link";
import SpinnerBtn from "@/components/SpinnerBtn";

const ProductCreateSection = () => {
  const { register, handleSubmit, isSubmitting, errors, handleProductCreate } = useProductCreate();
  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="font-bold text-3xl dark:text-gray-50 mb-3">
        Create New Product
      </h1>
      <p className="mb-10 text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(handleProductCreate)}>
        <div className="mb-5">
          <label
            htmlFor="product_name"
            className={`block mb-2 font-medium text-sm ${
              errors.product_name
                ? "text-red-500"
                : "text-gray-900 dark:text-gray-50"
            }`}
          >
            New Product Name
          </label>
          <input
            type="text"
            id="product_name"
            {...register("product_name", { required: true })}
            className={`block w-full text-sm text-gray-900 bg-gray-50 border focus:outline-none focus:ring-1 rounded-lg p-2.5 ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
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
            className={`block mb-2 font-medium text-sm ${
              errors.price ? "text-red-500" : "text-gray-900 dark:text-gray-50"
            }`}
          >
            Product Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
            className={`block w-full text-sm text-gray-900 bg-gray-50 border focus:outline-none focus:ring-1 rounded-lg p-2.5 ${
              errors.price
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
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
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <label
            htmlFor="all_correct"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Make sure all fields are correct
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="back_to_product_list"
            {...register("back_to_product_list")}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label
            htmlFor="back_to_product_list"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Back to Product List after saving
          </label>
        </div>

        <Link
          href="/dashboard/products"
          className="py-2.5 px-5 mr-2 mb-2 font-medium text-sm text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:z-10 focus:ring-3 focus:ring-blue-300"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-medium text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 focus:outline-none focus:ring-3 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-80"
        >
          <span>Save Product</span>
          {isSubmitting && <SpinnerBtn />}
        </button>
      </form>
    </div>
  );
};

export default ProductCreateSection;
