"use client";
import useSaleProductStore from "@/store/useSaleProductStore";
import SaleProductTableRow from "./SaleProductTableRow";

const SaleProductTable = () => {
  const { records } = useSaleProductStore();
  const total = records.reduce((a, b) => a + b.cost, 0);
  const tax = total * 0.07;
  const net_total = total + tax;

  return (
    <div className="relative border border-gray-300 dark:border-gray-700 rounded shadow overflow-auto hsb">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="uppercase text-xs text-gray-600 dark:text-white bg-gray-300 dark:bg-gray-600">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Product name
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Price
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Quantity
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Cost
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hidden last:table-row">
            <td colSpan={6} className="px-6 py-4 text-center">
              There is no record. Buy Something
            </td>
          </tr>
          {records?.map((record, index) => (
            <SaleProductTableRow
              key={index}
              record={record}
              index={index}
            />
          ))}
        </tbody>
        <tfoot>
          <tr className="odd:bg-gray-200 odd:dark:bg-gray-700 even:bg-gray-100 even:dark:bg-gray-800">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Total
            </td>
            <td className="px-6 py-4 text-end">
              {total.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-end"></td>
          </tr>
          <tr className="odd:bg-gray-200 odd:dark:bg-gray-700 even:bg-gray-100 even:dark:bg-gray-800">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Tax
            </td>
            <td className="px-6 py-4 text-end">
              {tax.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-end"></td>
          </tr>
          <tr className="odd:bg-gray-200 odd:dark:bg-gray-700 even:bg-gray-100 even:dark:bg-gray-800">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Net Total
            </td>
            <td className="px-6 py-4 text-end">
              {net_total.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-end"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SaleProductTable;