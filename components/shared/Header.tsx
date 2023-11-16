"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import logo from "../../assets/logo.jpg";
import menuOpen from "../../assets/menu-open.svg";
import intl from "../../assets/web.svg";
import down from "../../assets/down.svg";
import { useState } from "react";
import { dictionary } from "@/content";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOptionIsOpen, setLangOptionIsOpen] = useState(false);
  const { state, setState } = useAppContext();
  const pathname = usePathname();

  const toggleLangOption = () => {
    setLangOptionIsOpen(!langOptionIsOpen);
  };
  const links = [
    {
      name: dictionary[state]?.homeNav,
      url: "/for-homes",
    },
    {
      name: dictionary[state]?.businessNav,
      url: "/for-business",
    },
    {
      name: dictionary[state]?.projectsNav,
      url: "/projects",
    },
    { name: dictionary[state]?.contactNav, url: "/get-a-quote" },
  ];
  return (
    <>
      <header className="bg-white fixed w-full shadow-header-shadow flex justify-between items-center z-30 px-[1.2rem] md:px-[5rem] lg:px-[7rem] py-[0.8rem] text-black top-0">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="based-solar-logo"
            width={1000}
            height={1000}
            priority
            className="w-[160px]"
          />
        </Link>
        <nav className="hidden lg:flex gap-[2rem] xl:gap-[2.5rem] uppercase">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className={`cursor-pointer link-with-underline ${
                pathname === link.url ? "active-link" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-[1rem]">
          <div
            className="relatve flex items-center gap-[0.3rem] cursor-pointer md:hover:bg-[#a0b6e186] duration-200 px-[0.5rem]"
            onClick={toggleLangOption}
          >
            <Image
              src={intl}
              alt="intl"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <p className="uppercase">{state}</p>
            <Image
              src={down}
              alt="down"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>
          <div
            className={`bg-[#A0B6E1] border-[1px] absolute top-[6rem] w-[6rem] text-center space-y-[1.5rem] py-[1.2rem] ${
              langOptionIsOpen ? "" : "hidden"
            }`}
          >
            <p
              onClick={() => {
                setLangOptionIsOpen(false);
                setState("en");
              }}
              className="cursor-pointer"
            >
              EN
            </p>
            <p
              onClick={() => {
                setLangOptionIsOpen(false);
                setState("bg");
              }}
              className="cursor-pointer"
            >
              BG
            </p>
          </div>
          <Image
            src={menuOpen}
            alt="menu"
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
