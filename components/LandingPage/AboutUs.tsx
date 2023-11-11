"use client";

import Image from "next/image";
import aboutimg from "@/assets/project1.jpg";
import lowerBillsImg from "@/assets/lower-bills.svg";
import energyImg from "@/assets/energy.svg";
import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";

type Props = {};

const AboutUs = (props: Props) => {
  const { state } = useAppContext();
  return (
    <section className="min-h-screen bg-white py-[4rem] lg:py-[10rem]">
      <div className="flex flex-col items-center gap-[4rem] lg:gap-[2rem] xl:gap-[9rem] lg:flex-row">
        <div>
          <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] font-semibold text-[#5783C3] tracking-wider">
            {dictionary[state]?.aboutUs}
          </h1>
          <p className="opacity-70 mt-[1rem]">
            {dictionary[state]?.aboutUsParagraph}{" "}
            <span className="text-[#3062ae] font-bold">
              {dictionary[state]?.letsGoSolar}
            </span>
          </p>

          <div className="flex flex-col gap-[1.5rem] mt-[2rem]">
            <div>
              <Image
                src={lowerBillsImg}
                width={40}
                height={40}
                alt="lower-bills-svg"
              />
              <div>
                <h3 className="text-[1.3rem] font-bold uppercase mt-[1rem]">
                  {dictionary[state]?.reducedBill}
                </h3>
                <p className="opacity-70">{dictionary[state]?.reducedBillP}</p>
              </div>
            </div>

            <div>
              <Image
                src={energyImg}
                width={40}
                height={40}
                alt="lower-bills-svg"
              />
              <div>
                <h3 className="text-[1.3rem] font-bold uppercase mt-[1rem]">
                  {dictionary[state]?.energy}
                </h3>
                <p className="opacity-70">{dictionary[state]?.energyP}</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={aboutimg}
          width={500}
          height={500}
          alt="about-img"
          className="rounded-[1.5rem]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
