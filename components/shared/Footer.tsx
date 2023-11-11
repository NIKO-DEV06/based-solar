import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.jpg";
import phone from "@/assets/phone.svg";
import location from "@/assets/location.svg";
import mail from "@/assets/mail.svg";
import facebook from "@/assets/facebook.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1c1b1d] text-white min-h-[80vh] pt-[7rem] pb-[6rem] lg:pb-0">
      <div className={`lg:flex lg:flex-col lg:items-center`}>
        <div className="lg:flex lg:gap-[23rem] xl:gap-[32rem]">
          <Image
            src={logo}
            width={190}
            height={190}
            alt="logo"
            className="mx-auto lg:translate-x[-1.3rem]"
          />

          <hr className="lg:hidden border-[#6b686e] w-[85%] mx-auto py-[1rem] mt-[1rem]" />
          <div className="flex flex-col lg:flex-row gap-[1.2rem] lg:gap-[1rem] items-center font-[400] uppercase tracking-widest text-[0.95rem] lg:text-[0.85rem] xl:text-[0.95rem]">
            <Link className="hover:opacity-50 duration-300" href={"/"}>
              For homes
            </Link>
            <Link className="hover:opacity-50 duration-300" href={"/"}>
              For Busniess
            </Link>
            <Link className="hover:opacity-50 duration-300" href={"/"}>
              Projects
            </Link>
            <Link className="hover:opacity-50 duration-300" href={"/"}>
              Contact
            </Link>
          </div>
        </div>
        <hr className="lg:border-[#6b686e] lg:w-[82%] lg:mx-auto lg:py-[1rem] lg:mt-[1rem] hidden lg:flex" />
        <div className="lg:flex lg:gap-[23rem] xl:gap-[32rem]">
          <div className="py-[2rem] mx-auto flex flex-col gap-[1rem] items-center lg:items-start text-[0.95rem]">
            <p className="font-[600] text-[1.1rem] ">
              Contact Us (Bulgaria, Sofia)
            </p>
            <p className="opacity-60">Phone: +359 897050732 - EN</p>
            <p className="opacity-60">Phone: +359 877198234 - BG</p>
            <p className="opacity-60">Mail: contact@basedsolar.com</p>
          </div>
          <div className="lg:translate-y-[3rem]">
            <div className="flex justify-center lg:justify-end gap-[1.5rem]">
              <Link href={""}>
                <Image
                  alt="facebook"
                  src={facebook}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={""}>
                <Image
                  alt="linkedin"
                  src={linkedin}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={""}>
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
              © 2023 Based Solar. All Rights Reserved
            </p>
            <Link
              href={"/"}
              className="text-center translate-y-[2.5rem] opacity-60 block lg:text-left"
            >
              Privay Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
