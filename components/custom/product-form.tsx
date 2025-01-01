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
import ConfirmationAlertDialog from "@/components/custom/confirmation-alert-dialog";

import { FIRST_FORM_STEP, SECOND_FORM_STEP } from "@/constants/product";
import { ProductFormSchema, ProductFormProps } from "@/types/product";
import { productFormSchema } from "@/validations/product";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast";

import { BellRing, PackagePlus } from "lucide-react";

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

  const { toast } = useToast();

  const [inStep, setInStep] = useState<string>(FIRST_FORM_STEP);
  const [openFormDialog, setOpenFormDialog] = useState<boolean>(false);
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    useState<boolean>(false);

  function handleSubmit() {
    setOpenConfirmationDialog(true);
  }

  function handleSave() {
    const values = form.getValues();
    setProducts((products) => [
      ...products,
      {
        name: values.name,
        description: values.description,
        category: values.category,
        price: values.price,
        images: values.images,
        // images: values.images.map(({ file }) => ({ file, preview: "" })),
      },
    ]);

    setOpenConfirmationDialog(false);
    setOpenFormDialog(false);
    setInStep(FIRST_FORM_STEP);
    form.reset({
      name: "",
      description: "",
      category: "",
      price: "",
      images: [],
    });

    toast({
      title: "Product saved successfully",
      description: "The product has been saved to your catalog.",
    });
  }

  return (
    <>
      <Dialog open={openFormDialog} onOpenChange={setOpenFormDialog}>
        <DialogTrigger asChild>
          <Button className="rounded-2xl">
            <PackagePlus />
            Add product
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[650px]">
          <div className="flex items-center gap-x-8">
            <Button
              variant={inStep === FIRST_FORM_STEP ? "default" : "secondary"}
              size="icon"
              className="relative h-6 w-6 rounded-full"
            >
              {(form.getFieldState("name").invalid ||
                form.getFieldState("description").invalid) &&
              inStep === SECOND_FORM_STEP ? (
                <BellRing className="animate-swing absolute -right-4 -top-2 fill-destructive text-destructive" />
              ) : null}
              1
            </Button>
            <div className="h-[2px] w-[100px] bg-primary"></div>
            <Button
              variant={inStep === SECOND_FORM_STEP ? "default" : "secondary"}
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              2
            </Button>
          </div>
          {inStep === FIRST_FORM_STEP ? (
            <DialogHeader>
              <DialogTitle>Add Product to Catalog</DialogTitle>
              <DialogDescription>
                Please fill in the details of the new product you want to add to
                the catalog.
              </DialogDescription>
            </DialogHeader>
          ) : null}
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              {inStep === FIRST_FORM_STEP ? (
                <FirstStepProductForm
                  form={form}
                  setInStep={setInStep}
                  setOpenFormDialog={setOpenFormDialog}
                />
              ) : inStep == SECOND_FORM_STEP ? (
                <SecondStepProductForm
                  form={form}
                  setInStep={setInStep}
                  setOpenFormDialog={setOpenFormDialog}
                />
              ) : null}
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <ConfirmationAlertDialog
        title="Save product?"
        description="This product will be saved to your catalog. You can always update the details later."
        actionMsg="Save"
        actionFn={handleSave}
        openConfirmationDialog={openConfirmationDialog}
        setOpenConfirmationDialog={setOpenConfirmationDialog}
      />
    </>
  );
};

export default ProductForm;
