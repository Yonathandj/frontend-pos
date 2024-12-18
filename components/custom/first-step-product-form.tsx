import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { SECOND_FORM_STEP } from "@/constants/products";
import { ProductFormStepProps } from "@/types/products";

import { ChevronRight } from "lucide-react";

const FirstStepProductForm = ({ form, setInStep }: ProductFormStepProps) => {
  return (
    <>
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
            <FormDescription>
              Give your product a clear and catchy name. This name will be
              visible to your customers, so make sure it reflects the quality
              and uniqueness of your product!.
            </FormDescription>
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
            <FormDescription>
              Write a short but captivating description to highlight what makes
              your product special. This will help customers better understand
              and connect with your product.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex items-center justify-end">
        <Button
          className="rounded-full"
          size="icon"
          onClick={() => {
            setInStep(SECOND_FORM_STEP);
          }}
        >
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};

export default FirstStepProductForm;
