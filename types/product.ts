import { z } from "zod";

import { UseFormReturn } from "react-hook-form";
import { productFormSchema } from "@/validations/product";

import type { LucideIcon } from "lucide-react";

export interface ProductCategoryCardProps {
  title: string;
  icon: LucideIcon;
  backgroundColor: string;
  total: number;
}

export interface ProductFormProps {
  setProducts: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        description: string;
        category: string;
        price: string;
        images: {
          file: File;
        }[];
      }[]
    >
  >;
}

export interface StepProductFormProps {
  form: UseFormReturn<ProductFormSchema>;
  setInStep: React.Dispatch<React.SetStateAction<string>>;
  setOpenFormDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductSchema {
  name: string;
  description: string;
  category: string;
  price: string;
  images: {
    file: File;
  }[];
}

export type ProductFormSchema = z.infer<typeof productFormSchema>;
