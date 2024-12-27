"use client";

import React, { useState } from "react";

import ProductCategoryCard from "@/components/custom/product-category-card";
import ProductForm from "@/components/custom/product-form";

import { PRODUCT_CATEGORIES } from "@/constants/product";
import { ProductSchema } from "@/types/product";

const ManageProducts = () => {
  const [products, setProducts] = useState<ProductSchema[]>([]);
  return (
    <>
      <div className="mt-4 grid grid-cols-4 gap-x-2">
        {PRODUCT_CATEGORIES.map((category) => (
          <ProductCategoryCard
            key={category.title}
            title={category.title}
            icon={category.icon}
            backgroundColor={category.backgroundColor}
            total={
              products.filter((product) => product.category === category.title)
                .length
            }
          />
        ))}
      </div>
      <div className="mt-4 text-right">
        <ProductForm setProducts={setProducts} />
      </div>
    </>
  );
};

export default ManageProducts;
