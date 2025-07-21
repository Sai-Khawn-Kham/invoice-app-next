"use client";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import React from "react";
import { LuLogOut } from "react-icons/lu";

const LogoutBtn = ({ className }) => {
  const { logout } = useAccountStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <button
      onClick={handleLogout}
      className={className}
    >
      <LuLogOut />
      Logout
    </button>
  );
};

export default LogoutBtn;
