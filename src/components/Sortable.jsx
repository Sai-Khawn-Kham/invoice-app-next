import React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Sortable = ({ children, handleSort, sort_by, align }) => {
  const handleSortAsc = () => {
    handleSort({
      sort_by,
      sort_direction: "asc",
    });
  };

  const handleSortDesc = () => {
    handleSort({
      sort_by,
      sort_direction: "desc",
    });
  };
  return (
    <div
      className={`flex items-center gap-1 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className="flex flex-col">
        <button className="dark:text-gray-50 hover:bg-gray-400 dark:hover:bg-gray-700" onClick={handleSortAsc}>
          <LuChevronUp />
        </button>
        <button className="dark:text-gray-50 hover:bg-gray-400 dark:hover:bg-gray-700" onClick={handleSortDesc}>
          <LuChevronDown />
        </button>
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Sortable;
