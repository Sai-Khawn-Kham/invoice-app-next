import Link from "next/link";
import React from "react";

const ProductEmptyStage = () => {
  return (
    <tr className="hidden last:table-row">
      <td colSpan={6} className="px-6 py-4 text-center">
        There is no Product. <Link href={"/dashboard/products/create"} className="text-blue-700 underline">Add Product</Link>
      </td>
    </tr>
  );
};

export default ProductEmptyStage;