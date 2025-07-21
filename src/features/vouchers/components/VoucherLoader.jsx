import { useSearchParams } from 'next/navigation';
import React from 'react';

const VoucherLoader = () => {
  const searchParams = useSearchParams();
  const currentLimit = searchParams.get("limit") ?? 5;
  return [...Array(Number(currentLimit))].map((_, i) => (
    <tr
      key={i}
      className="animate-pulse odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800"
    >
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-30"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-18 mt-2"></div>
      </td>
      <td
        scope="row"
        className="px-6 py-4 flex gap-2"
      >
        <div className="size-11 bg-gray-200 rounded-full dark:bg-gray-600"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-34"></div>
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-24 mt-2"></div>
        </div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-16 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-20 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-16 mt-2 mx-auto"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-20 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-16 mt-2 mx-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex">
          <div className="h-8 w-8 bg-gray-200 rounded dark:bg-gray-600 mr-2"></div>
          <div className="h-8 w-8 bg-gray-200 rounded dark:bg-gray-600"></div>
        </div>
      </td>
    </tr>
  ));
};

export default VoucherLoader;