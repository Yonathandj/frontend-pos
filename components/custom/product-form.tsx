"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PackagePlus, X } from "lucide-react";

import {
  PRODUCT_CATEGORIES,
  PRODUCT_IMAGE_MAX_SIZE,
} from "@/constants/products";
import { AddProductSchema } from "@/types/products";
import { addProductSchema } from "@/validations/products";

import { NumericFormat } from "react-number-format";

import Image from "next/image";

import Dropzone from "react-dropzone";

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

  function handleSubmit(values: AddProductSchema) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PackagePlus />
          Add product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Tell us about your product name"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your product description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-x-2">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-2/4">
                    <FormLabel>Category</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
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
                          <SelectItem
                            key={category.title}
                            value={category.title}
                          >
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                      onDrop={field.onChange}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <>
                          <div
                            className="cursor-pointer rounded-md border-2 border-dotted p-4 text-center"
                            {...getRootProps()}
                          >
                            <Input onBlur={field.onBlur} {...getInputProps()} />
                            <span className="text-sm text-muted-foreground">
                              Drag & drop some images here or click to select
                              images
                            </span>
                          </div>
                          <div className="flex gap-x-4">
                            {field.value.map((file) => (
                              <div
                                key={file.name + Math.random.toString()}
                                className="relative"
                              >
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="absolute -right-2 -top-2 rounded-full"
                                  onClick={() => {
                                    field.onChange(
                                      field.value.filter(
                                        (f) => f.name != file.name,
                                      ),
                                    );
                                  }}
                                >
                                  <X className="text-red-600" />
                                </Button>
                                <Image
                                  alt={file.name}
                                  width={100}
                                  height={100}
                                  src={URL.createObjectURL(file)}
                                  onLoad={() => {
                                    URL.revokeObjectURL(
                                      URL.createObjectURL(file),
                                    );
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </Dropzone>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit</Button>
              <DialogClose asChild>
                <Button className="focus-visible:ring-0" variant="destructive">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
