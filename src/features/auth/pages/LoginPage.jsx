import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mx-auto">
        <h1 className="font-semibold text-2xl text-center dark:text-white mb-6">
          Invoice App
        </h1>
        <div className="w-full sm:max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg md:mt-0 xl:p-0">
          <div className="p-6 sm:p-8 space-y-4 md:space-y-6">
            <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-tight dark:text-white">
              Sign In
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
