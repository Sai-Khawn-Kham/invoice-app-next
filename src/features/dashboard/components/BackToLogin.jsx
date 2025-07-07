import { useRouter } from "next/navigation";
import React from "react";

const BackToLogin = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default BackToLogin;
