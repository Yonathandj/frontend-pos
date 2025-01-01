"use client";

import React, { useState } from "react";

import ProductCategoryCard from "@/components/custom/product-category-card";
import ProductForm from "@/components/custom/product-form";
import ProductDetailCard from "@/components/custom/product-detail-card";

import { PRODUCT_CATEGORIES } from "@/constants/product";
import { ProductFormSchema } from "@/types/product";

const ManageProducts = () => {
  const [products, setProducts] = useState<ProductFormSchema[]>([]);
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
      <div>
        {products.length > 0 ? (
          <div className="mt-4 grid grid-cols-4 gap-x-2 rounded-md bg-sidebar-accent p-4">
            {products.map((product) => (
              <ProductDetailCard
                key={product.name}
                product={product}
                setProducts={setProducts}
              />
            ))}
          </div>
        ) : (
          <div className="mt-4 grid items-center justify-center rounded-md bg-sidebar-accent p-4">
            <span className="text-xs text-muted-foreground">
              The catalog is empty. Start by adding your first product now!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageProducts;
