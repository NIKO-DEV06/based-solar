"use client";

import Image from "next/image";
import right from "@/assets/right.svg";
import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";
import Link from "next/link";

const HeroSection = () => {
  const { state } = useAppContext();
  return (
    <section className="bg-white min-h-screen pt-[10rem] lg:pt-[11rem]">
      <div className="flex flex-col gap-[1rem] lg:flex-row justify-center items-center lg:justify-between">
        <div className="flex flex-col gap-[1rem]">
          <h3 className="text-[1.1rem] tracking-wider opacity-70 uppercase">
            {dictionary[state]?.heroExperience}
          </h3>
          <h1 className="text-[2.1rem] lg:text-[2.5rem] xl:text-[3.3rem] w-[90%] lg:w-[95%] xl:w-[70%] leading-[3rem] lg:leading-[4rem] xl:leading-[4.5rem] font-[600]">
            <span className="text-[#5783C3]">
              {" "}
              {dictionary[state]?.basedSolarHero}
            </span>{" "}
            {dictionary[state]?.heroHeader}
          </h1>
          <p className="opacity-70 w-[90%] xl:text-[1.1rem] xl:w-[80%]">
            {dictionary[state]?.heroP}
          </p>
          <Link
            href={"/get-a-quote"}
            className="flex group bg-[#5783C3] hover:bg-[#366cbc] duration-200 items-center px-[1.5rem] py-[1rem] gap-[1rem] rounded-full w-fit text-white font-semibold mt-[0.5rem]"
          >
            <p> {dictionary[state]?.getAQuote}</p>
            <Image
              src={right}
              width={25}
              height={25}
              alt="rigth-arrow"
              className=" md:group-hover:translate-x-[0.3rem] transition-transform duration-200"
            />
          </Link>
        </div>
        <video
          src="/animation.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="w-[30rem] mt-[2rem] lg:mt-0 lg:scale-[1.1]"
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
