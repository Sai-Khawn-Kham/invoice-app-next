"use client";
import React from 'react'
import useChangePassword from '../hooks/useChangePassword'
import Link from 'next/link';
import SpinnerBtn from '@/components/SpinnerBtn';

const ProfileChangePasswordSection = () => {
  const { register, handleSubmit, isSubmitting, errors, handleChangePassword } = useChangePassword();
  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="font-bold text-3xl dark:text-gray-50 mb-3">
        Change User Name
      </h1>
      <p className="mb-10 text-gray-500">
        pick a user name for your account
      </p>
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <div className="mb-5">
          <label
            htmlFor="old_password"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            Old Password
          </label>
          <input
            type="password"
            id="old_password"
            {...register("old_password", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.old_password
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
            placeholder="••••••••"
          />
          {errors.old_password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              Old Password is required
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="new_password"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            New Password
          </label>
          <input
            type="password"
            id="new_password"
            {...register("new_password", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.new_password
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
            placeholder="••••••••"
          />
          {errors.new_password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              New Password is required
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="new_password_confirmation"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            New Password Confirmation
          </label>
          <input
            type="password"
            id="new_password_confirmation"
            {...register("new_password_confirmation", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.new_password_confirmation
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
            placeholder="••••••••"
          />
          {errors.new_password_confirmation?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              New Password Confirmation is required
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="all_correct"
            className="size-4"
            required
          />
          <label
            htmlFor="all_correct"
            className="font-medium text-sm dark:text-gray-50 ml-2"
          >
            Make sure all fields are correct
          </label>
        </div>
        <div>
          <Link
            href="/dashboard/user-profile"
            className="font-medium text-sm text-gray-950 bg-white hover:bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-500 py-2.5 px-5 mr-2 mb-2 "
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-medium text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 px-5 py-2.5 disabled:pointer-events-none disabled:opacity-80"
          >
            <span>Save Product</span>
            {isSubmitting && <SpinnerBtn />}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileChangePasswordSection