import { z } from "zod";

export const addProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(4, "Name must be at least 4 characters.")
    .max(20, "Name must not be longer than 20 characters."),
  description: z
    .string()
    .trim()
    .min(4, "Description must be at least 4 characters.")
    .max(60, "Description must not be longer than 60 characters."),
  category: z.string().trim().min(2, "Select the categories provided."),
  price: z
    .string()
    .trim()
    .min(4, "Price must not be empty.")
    .startsWith("Rp00", "Price must not be empty."),
});
