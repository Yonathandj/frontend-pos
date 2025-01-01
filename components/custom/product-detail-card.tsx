"use client";

import React, { useState } from "react";

import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import InfoTooltip from "@/components/custom/info-tooltip";
import ConfirmationAlertDialog from "@/components/custom/confirmation-alert-dialog";

import { ProductDetailCardProps } from "@/types/product";

import { Pencil, Trash2 } from "lucide-react";

const ProductDetailCard = ({
  product,
  setProducts,
}: ProductDetailCardProps) => {
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    useState<boolean>(false);

  function handleDelete(name: string) {
    setProducts((products) =>
      products.filter((product) => product.name !== name),
    );
  }
  return (
    <>
      <Card className="relative w-[200px] space-y-2 overflow-hidden">
        <Carousel>
          <CarouselContent>
            {product.images.map((image) => (
              <CarouselItem key={image.file.name + image.file.size}>
                <figure className="w-[200px]">
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      fill
                      src={image.preview}
                      alt={image.file.name}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-44 h-6 w-6" />
          <CarouselNext className="absolute right-2 top-44 h-6 w-6" />
        </Carousel>
        <CardContent className="px-2 pb-1">
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-xs text-muted-foreground">
                {product.category}
              </p>
            </div>
            <p className="font-bold">{product.price}</p>
          </div>
          <p className="mt-2 text-xs">{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2 px-2 pb-1">
          <InfoTooltip content="Edit" side="bottom">
            <Button variant="outline" size="icon" className="rounded-full">
              <Pencil />
            </Button>
          </InfoTooltip>
          <InfoTooltip content="Delete" side="bottom">
            <Button
              variant="destructive"
              size="icon"
              className="rounded-full"
              onClick={() => setOpenConfirmationDialog(true)}
            >
              <Trash2 />
            </Button>
          </InfoTooltip>
        </CardFooter>
      </Card>
      <ConfirmationAlertDialog
        title="Delete product?"
        description="This product will no longer be available in your catalog. Do you want to continue?"
        actionMsg="Delete"
        actionFn={() => {
          handleDelete(product.name);
        }}
        openConfirmationDialog={openConfirmationDialog}
        setOpenConfirmationDialog={setOpenConfirmationDialog}
      />
    </>
  );
};

export default ProductDetailCard;
