"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Breadcrumb = ({ links, current }) => {
  const router = useRouter();
  const backward = () => {
    router.back();
  };
  const forward = () => {
    window.history.forward();
  };
  return (
    <div className="flex items-center justify-between gap-3 mb-5 border-y border-gray-500 py-2">
      <nav>
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 font-medium text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          {links && links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              <LuChevronRight className="text-gray-500 dark:text-gray-400" />
              <Link
                href={link.path}
                className="inline-flex items-center gap-1 font-medium text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li className="inline-flex items-center">
            <LuChevronRight className="text-gray-500 dark:text-gray-400" />
            <span className="inline-flex items-center gap-1 font-medium text-sm text-gray-500 dark:text-gray-400">
              {current}
            </span>
          </li>
        </ol>
      </nav>
      <div className="flex items-center">
        <button
          type="button"
          onClick={backward}
          className="size-7 flex justify-center items-center font-medium text-sm text-gray-700 hover:text-blue-700 focus:text-blue-700 dark:text-gray-400 dark:hover:text-white dark:focus:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-s cursor-pointer focus:z-10"
        >
          <LuChevronLeft />
        </button>
        <button
          type="button"
          onClick={forward}
          className="size-7 flex justify-center items-center font-medium text-sm text-gray-700 hover:text-blue-700 focus:text-blue-700 dark:text-gray-400 dark:hover:text-white dark:focus:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-e cursor-pointer focus:z-10"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
