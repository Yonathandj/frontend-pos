import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ProductCategoryProps } from "@/types/products";

const ProductCategoryCard = ({ category }: ProductCategoryProps) => {
  return (
    <Card className={`${category.backgroundColor}`}>
      <CardHeader>
        <CardTitle>
          <category.icon className="h-10 w-10 rounded-full bg-white p-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{category.title}</h3>
        <p className="text-sm text-gray-800">
          {category.total} {category.total < 2 ? "item" : "items"}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCategoryCard;
