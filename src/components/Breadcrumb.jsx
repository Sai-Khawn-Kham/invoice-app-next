"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { MdHome } from "react-icons/md";

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
      <nav className="flex">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 font-medium text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <MdHome />
              Home
            </Link>
          </li>
          {links && links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              <Link
                href={link.path}
                className="inline-flex items-center gap-1 font-medium text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <LuChevronRight />
                {link.title}
              </Link>
            </li>
          ))}
          <li className="inline-flex items-center">
            <span className="inline-flex items-center gap-1 font-medium text-sm text-gray-500 dark:text-gray-400">
              <LuChevronRight />
              {current}
            </span>
          </li>
        </ol>
      </nav>
      <div className="flex items-center">
        <button
          type="button"
          onClick={backward}
          className="size-7 flex justify-center items-center font-medium text-sm hover:text-blue-700 focus:text-blue-700 dark:text-white dark:hover:text-white dark:focus:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 first:rounded-s-lg last:rounded-e-lg focus:z-10 focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-500"
        >
          <LuChevronLeft />
        </button>
        <button
          type="button"
          onClick={forward}
          className="size-7 flex justify-center items-center font-medium text-sm hover:text-blue-700 focus:text-blue-700 dark:text-white dark:hover:text-white dark:focus:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 first:rounded-s-lg last:rounded-e-lg focus:z-10 focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-500"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
