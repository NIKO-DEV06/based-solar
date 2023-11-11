"use client";

import solar3d from "@/assets/solar-3d.svg";
import Image from "next/image";
import offersvg from "@/assets/offer.svg";
import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";

const WhatWeOffer = () => {
  const { state } = useAppContext();
  const offers = [
    {
      title: dictionary[state]?.forHouses,
      desc: dictionary[state]?.forHousesP,
    },
    {
      title: dictionary[state]?.forBusiness,
      desc: dictionary[state]?.forBusinessP,
    },
    {
      title: dictionary[state]?.forAssociation,
      desc: dictionary[state]?.forAssociationP,
    },
    {
      title: dictionary[state]?.gurantee,
      desc: dictionary[state]?.guranteeP,
    },
    {
      title: dictionary[state]?.demand,
      desc: dictionary[state]?.demandP,
    },
    {
      title: dictionary[state]?.capacity,
      desc: dictionary[state]?.capacityP,
    },
  ];
  return (
    <section className="min-h-screen pb-[4rem] lg:pb-[10rem]">
      <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] font-semibold text-[#5783C3] uppercase text-center mb-[3rem] tracking-wider">
        What do we offer <br /> to you
      </h1>
      <Image
        src={solar3d}
        width={600}
        height={600}
        alt="solar-3d"
        className="mx-auto"
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem] pt-[5rem] lg:translate-x-[2rem]">
        {offers.map((offer) => (
          <div className="flex flex-col gap-[0.2rem] transition-transform lg:hover:translate-y-[-1rem] duration-300">
            <Image src={offersvg} width={40} height={40} alt="offer-svg" />
            <h3 className="text-[1.1rem] lg:text-[1.3rem] font-semibold">
              {offer.title}
            </h3>
            <p className="opacity-70 text-[0.8rem] lg:text-[0.9rem] lg:w-[80%]">
              {offer.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
