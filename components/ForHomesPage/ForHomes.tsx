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
        />
        <h1 className="lg:text-[2.2rem] text-[1.8rem] font-medium lg:font-normal leading-[2.3rem] mt-[2.5rem] lg:mt-[4rem] lg:leading-[3.5rem] md:textcenter lg:w[90%]">
          A solar power plant on a private property is a profitable investment
        </h1>
        <p className="my-[1.5rem] opacity-80 lg:text-[1.1rem]">
          With a solar power plant, you can start producing electricity right
          away, save money on energy bills, and even profit from selling excess
          power. The clean energy source of the future is solar electricity.
        </p>
        <div className="flex flex-col lg:flex-row gap-[2rem] lg:itemscenter mt-[3rem] lg:mt-[7rem] lg:mb-[2rem]">
          <div className="lg:w-[50%]">
            <h1 className="text-[1.5rem] lg:text-[2rem] font-light underline">
              The solar power plant owned by the household
            </h1>
            <p className="opacity-80 mt-[1rem] lg:text-[1.1rem]">
              Establishing a solar power system at the household level is a
              smart investment with a range of tangible benefits. Let's explore
              the advantages of having a residential solar power plant in more
              detail:
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
