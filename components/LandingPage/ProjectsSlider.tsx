"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";
import Image from "next/image";
import Link from "next/link";
const cards = [
  {
    url: project3,
    id: 1,
  },
  {
    url: project2,
    id: 2,
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
    url: project5,
    id: 5,
  },
  {
    url: project6,
    id: 6,
  },
];

const ProjectsSlider = () => {
  const { state } = useAppContext();
  return (
    <div className="bg-white">
      <div className="translate-y-[5rem]">
        <h1 className="text-[1.8rem] tracking-wider lg:text-[2.2rem] xl:text-[2.8rem] font-semibold text-[#5783C3] uppercase text-center mb-[0.5rem]">
          {dictionary[state]?.projects}
        </h1>
        <p className="text-[1.2rem] lg:text-[1.5rem] text-center opacity-60">
          {dictionary[state]?.projectsP}
        </p>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4 bg[#5782c341] ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: any }) => {
  const { state, setState } = useAppContext();
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
    >
      <Image
        src={card.url}
        width={200}
        height={200}
        alt=""
        className={`w-full ${
          card.id === 2 ? "h-full" : ""
        } absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 duration-200"></div>
      <Link
        href={"/"}
        className="absolute text-[#ffffff] bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 tracking-wider fontsemibold text-center mx-auto uppercase w-fit border-2 border-white py-[0.5rem] px-[1rem] hover:bg-white hover:text-black duration-200 opacity-0 group-hover:opacity-100"
      >
        {dictionary[state]?.viewProjects}
      </Link>
    </div>
  );
};

export default ProjectsSlider;
