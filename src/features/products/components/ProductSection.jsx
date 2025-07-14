"use client";
import React from 'react'
import useProduct from '../hooks/useProduct';
import ProductLoader from './ProductLoader';
import ProductEmptyStage from './ProductEmptyStage';
import ProductRow from './ProductRow';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi2';
import { LuSearch, LuX } from 'react-icons/lu';
import Pagination from '@/components/Pagination';
import Sortable from '@/components/Sortable';

const ProductSection = () => {
  const { data, isLoading, error, searchRef, handleSearchInput, searchParams, handleClearSearch, handlePaginate, handleLimit, handleSort } = useProduct();
  return (
    <div>
      <div className="flex justify-between mb-3">
        <div className="">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <LuSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              className="block w-full text-sm text-stone-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 rounded-lg ps-10 pe-10 p-2.5 dark:placeholder-gray-400"
              placeholder="Search Product"
              onChange={handleSearchInput}
              ref={searchRef}
            />
            {searchParams.get("q") && (
              <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer" onClick={handleClearSearch}>
                <LuX className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              </div>
            )}
          </div>
        </div>
        <div className="">
          <Link
            href="/dashboard/products/create"
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new Product
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-gray-100 dark:bg-gray-600 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by={`id`}>
                  #
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by={`product_name`}>
                  Product name
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                <Sortable handleSort={handleSort} sort_by={`price`} align={"right"} >
                  Price
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
            <ProductEmptyStage />
            {isLoading ? (
              <ProductLoader />
            ) : (
              data?.data?.map((product) => (
                <ProductRow product={product} key={product.id} />
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
  )
}

export default ProductSection