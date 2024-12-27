import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ProductCategoryCardProps } from "@/types/product";

const ProductCategoryCard = (props: ProductCategoryCardProps) => {
  return (
    <Card className={`${props.backgroundColor}`}>
      <CardHeader>
        <CardTitle>
          <props.icon className="h-10 w-10 rounded-full bg-white p-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <p className="text-sm">
          {props.total} {props.total < 2 ? "item" : "items"}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCategoryCard;
