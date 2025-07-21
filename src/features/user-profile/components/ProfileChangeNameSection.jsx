"use client";
import React from 'react'
import useChangeName from '../hooks/useChangeName'
import Link from 'next/link';
import SpinnerBtn from '@/components/SpinnerBtn';

const ProfileChangeNameSection = () => {
  const { register, handleSubmit, isSubmitting, errors, handleChangeName } = useChangeName();
  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="font-bold text-3xl dark:text-gray-50 mb-3">
        Change User Name
      </h1>
      <p className="mb-10 text-gray-500">
        pick a user name for your account
      </p>
      <form onSubmit={handleSubmit(handleChangeName)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-sm dark:text-gray-50"
          >
            User Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className={`block w-full text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border rounded-lg p-2.5 focus:outline-none ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500 dark:border-gray-600"
            }`}
            placeholder="e.g., kyaw kyaw"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              User name is required
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

export default ProfileChangeNameSection