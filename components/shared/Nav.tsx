"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import right from "@/assets/right.svg";
import { useRouter } from "next/navigation";

const Nav = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    {
      name: "Welcome",
      url: "/",
    },
    {
      name: "For Homes",
      url: "/for-homes",
    },
    {
      name: "For Business",
      url: "/for-business",
    },
    {
      name: "Projects",
      url: "/projects",
    },
  ];
  return (
    <div className="flex flex-col text-[3rem]">
      {links.map((link, index) => (
        <div key={index} className="relative w-fit group">
          <Link onClick={() => setIsOpen(false)} href={link.url} className="">
            <p className="translate-y-[.2rem] md:translate-y-[.8rem] duration-[450ms] cubic">
              {link.name}
            </p>
          </Link>
          <div
            className={`${
              pathname === link.url ? "scale-x-100" : "scale-x-0"
            } absolute w-full h-[1px] bg-black bottom-0 group-hover:scale-x-100 duration-300`}
          ></div>
        </div>
      ))}
      <Link
        href={"/get-a-quote"}
        className={`flex group bg-[#5783C3] hover:bg-[#366cbc] duration-200 items-center px-[2rem] py-[1rem] h-fit gap-[1rem] rounded-full w-fit text-white font-semibold mt-[2rem]`}
        onClick={() => setIsOpen(false)}
      >
        <p className="text-[1.2rem] lg:text-[1.5rem]">Get a Quote</p>
        <Image
          src={right}
          width={25}
          height={25}
          alt="rigth-arrow"
          className="md:group-hover:translate-x-[0.3rem] transition-transform duration-200"
        />
      </Link>
    </div>
  );
};

export default Nav;
