"use client";
import SpinnerBtn from "@/components/SpinnerBtn";
import useSale from "../hooks/useSale";

const SaleInformation = () => {
  const { register, handleSubmit, isSubmitting, errors, generateInvoiceNumber, currentDate, handleSale } = useSale();
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded shadow p-5">
      <form onSubmit={handleSubmit(handleSale)} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium dark:text-white">
            Voucher ID
          </label>
          <input
            type="text"
            {...register("voucher_id", { required: true })}
            defaultValue={generateInvoiceNumber()}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.voucher_id
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
          />
          {errors.voucher_id?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Voucher ID is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="customer_name"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customer_name"
            {...register("customer_name", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.customer_name
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
          />
          {errors.customer_name?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              Customer Name is required
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="customer_email"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            Customer Email
          </label>
          <input
            type="text"
            id="customer_email"
            {...register("customer_email", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.customer_email
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
          />
          {errors.customer_email?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              Customer Email is required
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="sale_date"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            Sale Date
          </label>
          <input
            type="date"
            id="sale_date"
            {...register("sale_date", { required: true })}
            defaultValue={currentDate("-")}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.sale_date
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
          />
          {errors.sale_date?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">Sale Date is required</p>
          )}
        </div>
        <div className="flex flex-col items-end">
          <div>
            <label
              htmlFor="all_correct"
              className={`me-2 font-medium text-sm ${
                errors.all_correct
                  ? "text-red-500"
                  : "text-gray-900 dark:text-gray-300"
              }`}
            >
              Make sure all field are correct
            </label>
            <input
              type="checkbox"
              id="all_correct"
              {...register("all_correct", { required: true })}
              className="size-4"
            />
          </div>
          <div>
            <label
              htmlFor="redirect_to_detail"
              className="me-2 font-medium text-sm text-gray-900 dark:text-gray-300"
            >
              Redirect to Voucher Detail
            </label>
            <input
              type="checkbox"
              id="redirect_to_detail"
              {...register("redirect_to_detail")}
              className="size-4"
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex gap-3 font-medium text-sm text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg py-2.5 px-5"
          >
            <span>Confirm Voucher</span>
            {isSubmitting && <SpinnerBtn />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SaleInformation;
