"use client";

import { Carousel } from "@/MT";
import Image from "next/image";
import { imgs } from "@/projectsImgs";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

export default function CarouselSlider({
  selectedImage,
}: {
  selectedImage: any;
}) {
  const [orderedImgs, setOrderedImgs] = useState<
    {
      url: StaticImageData;
      id: number;
    }[]
  >([]);

  useEffect(() => {
    const selectedIndex = imgs.findIndex((img) => img.id === selectedImage);

    const newOrder = imgs
      .slice(selectedIndex)
      .concat(imgs.slice(0, selectedIndex));
    setOrderedImgs(newOrder);
  }, [selectedImage]);

  return (
    <Carousel className="rounded-xl relative z-10">
      {orderedImgs.map((img) => (
        <Image
          key={img.id}
          src={img.url}
          width={200}
          height={200}
          alt="projects-imgs"
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
