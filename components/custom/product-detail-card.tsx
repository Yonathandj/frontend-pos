import React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import InfoTooltip from "@/components/custom/info-tooltip";

import { ProductDetailCardProps } from "@/types/product";

import Image from "next/image";

import { Pencil, Trash2, View } from "lucide-react";

const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  return (
    <Card className="relative max-w-[200px] space-y-2 overflow-hidden">
      <Carousel>
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.file.name + image.file.size}>
              <figure>
                <Image
                  width={200}
                  height={200}
                  src={image.preview}
                  alt={image.file.name}
                  className="aspect-square"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-44 h-6 w-6" />
        <CarouselNext className="absolute right-2 top-44 h-6 w-6" />
      </Carousel>
      <CardContent className="p-2">
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-xs text-muted-foreground">{product.category}</p>
          </div>
          <p className="font-bold">{product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 p-2">
        <InfoTooltip content="View" side="bottom">
          <Button variant="outline" size="icon" className="rounded-full">
            <View />
          </Button>
        </InfoTooltip>
        <InfoTooltip content="Edit" side="bottom">
          <Button variant="outline" size="icon" className="rounded-full">
            <Pencil />
          </Button>
        </InfoTooltip>
        <InfoTooltip content="Delete" side="bottom">
          <Button variant="destructive" size="icon" className="rounded-full">
            <Trash2 />
          </Button>
        </InfoTooltip>
      </CardFooter>
    </Card>
  );
};

export default ProductDetailCard;
