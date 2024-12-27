import React, { useEffect, useState } from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import ConfirmationAlertDialog from "@/components/custom/confirmation-alert-dialog";

import {
  FIRST_FORM_STEP,
  PRODUCT_CATEGORIES,
  PRODUCT_IMAGE_MAX_SIZE,
} from "@/constants/product";
import { StepProductFormProps } from "@/types/product";

import Dropzone from "react-dropzone";
import Image from "next/image";

import { NumericFormat } from "react-number-format";

import { ChevronLeft, X } from "lucide-react";

const SecondStepProductForm = ({
  form,
  setInStep,
  setOpenFormDialog,
}: StepProductFormProps) => {
  const images = form.watch("images");
  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [images]);

  const [openConfirmationDialog, setOpenConfirmationDialog] =
    useState<boolean>(false);

  function handleValidateCancelation() {
    if (
      form.getValues("name").trim() !== "" ||
      form.getValues("description").trim() !== "" ||
      form.getValues("category").trim() !== "" ||
      form.getValues("price").trim() !== "" ||
      form.getValues("images").length > 0
    ) {
      setOpenConfirmationDialog(true);
    } else {
      setOpenFormDialog(false);
      setInStep(FIRST_FORM_STEP);
    }
  }

  function handleCancelation() {
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
  }

  return (
    <>
      <div className="flex gap-x-2">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-2/4">
              <FormLabel>Category</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        <span className="text-muted-foreground">
                          Tell us about your product category
                        </span>
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <SelectItem key={category.title} value={category.title}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Help customers find your product by category.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field: { ref, onChange, ...rest } }) => (
            <FormItem className="w-2/4">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <NumericFormat
                  placeholder="Tell us about your product price"
                  autoComplete="off"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  // react number format attributes
                  getInputRef={ref}
                  prefix="Rp"
                  allowNegative={false}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={2}
                  onValueChange={(value) => {
                    onChange(value.formattedValue);
                  }}
                  {...rest}
                />
              </FormControl>
              <FormDescription>
                Set a fair price that reflects your product’s value.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="images"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Images</FormLabel>
            <FormControl>
              <Dropzone
                accept={{
                  "image/*": [".png", ".jpg", ".jpeg"],
                }}
                maxSize={PRODUCT_IMAGE_MAX_SIZE}
                onDrop={(files) => {
                  field.onChange(
                    files.map((file) => ({
                      file,
                      preview: URL.createObjectURL(file),
                    })),
                  );
                }}
                onDropRejected={() => {
                  form.setError("images", {
                    type: "custom",
                    message: "Image size must be less than or equal to 10 MB.",
                  });
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <>
                    <div
                      className="cursor-pointer rounded-md border-2 border-dotted p-3 text-center"
                      {...getRootProps()}
                    >
                      <Input onBlur={field.onBlur} {...getInputProps()} />
                      <span className="text-sm text-muted-foreground">
                        Drag & drop some images here or click to select images
                      </span>
                    </div>
                  </>
                )}
              </Dropzone>
            </FormControl>
            <FormDescription>
              Upload a high-quality images to showcase your product. <br />
              Technical notes: Maximum 4 images. PNG, JPG, and JPEG only. Max
              size: 10 MB.
            </FormDescription>
            <FormMessage />

            <div className="flex items-center gap-x-4">
              {field.value.map((obj) => (
                <div key={obj.file.name + obj.file.size} className="relative">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                    onClick={() => {
                      URL.revokeObjectURL(obj.preview);
                      field.onChange(
                        field.value.filter(
                          (objj) => objj.file.name !== obj.file.name,
                        ),
                      );
                    }}
                  >
                    <X />
                  </Button>
                  <Image
                    width={200}
                    height={200}
                    src={obj.preview}
                    alt={obj.file.name}
                  />
                </div>
              ))}
            </div>
          </FormItem>
        )}
      />

      <div className="flex items-center justify-between">
        <Button
          className="rounded-full"
          size="icon"
          onClick={() => {
            setInStep(FIRST_FORM_STEP);
          }}
        >
          <ChevronLeft />
        </Button>
        <div>
          <Button type="submit" className="rounded-2xl">
            Submit
          </Button>
          <Button
            variant="destructive"
            type="button"
            className="ml-2 rounded-2xl"
            onClick={() => handleValidateCancelation()}
          >
            Cancel
          </Button>
        </div>
      </div>
      <ConfirmationAlertDialog
        title="Discard changes?"
        description="All unsaved changes will be lost. You can always come back and fill out the form again."
        actionMsg="Discard"
        actionFn={handleCancelation}
        openConfirmationDialog={openConfirmationDialog}
        setOpenConfirmationDialog={setOpenConfirmationDialog}
      />
    </>
  );
};

export default SecondStepProductForm;
