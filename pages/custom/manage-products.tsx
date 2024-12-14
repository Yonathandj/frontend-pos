import React from "react";
import ProductCategoryCard from "@/components/custom/product-category-card";
import ProductForm from "@/components/custom/product-form";

import { PRODUCT_CATEGORIES } from "@/constants/products";

const ManageProducts = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-4 gap-x-2">
        {PRODUCT_CATEGORIES.map((category) => (
          <ProductCategoryCard key={category.title} category={category} />
        ))}
      </div>
      <div className="mt-4 text-right">
        <ProductForm />
      </div>
    </>
  );
};

export default ManageProducts;
