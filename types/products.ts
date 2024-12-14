import { z } from "zod";
import { addProductSchema } from "@/validations/products";

import type { LucideIcon } from "lucide-react";

export interface ProductCategoryProps {
  title: string;
  icon: LucideIcon;
  total: number;
  backgroundColor: string;
}

export type AddProductSchema = z.infer<typeof addProductSchema>;
