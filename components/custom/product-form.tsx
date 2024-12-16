"use client";

import React, { useState } from "react";

import FirstStepProductForm from "@/components/custom/first-step-product-form";
import SecondStepProductForm from "@/components/custom/second-step-product-form";

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

import { PackagePlus } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FIRST_FORM_STEP, SECOND_FORM_STEP } from "@/constants/products";
import { AddProductSchema } from "@/types/products";
import { addProductSchema } from "@/validations/products";

const ProductForm = () => {
  const form = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: "",
      images: [],
    },
  });

  const [inStep, setInStep] = useState<string>(FIRST_FORM_STEP);

  function handleSubmit(values: AddProductSchema) {
    console.log(values);
  }

  return (
    <Dialog>
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
