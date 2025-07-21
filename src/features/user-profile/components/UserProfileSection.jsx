"use client";
import LogoutBtn from "@/components/LogoutBtn";
import useAccountStore from "@/store/useAccountStore";
import Link from "next/link";
import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { LuCircleUser, LuKeySquare } from "react-icons/lu";
import ChangeImageBtn from "./ChangeImageBtn";

const UserProfileSection = () => {
  const { account: { name, email, profile_image } } = useAccountStore();
  return (
    <section className="space-y-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl dark:text-gray-50">Update User Profile</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/user-profile/change-name"
            type="button"
            className="flex items-center justify-center gap-2 font-medium text-nowrap text-sm hover:text-blue-600 focus:text-blue-700 dark:text-gray-50 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2"
          >
            <HiOutlinePencilSquare /> Change Name
          </Link>
          <Link
            href="/dashboard/user-profile/change-password"
            type="button"
            className="flex items-center justify-center gap-2 font-medium text-nowrap text-sm hover:text-blue-600 focus:text-blue-700 dark:text-gray-50 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2"
          >
            <LuKeySquare /> Change Password
          </Link>
          <LogoutBtn className="flex items-center justify-center gap-2 font-medium text-nowrap text-sm hover:text-blue-600 focus:text-blue-700 dark:text-gray-50 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2" />
        </div>
      </div>
      <div className="relative inline-block">
        <img
          className="size-[100px] rounded-full object-cover border-2 border-blue-300"
          src={
            profile_image
              ? profile_image
              : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
          alt="user photo"
        />
        <ChangeImageBtn />
      </div>
      <div className="max-w-lg bg-blue-50 dark:bg-gray-800 border border-blue-300 dark:border-blue-800 space-y-4.5 p-6">
        <div className="flex items-center gap-2">
          <LuCircleUser className="size-5 text-blue-600" />
          <h4 className="font-medium text-lg dark:text-gray-50">Personal Information</h4>
        </div>
        <div className="space-y-5">
          <dl className="flex items-center">
            <dt className="w-[150px] text-sm text-stone-500">
              User Name
            </dt>
            <dd className="text-sm dark:text-gray-50">{name}</dd>
          </dl>
          <dl className=" flex items-center">
            <dt className="w-[150px] text-sm text-stone-500">
              Email Address
            </dt>
            <dd className="text-sm dark:text-gray-50">{email}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default UserProfileSection;
