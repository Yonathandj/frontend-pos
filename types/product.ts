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
          preview: string;
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

export interface ProductDetailCardProps {
  product: ProductFormSchema;
  setProducts: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        description: string;
        category: string;
        price: string;
        images: {
          file: File;
          preview: string;
        }[];
      }[]
    >
  >;
}

export type ProductFormSchema = z.infer<typeof productFormSchema>;
