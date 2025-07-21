"use client";
import React from "react";
import useVoucher from "../hooks/useVoucher";
import { LuSearch, LuX } from "react-icons/lu";
import Link from "next/link";
import Sortable from "@/components/Sortable";
import { HiPlus } from "react-icons/hi2";
import Pagination from "@/components/Pagination";
import VoucherLoader from "./VoucherLoader";
import VoucherRow from "./VoucherRow";

const VoucherSection = () => {
  const { data, isLoading, error, searchRef, handleSearchInput, searchParams, handleClearSearch, handlePaginate, handleLimit, handleSort } = useVoucher();
  return (
    <div>
      <div className="flex justify-between mb-3">
          <div className="">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <LuSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full text-sm dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg ps-10 pe-10 p-2.5 dark:placeholder-gray-400"
                placeholder="Search Product"
                onChange={handleSearchInput}
                ref={searchRef}
              />
              {searchParams.get("q") && (
                <div onClick={handleClearSearch} className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer">
                  <LuX className="size-4 text-gray-500 dark:text-gray-400" />
                </div>
              )}
            </div>
          </div>
          <div className="">
            <Link
              href="/dashboard/sales"
              className="w-full sm:w-auto flex justify-center items-center gap-3 font-medium text-sm text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5 text-center"
            >
              Create Sale
              <HiPlus />
            </Link>
          </div>
        </div>
        <div className="relative border border-gray-300 dark:border-gray-700 rounded shadow overflow-x-auto hsb mb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="uppercase text-xs text-gray-600 dark:text-white bg-gray-300 dark:bg-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <Sortable handleSort={handleSort} sort_by={`voucher_id`}>
                    #
                  </Sortable>
                </th>
                <th scope="col" className="px-6 py-3">
                  <Sortable handleSort={handleSort} sort_by={`customer_name`}>
                    Customer
                  </Sortable>
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  <Sortable handleSort={handleSort} sort_by={`net_total`} align={"right"} >
                    Total
                  </Sortable>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Updated At
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hidden last:table-row">
                <td colSpan={6} className="px-6 py-4 text-center">
                  There is no Voucher. <Link href={"/dashboard/sales"} className="text-blue-700 underline">Create Sale</Link>
                </td>
              </tr>
              {isLoading ? (
                <VoucherLoader />
              ) : (
                data?.data?.map((voucher) => (
                  <VoucherRow voucher={voucher} key={voucher.id} />
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          links={data?.links}
          meta={data?.meta}
          handlePaginate={handlePaginate}
          handleLimit={handleLimit}
        />
    </div>
  );
};

export default VoucherSection;
