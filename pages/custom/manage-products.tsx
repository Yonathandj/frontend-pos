import React from "react";
import ProductCategoryCard from "@/components/custom/product-category-card";

import { PRODUCT_CATEGORIES } from "@/constants/products";

const ManageProducts = () => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-x-2">
      {PRODUCT_CATEGORIES.map((category) => (
        <ProductCategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
};

export default ManageProducts;