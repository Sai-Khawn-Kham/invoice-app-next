import ShowDateTime from '@/components/ShowDateTime'
import SpinnerBtn from '@/components/SpinnerBtn'
import { deleteVoucher, voucherApiUrl } from '@/services/voucher'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Avatar from 'react-avatar'
import toast from 'react-hot-toast'
import { HiOutlineTrash } from 'react-icons/hi2'
import { LuArrowRight, LuCalendar } from 'react-icons/lu'
import { mutate } from 'swr'

const VoucherRow = ({ voucher: { id, voucher_id, customer_name, customer_email, total, tax, net_total, sale_date, created_at, updated_at }}) => {
  const [ isDeleting, setIsDeleting ] = React.useState(false);
  const searchParams = useSearchParams();
  const key = searchParams.toString()
    ? `${voucherApiUrl}?${searchParams.toString()}`
    : voucherApiUrl;

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await deleteVoucher(id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);
      mutate(key);
    } catch (error) {
      toast.error("An error occurred while deleting the voucher.");
    } finally {
      setIsDeleting(false);
    }
  }
  return (
    <tr className="odd:bg-gray-50 odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800">
      <td className="px-6 py-4">
        <p>{voucher_id}</p>
        <span className="inline-flex items-center gap-1 text-xs">
          <LuCalendar /> {sale_date}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex gap-2">
          <Avatar
            name={customer_name}
            round={true}
            size="40"
            textSizeRatio={2}
          />
          <div>
            <p>{customer_name}</p>
            <p className="text-gray-600">{customer_email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-end">
        {total}
      </td>
      <td className="px-6 py-4 text-center">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-center">
        <ShowDateTime timestamp={updated_at} />
      </td>
      <td className="px-6 py-4 text-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDelete}
            className="size-10 flex justify-center items-center font-medium text-sm hover:text-red-500 focus:text-red-500 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-s-lg focus:z-10 cursor-pointer"
          >
            {isDeleting ? <SpinnerBtn /> : <HiOutlineTrash />}
          </button>
          <Link
            href={`/dashboard/vouchers/${id}`}
            className="size-10 flex justify-center items-center font-medium text-sm hover:text-blue-500 focus:text-blue-500 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-e-lg focus:z-10"
          >
            <LuArrowRight />
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default VoucherRow