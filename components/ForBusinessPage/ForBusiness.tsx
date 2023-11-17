"use client";

import Image from "next/image";
import forBusiness from "@/assets/business.jpg";
import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";
import GetInTouch from "../LandingPage/GetInTouch";
import AccordionForHomes from "../ForHomesPage/AccordionForHomes";

const ForBusiness = () => {
  const { state } = useAppContext();
  return (
    <>
      <section className="min-h-screen pt-[5rem] pb-[6rem]">
        <Image
          src={forBusiness}
          width={2000}
          height={2000}
          alt="for-homes"
          className="w-full md:w[80%] mxauto lg:w[60rem] mt[1rem] object-cover h-[25rem] lg:h-[30rem]"
          loading="lazy"
        />
        <div className="px-[1.2rem] md:px-[5rem] lg:px-[7rem]">
          <h1 className="lg:text-[2.2rem] text-[1.8rem] font-medium lg:font-normal leading-[2.3rem] mt-[2.5rem] lg:mt-[4rem] lg:leading-[3.5rem] md:textcenter lg:w[90%]">
            {dictionary[state]?.businessHeading}
          </h1>
          <p className="my-[1.5rem] opacity-80 lg:text-[1.1rem]">
            {dictionary[state]?.businessP}
          </p>
          <div className="flex flex-col lg:flex-row gap-[2rem] lg:itemscenter mt-[3rem] lg:mt-[7rem] lg:mb-[2rem]">
            <div className="lg:w-[50%]">
              <h1 className="text-[1.5rem] lg:text-[2rem] font-light underline">
                {dictionary[state]?.businessHeading2}
              </h1>
              <p className="opacity-80 mt-[1rem] lg:text-[1.1rem]">
                {dictionary[state]?.businessP2}
              </p>
            </div>
            <div className="lg:w-[50%]">
              <AccordionForHomes />
            </div>
          </div>
        </div>
      </section>
      <GetInTouch url="/forbusi.jpg" />
    </>
  );
};

export default ForBusiness;
