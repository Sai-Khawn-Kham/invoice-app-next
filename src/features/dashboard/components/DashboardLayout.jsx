"use client";
import SpinnerBtn from "@/components/SpinnerBtn";
import { checkProfile } from "@/services/profile";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { token, logout } = useAccountStore();
  const [isLoading, setIsLoading] = React.useState(true);

  const autoLogoutIfTokenExpire = async (currentToken) => {
    const res = await checkProfile(currentToken);
    if (res.status === 401) {
      toast.error("Your token has expired, please login again");
      logout();
    }
  };

  React.useEffect(() => {
    const currentToken = useAccountStore.getState().token;
    if (!currentToken) {
      toast.error("Please login first");
      router.push("/");
    } else {
      autoLogoutIfTokenExpire(currentToken);
    }
    setIsLoading(false);
  }, [token]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <SpinnerBtn />
      </div>
    );
  }

  if (!useAccountStore.getState().token) {
    return;
  }

  return <>{children}</>;
};

export default DashboardLayout;
