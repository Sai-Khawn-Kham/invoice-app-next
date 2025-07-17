"use client";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutBtn = () => {
  const { logout } = useAccountStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <button
      onClick={handleLogout}
      className="font-medium text-sm text-center text-blue-700 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500  hover:bg-blue-800 border border-blue-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-800"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
