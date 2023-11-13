"use client";

import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import Image from "next/image";
import ExampleWrapper from "./ProjectsModalSlider";

const Projects = () => {
  const imgs = [
    {
      url: project3,
      id: 1,
    },
    {
      url: project1,
      id: 3,
    },
    {
      url: project4,
      id: 4,
    },
    {
      url: project2,
      id: 2,
    },
    {
      url: project5,
      id: 5,
    },
    {
      url: project6,
      id: 6,
    },
  ];
  const { state } = useAppContext();
  return (
    <section className="min-h-screen pt-[9rem] pb-[12rem]">
      <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] font-bold text-[#5783C3] uppercase text-center mb-[3rem] tracking-wider">
        {dictionary[state]?.projectsNav}
      </h1>
      <div className="flex flex-wrap gap-[2rem] justify-center">
        {imgs.map((img) => (
          <div className="overflow-hidden group">
            <Image
              src={img.url}
              width={300}
              height={300}
              alt="project-img"
              className="w-[380px] h-[380px] object-cover object-top cursor-pointer group-hover:scale-110 duration-300 "
            />
          </div>
        ))}
      </div>
      {/* <ExampleWrapper /> */}
    </section>
  );
};

export default Projects;
