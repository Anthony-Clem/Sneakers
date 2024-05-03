"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import Image from "next/image";

export default function Lightbox() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="relative w-[445px]">
          {carouselImages.map((carouselImage, index) => (
            <Image
              src={carouselImage}
              alt="product image"
              height={445}
              width={445}
              className="w-full"
              key={index}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </div>
  );
}
