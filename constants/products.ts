import { Beef, Dessert, Martini, Salad } from "lucide-react";

export const PRODUCT_CATEGORIES = [
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

export const PRODUCT_IMAGE_MAX_SIZE = 10 * 1024 * 1024;
export const PRODUCT_IMAGE_ACCEPTABLE_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
];

export const FIRST_FORM_STEP = "FIRST";
export const SECOND_FORM_STEP = "SECOND";