"use client";
import React from "react";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";
import { useSearchParams } from "next/navigation";

const Pagination = ({
  links = { prev: null, next: null, first: null, last: null },
  meta = { total: 0, to: 0, from: 0, per_page: 0, current_page: 0, last_page: 0 },
  handlePaginate,
  handleLimit,
}) => {
  const searchParams = useSearchParams();
  const currentLimit = searchParams.get("limit") ?? 5;
  const pageLimits = [5, 10, 20, 50, 100];

  return (
    <div className="flex justify-between items-center flex-wrap gap-4 pb-10">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{meta.from}</b> to <b>{meta.to}</b> of <b>{meta.total}</b> Entries
      </span>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="text-sm text-gray-700 dark:text-white whitespace-nowrap">
            Rows per page
          </label>
          <select
            id="limit"
            onChange={handleLimit}
            className="h-10 text-sm dark:text-gray-400 dark:hover:text-white bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-400 dark:border-gray-700 cursor-pointer"
            value={currentLimit}
          >
            {pageLimits.map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>

        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page <b>{meta.current_page}</b> of <b>{meta.last_page}</b>
        </span>

        <div className="inline-flex">
          <button
            disabled={!links.first}
            onClick={() => handlePaginate(links.first)}
            className="flex items-center justify-center size-10 border-y border-l border-gray-400 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <LuChevronsLeft />
          </button>
          <button
            disabled={!links.prev}
            onClick={() => handlePaginate(links.prev)}
            className="flex items-center justify-center size-10 border-y border-gray-400 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <LuChevronLeft />
          </button>
          <button
            disabled={!links.next}
            onClick={() => handlePaginate(links.next)}
            className="flex items-center justify-center size-10 border-y border-gray-400 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <LuChevronRight />
          </button>
          <button
            disabled={!links.last}
            onClick={() => handlePaginate(links.last)}
            className="flex items-center justify-center size-10 border-y border-r border-gray-400 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <LuChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
