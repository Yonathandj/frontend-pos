import { z } from "zod";

import { PRODUCT_CATEGORIES } from "@/constants/products";

export const addProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters.")
    .max(20, "Name must not be longer than 20 characters."),
  description: z
    .string()
    .trim()
    .min(3, "Description must be at least 3 characters.")
    .max(60, "Description must not be longer than 60 characters."),
  category: z
    .string()
    .trim()
    .refine((value) => {
      for (const category of PRODUCT_CATEGORIES) {
        if (category.title === value) {
          return true;
        }
      }
      return false;
    }, "One of the categories provided must be selected"),
  price: z
    .string()
    .trim()
    .refine((value) => {
      return (
        parseFloat(value === "" ? "Rp0".substring(2) : value.substring(2)) > 0
      );
    }, "Price must be higher than 0"),
});
