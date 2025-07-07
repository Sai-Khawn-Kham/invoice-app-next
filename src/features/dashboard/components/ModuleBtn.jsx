import Link from "next/link";
import React from "react";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      href={url}
      className="flex h-full flex-col gap-3 items-center bg-blue-600 text-white p-5 rounded-lg "
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
