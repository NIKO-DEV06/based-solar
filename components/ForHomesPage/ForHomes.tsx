"use client";

import Image from "next/image";
import forhomesImg from "@/assets/forhomes.jpg";
import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";

const ForHomes = () => {
  const { state } = useAppContext();
  return (
    <section className="min-h-screen pt-[9rem]">
      <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] font-bold text-[#5783C3] uppercase text-center tracking-wider">
        {dictionary[state]?.homeNav}
      </h1>
      <Image
        src={forhomesImg}
        width={2000}
        height={2000}
        alt="for-homes"
        className="w-full md:w-[80%] mx-auto lg:w-[60rem] mt-[1rem]"
      />
    </section>
  );
};

export default ForHomes;
