"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.jpg";
import facebook from "@/assets/facebook.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";

const Footer = () => {
  const { state } = useAppContext();
  return (
    <footer className="bg-[#1c1b1d] text-white min-h-[35rem] pt-[7rem] pb-[6rem] lg:pb-0">
      <div className={`lg:flex lg:flex-col lg:items-center`}>
        <div className="lg:flex lg:gap-[23rem] xl:gap-[32rem]">
          <Image
            src={logo}
            width={190}
            height={190}
            alt="logo"
            className="mx-auto"
          />

          <hr className="lg:hidden border-[#6b686e] w-[85%] mx-auto py-[1rem] mt-[1rem]" />
          <div className="flex flex-col lg:flex-row gap-[1.2rem] lg:gap-[1rem] items-center font-[400] uppercase tracking-widest text-[0.95rem] lg:text-[0.85rem] xl:text-[0.95rem]">
            <Link className="hover:opacity-50 duration-300" href={"/for-homes"}>
              {dictionary[state]?.homeNav}
            </Link>
            <Link
              className="hover:opacity-50 duration-300"
              href={"/for-busniess"}
            >
              {dictionary[state]?.businessNav}
            </Link>
            <Link className="hover:opacity-50 duration-300" href={"/projects"}>
              {dictionary[state]?.projectsNav}
            </Link>
            <Link
              className="hover:opacity-50 duration-300"
              href={"/get-a-quote"}
            >
              {dictionary[state]?.contactNav}
            </Link>
          </div>
        </div>
        <hr className="lg:border-[#6b686e] lg:w-[82%] lg:mx-auto lg:py-[1rem] lg:mt-[1rem] hidden lg:flex" />
        <div className="lg:flex lg:gap-[23rem] xl:gap-[32rem]">
          <div className="py-[2rem] mx-auto flex flex-col gap-[1rem] items-center lg:items-start text-[0.95rem]">
            <p className="font-[600] text-[1.1rem] ">
              {dictionary[state]?.contactUs}
            </p>
            <Link
              href={"tel:+359897050732"}
              className="opacity-60 hover:opacity-100"
            >
              {`${dictionary[state]?.phone}: +359 897050732 - EN`}
            </Link>
            <Link
              href={"tel:+359877198234"}
              className="opacity-60 hover:opacity-100"
            >
              {`${dictionary[state]?.phone}: +359 877198234 - BG`}
            </Link>
            <div className="relative w-fit group translate-y-[-0.3rem]">
              <Link
                href={"mailto:contact@basedsolar.com"}
                className="opacity-60 group-hover:opacity-100 duration-300 text-[1.1rem]"
              >
                contact@basedsolar.com
                <div
                  className={`scale-x-0 absolute w-full h-[1px] bg-white bottom-0 group-hover:scale-x-100 duration-300`}
                ></div>
              </Link>
              <div
                className={`absolute w-full h-[1px] bg-white opacity-[0.4] bottom-0 scale-x-100 duration-300`}
              ></div>
            </div>
          </div>
          <div className="lg:translate-y-[3rem]">
            <div className="flex justify-center lg:justify-end gap-[1.5rem]">
              <Link href={"/"}>
                <Image
                  alt="facebook"
                  src={facebook}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="linkedin"
                  src={linkedin}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="instagram"
                  src={instagram}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
            </div>
            <p className="text-center translate-y-[2rem] text-[0.9rem]">
              {`© ${dictionary[state]?.rights}`}
            </p>
            <Link
              href={"/privacy-policy"}
              className="text-center translate-y-[2.5rem] opacity-60 block lg:text-left hover:opacity-100 duration-200"
            >
              {dictionary[state]?.privacyPolicy}
            </Link>
            <Link
              href={"https://emmanuelayeniko.netlify.app"}
              className="text-center translate-y-[2.8rem] text-[0.9rem] opacity-60 block lg:text-left hover:opacity-100 duration-200"
            >
              {`${dictionary[state]?.poweredBy} @NIKO-DEV`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
