import React from "react";
import ModuleBtn from "./ModuleBtn";
import { LuDatabaseBackup, LuMonitor, LuFiles, LuUsers } from "react-icons/lu";

const ModuleListSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
        <div>
          <ModuleBtn
            name={"Product Module"}
            icon={<LuDatabaseBackup className="size-14" />}
            url={"/dashboard/products"}
          />
        </div>
        <div>
          <ModuleBtn
            name={"Sale Module"}
            icon={<LuMonitor className="size-14" />}
            url={"/dashboard/sales"}
          />
        </div>
        <div>
          <ModuleBtn
            name={"Voucher Module"}
            icon={<LuFiles className="size-14" />}
            url={"/dashboard/vouchers"}
          />
        </div>
        <div>
          <ModuleBtn
            name={"User Profile"}
            icon={<LuUsers className="size-14" />}
            url={"/dashboard/user-profile"}
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-end">
        <LogoutBtn className="flex items-center justify-center gap-2 font-medium text-nowrap text-sm text-center text-blue-700 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500  hover:bg-blue-800 border border-blue-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-800" />
      </div> */}
    </>
  );
};

export default ModuleListSection;
