"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";

import FirstStepProductForm from "@/components/custom/first-step-product-form";
import SecondStepProductForm from "@/components/custom/second-step-product-form";

import { FIRST_FORM_STEP, SECOND_FORM_STEP } from "@/constants/products";
import { ProductFormSchema, ProductFormProps } from "@/types/products";
import { productFormSchema } from "@/validations/products";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PackagePlus } from "lucide-react";

const ProductForm = ({ setProducts }: ProductFormProps) => {
  const form = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: "",
      images: [],
    },
  });

  const [inStep, setInStep] = useState<string>(FIRST_FORM_STEP);
  const [openFormDialog, setOpenFormDialog] = useState<boolean>(false);

  function handleSubmit(values: ProductFormSchema) {
    setProducts((prev) => [
      ...prev,
      {
        name: values.name,
        description: values.description,
        category: values.category,
        price: values.price,
        images: values.images.map(({ file }) => ({ file })),
      },
    ]);

    setOpenFormDialog(false);
    form.reset({
      name: "",
      description: "",
      category: "",
      price: "",
      images: [],
    });
  }

  return (
    <Dialog open={openFormDialog} onOpenChange={setOpenFormDialog}>
      <DialogTrigger asChild>
        <Button className="rounded-2xl">
          <PackagePlus />
          Add product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Add Product to Catalog</DialogTitle>
          <DialogDescription>
            Please fill in the details of the new product you want to add to the
            catalog.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            {inStep === FIRST_FORM_STEP ? (
              <FirstStepProductForm form={form} setInStep={setInStep} />
            ) : inStep == SECOND_FORM_STEP ? (
              <SecondStepProductForm form={form} setInStep={setInStep} />
            ) : null}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
