"use client";
import React from "react";
import useLogin from "../hooks/useLogin";
import SpinnerBtn from "@/components/SpinnerBtn";
import Link from "next/link";

const LoginForm = () => {
  const { register, handleSubmit, isSubmitting, handleLogin } = useLogin();
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="space-y-4 md:space-y-6"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="block w-full dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:placeholder-gray-400"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="block w-full dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:placeholder-gray-400"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="remember"
            className="size-4"
          />
          <label
            htmlFor="remember"
            className="text-sm text-gray-500 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center gap-3 font-medium text-sm text-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5 disabled:pointer-events-none disabled:opacity-80"
      >
        Sign in
        {isSubmitting && <SpinnerBtn />}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
