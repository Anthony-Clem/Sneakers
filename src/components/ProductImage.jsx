"use client";

import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/image-product-4-thumbnail.jpg";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function ProductImage() {
  const [clicked, setClicked] = useState(0);
  const [lbClicked, setLbClicked] = useState(0);

  const thumbnailImages = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const carouselImages = [product1, product2, product3, product4];
  return (
    <div className="w-[445px] flex flex-col gap-8 max-[488px]:w-full">
      <Carousel className="relative">
        <CarouselContent>
          {carouselImages.map((carouselImage, index) => (
            <CarouselItem key={index}>
              <Dialog>
                <DialogTrigger className="max-md:pointer-events-none">
                  <Image
                    src={
                      window.innerWidth <= 412
                        ? carouselImage
                        : carouselImages[clicked]
                    }
                    alt="Product Image"
                    width={445}
                    height={445}
                    className="rounded-[15px]"
                  />
                </DialogTrigger>
                <DialogContent>
                  <Carousel>
                    <CarouselContent>
                      {carouselImages.map((carouselImage, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={carouselImage}
                            alt="Product Image"
                            width={445}
                            height={445}
                            className="rounded-[15px] w-full"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-5" />
                    <CarouselNext className="absolute -right-5" />
                  </Carousel>
                  <div className="flex items-center justify-between w-full">
                    {thumbnailImages.map((thumbnail, index) => (
                      <button
                        key={index}
                        onClick={() => setLbClicked(index)}
                        className={`rounded-[10px] overflow-hidden cursor-pointer border-2 ${
                          index === lbClicked
                            ? "border-[#FF7E1B]"
                            : "border-transparent"
                        }`}
                      >
                        <Image
                          src={thumbnail}
                          alt="Thumbnail Image"
                          width={88}
                          height={88}
                          className={` ${
                            index === lbClicked ? "opacity-75" : ""
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 hidden max-[412px]:block" />
        <CarouselNext className="absolute right-4 hidden max-[412px]:block" />
      </Carousel>

      <div className="flex items-center justify-between max-[488px]:w-full max-[412px]:hidden">
        {thumbnailImages.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => setClicked(index)}
            className={`rounded-[10px] overflow-hidden cursor-pointer border-2 ${
              index === clicked ? "border-[#FF7E1B]" : "border-transparent"
            }`}
          >
            <Image
              src={thumbnail}
              alt="Thumbnail Image"
              width={88}
              height={88}
              className={` ${index === clicked ? "opacity-75" : ""}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
