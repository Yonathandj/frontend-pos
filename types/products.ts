import { z } from "zod";
import { addProductSchema } from "@/validations/products";

import type { LucideIcon } from "lucide-react";

import { UseFormReturn } from "react-hook-form";

export interface ProductCategoryProps {
  category: {
    title: string;
    icon: LucideIcon;
    total: number;
    backgroundColor: string;
  };
}

export interface ProductFormProps {
  form: UseFormReturn<AddProductSchema>;
  setInStep: React.Dispatch<React.SetStateAction<string>>;
}

export type AddProductSchema = z.infer<typeof addProductSchema>;