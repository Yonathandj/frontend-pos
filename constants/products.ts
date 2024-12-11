import { ProductCategoryProps } from "@/types/products";

import { Beef, Dessert, Martini, Salad } from "lucide-react";

export const PRODUCT_CATEGORIES: ProductCategoryProps[] = [
  {
    title: "Appetizers",
    icon: Salad,
    total: 0,
    backgroundColor: "bg-green-200",
  },
  {
    title: "Main Course",
    icon: Beef,
    total: 0,
    backgroundColor: "bg-orange-200",
  },
  {
    title: "Desserts",
    icon: Dessert,
    total: 0,
    backgroundColor: "bg-pink-200",
  },
  {
    title: "Beverages",
    icon: Martini,
    total: 0,
    backgroundColor: "bg-blue-200",
  },
];
