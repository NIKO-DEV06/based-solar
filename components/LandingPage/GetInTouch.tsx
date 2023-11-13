"use client";

import Image from "next/image";
import right from "@/assets/right.svg";
import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";
import Link from "next/link";

const GetInTouch = () => {
  const { state } = useAppContext();
  return (
    <section className="mb-[9rem]">
      <aside
        style={{
          position: "relative",
          backgroundImage: "url(/bgcta.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`text-black mx-[1rem] lg:mx-[5rem] lg:py-[3rem] rounded-[1rem] px-[1rem] z-0`}
      >
        <div className="pb-[2rem] text-white lg:flex lg:justify-center lg:items-center lg:gap-[2rem]">
          <div className="text-center z-10">
            <h1 className="font-bold  text-[1.5rem] mx-[1rem] pt-[3rem] pb-[1rem] lg:w-[25rem] lg:text-left lg:text-[1.7rem] uppercase">
              {dictionary[state]?.getInTouch}
            </h1>
            <p className="mx-[1rem] font-medium mt-[1rem] lg:mt-0 md:mx-auto md:w-[30rem] lg:text-left lg:w-[25rem]">
              {dictionary[state]?.getInTouchP}
            </p>
          </div>
          <Link
            href={"/get-a-quote"}
            className="flex group z-10 bg-[#5783C3] hover:bg-[#366cbc] duration-200 items-center px-[1.5rem] py-[1rem] h-fit gap-[1rem] rounded-full w-fit text-white font-semibold mt-[2rem] mx-auto lg:mx-0 lg:mt-0"
          >
            <p className="text-[0.9rem] xl:text-[1rem]">
              {" "}
              {dictionary[state]?.getAQuote}
            </p>
            <Image
              src={right}
              width={25}
              height={25}
              alt="rigth-arrow"
              className=" md:group-hover:translate-x-[0.3rem] transition-transform duration-200"
            />
          </Link>
        </div>
        <div
          className="rounded-[1rem]"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "brightness(90%)",
            zIndex: -1,
          }}
        ></div>
      </aside>
    </section>
  );
};

export default GetInTouch;
