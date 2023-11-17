"use client";

import Image from "next/image";
import forhomesImg from "@/assets/forhomes.jpg";
import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";
import GetInTouch from "../LandingPage/GetInTouch";
import AccordionForHomes from "./AccordionForHomes";

const ForHomes = () => {
  const { state } = useAppContext();
  return (
    <>
      <section className="min-h-screen pt-[9rem] px-[1.2rem] md:px-[5rem] lg:px-[7rem] pb-[6rem]">
        <Image
          src={forhomesImg}
          width={2000}
          height={2000}
          alt="for-homes"
          className="w-full md:w-[80%] mx-auto lg:w-[60rem] mt-[1rem]"
          loading="lazy"
        />
        <h1 className="lg:text-[2.2rem] text-[1.8rem] font-medium lg:font-normal leading-[2.3rem] mt-[2.5rem] lg:mt-[4rem] lg:leading-[3.5rem] md:textcenter lg:w[90%]">
          {dictionary[state]?.homesHeading}
        </h1>
        <p className="my-[1.5rem] opacity-80 lg:text-[1.1rem]">
          {dictionary[state]?.homesP}
        </p>
        <div className="flex flex-col lg:flex-row gap-[2rem] lg:itemscenter mt-[3rem] lg:mt-[7rem] lg:mb-[2rem]">
          <div className="lg:w-[50%]">
            <h1 className="text-[1.5rem] lg:text-[2rem] font-light underline">
              {dictionary[state]?.homesHeading2}
            </h1>
            <p className="opacity-80 mt-[1rem] lg:text-[1.1rem]">
              {dictionary[state]?.homesP2}
            </p>
          </div>
          <div className="lg:w-[50%]">
            <AccordionForHomes />
          </div>
        </div>
      </section>
      <GetInTouch url="/forhomesquote.png" />
    </>
  );
};

export default ForHomes;
