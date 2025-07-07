import React from "react";
import ModuleBtn from "./ModuleBtn";
import { LuDatabaseBackup, LuMonitor, LuFiles, LuUsers } from "react-icons/lu";
import LogoutBtn from "@/components/LogoutBtn";

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
      <div className="flex items-center justify-end">
        <LogoutBtn />
      </div>
    </>
  );
};

export default ModuleListSection;
