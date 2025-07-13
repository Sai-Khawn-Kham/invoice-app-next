"use client";
import useAccountStore from '@/store/useAccountStore'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Header = () => {
  const { account: { name, email, profile_image } } = useAccountStore();
  return (
    <header className='py-3 mb-5'>
      <div className="flex justify-between">
        <Link href={"/dashboard"} className='font-bold text-3xl text-gray-800 text-gray-950 dark:text-gray-50'>Invoice App</Link>
        <Link href={"/dashboard/user-profile"} className='flex items-center gap-3'>
          <Image
            src={profile_image ? profile_image : "/images/Portrait_Placeholder.png"}
            alt='Portrait Placeholder'
            width={48}
            height={48}
            className='size-12 border-2 border-white rounded-full shadow-sm object-cover object-top'
          />
          <div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-50">{name}</div>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header