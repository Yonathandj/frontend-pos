"use client";

import React, { useEffect, useState } from "react";

import ProductCategoryCard from "@/components/custom/product-category-card";
import ProductForm from "@/components/custom/product-form";

import { PRODUCT_CATEGORIES } from "@/constants/product";
import { ProductFormSchema } from "@/types/product";
import ProductDetailCard from "@/components/custom/product-detail-card";

const ManageProducts = () => {
  const [products, setProducts] = useState<ProductFormSchema[]>([]);

  useEffect(() => {
    // do api request & set into useState
    return () => {
      products.forEach((product) => {
        product.images.forEach((image) => {
          if (URL.revokeObjectURL) {
            URL.revokeObjectURL(image.preview);
          }
        });
      });
    };
  }, [products]);
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
        <div className="mt-4 grid grid-cols-4 gap-x-2">
          {products.map((product) => (
            <ProductDetailCard
              key={product.name}
              product={product}
              setProducts={setProducts}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
