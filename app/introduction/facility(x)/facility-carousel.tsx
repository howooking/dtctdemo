"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import CarouselIndex from "./carousel-index";
import ImageDialog from "./image-dialog";

export default function FacilityCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="lg:w-2/3 overflow-hidden"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <ImageDialog image={image} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-6 sm:flex hidden" />
      <CarouselNext className="absolute right-6 sm:flex hidden" />
      <CarouselIndex count={count} current={current} setCurrent={setCurrent} />
    </Carousel>
  );
}
