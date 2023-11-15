"use client";

import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import Image from "next/image";
import GalleryPopup from "./ProjectsModalSlider";
import { imgs } from "@/projectsImgs";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId: any) => {
    setSelectedImage(imageId);
  };

  const { state } = useAppContext();
  return (
    <section className="min-h-screen pt-[9rem] pb-[12rem]">
      <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] font-bold text-[#5783C3] uppercase text-center mb-[3rem] tracking-wider">
        {dictionary[state]?.projectsNav}
      </h1>
      <div className="flex flex-wrap gap-[2rem] justify-center">
        {imgs.map((img) => (
          <div key={img.id} className="overflow-hidden group">
            <Image
              src={img.url}
              width={300}
              height={300}
              alt="project-img"
              className="w-[380px] h-[380px] object-cover object-top cursor-pointer group-hover:scale-110 duration-300"
              onClick={() => {
                setIsOpen(true);
                handleImageClick(img.id);
              }}
            />
          </div>
        ))}
      </div>
      <GalleryPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedImage={selectedImage}
      />
    </section>
  );
};

export default Projects;
