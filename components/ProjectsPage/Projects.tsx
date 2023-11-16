"use client";

import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import Image from "next/image";
import GalleryPopup from "./ProjectsModalSlider";
import { imgs } from "@/projectsImgs";
import eye from "@/assets/eye.svg";
import GetInTouch from "../LandingPage/GetInTouch";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId: any) => {
    setSelectedImage(imageId);
  };

  const { state } = useAppContext();
  return (
    <>
      <section className="min-h-screen pt-[9rem] pb-[12rem]">
        <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] font-bold text-[#5783C3] uppercase text-center  tracking-wider">
          {dictionary[state]?.projectsNav}
        </h1>
        <p className="text-center opacity-60 mb-[3rem] text-[0.9rem]">{`(${dictionary[state]?.openSlider})`}</p>
        <div className="flex flex-wrap gap-[2rem] justify-center">
          {imgs.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden group relative cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                handleImageClick(img.id);
              }}
            >
              <Image
                src={img.url}
                width={1000}
                height={1000}
                alt="project-img"
                className="w-[380px] h-[380px] object-cover object-top cursor-pointer group-hover:scale-110 duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-60 duration-200"></div>
              <Image
                src={eye}
                width={40}
                height={40}
                className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-1/2 opacity-0 lg:group-hover:opacity-100 duration-200"
                alt="eye-svg"
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
      <GetInTouch url="/projectscta.png" />
    </>
  );
};

export default Projects;
