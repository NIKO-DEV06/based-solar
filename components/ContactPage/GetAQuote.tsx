"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import emailjs from "@emailjs/browser";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import right from "@/assets/right.svg";

const GetAQuote = () => {
  const [isSending, setIsSending] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().trim().required("Please enter your name"),
    email: yup.string().email().required("Please enter a valid email address"),
    message: yup.string().trim().required("Please enter a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormHandler = async (data: any) => {
    setIsSending(true);
    try {
      //   const response = await emailjs.sendForm(
      //     process.env.NEXT_SERVICE_ID ?? "",
      //     process.env.NEXT_TEMPLATE_ID ?? "",
      //     "#contact-form",
      //     process.env.NEXT_KEY_ID ?? ""
      //   );
      reset();
      setIsSending(false);

      toast.success("Message Sent!");
    } catch (error) {
      setIsSending(false);
      console.log(error);
      toast.error("Message failed to send");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="min-h-screen bg-white text-black pb-[8rem] pt-[5rem] md:pt-[3rem] lg:pt-[4rem]">
        {/* <Reveal y={100} z="z-[10]"> */}
        <h1 className="mt-[4.5rem] md:mt-[7rem] mb-[2rem] md:mb-[5rem] text-[2rem] md:text-[2.8rem] md:leading-[4.5rem] lg:text-[4rem] lg:leading-[4.8rem] px-[1.2rem] md:px-[5rem] lg:px-[7rem] leading-[3.3rem]">
          Let us know more about <br /> your
          <span className="text-[#5783C3]"> solar plan</span>{" "}
          <motion.span
            animate={{ rotate: [0, 10, -8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="inline-block"
          >
            👋
          </motion.span>
        </h1>
        {/* </Reveal> */}

        <form
          id="contact-form"
          onSubmit={handleSubmit(submitFormHandler)}
          className="px-[1.2rem] md:px-[5rem] lg:px-[7rem] mt-[3rem] flex flex-col gap-[3rem] md:gap-[5rem]"
        >
          {/* <ImageReveal> */}
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              name="name"
              autoComplete="off"
              placeholder="Your name"
              className={`border-b-[0.9px] md:border-b-[1.5px] ${
                errors.name
                  ? "border-b-[#ff0000] focus:border-b-[#ff0000]"
                  : "border-b-[#00000045] focus:border-b-black"
              } w-full rounded-none appearance-none outline-none pb-[0.6rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50 md:text-[2.5rem] md:font-sofia relative`}
            />
            <p className="text-[#ff0000] font-sofia md:text-[1.1rem] text-left pt-1 md:pt-[1rem] absolute tracking-wide">
              {errors.name?.message}
            </p>
          </div>
          {/* </ImageReveal> */}
          {/* <ImageReveal> */}
          <div>
            <input
              type="text"
              {...register("email")}
              name="email"
              autoComplete="off"
              placeholder="Your email"
              className={`border-b-[0.9px] md:border-b-[1.5px] ${
                errors.email
                  ? "border-b-[#ff0000] focus:border-b-[#ff0000]"
                  : "border-b-[#00000045] focus:border-b-black"
              } w-full rounded-none appearance-none outline-none pb-[0.6rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50 md:text-[2.5rem] md:font-sofia relative`}
            />
            <p className="text-[#ff0000] font-sofia md:text-[1.1rem] text-left pt-1 md:pt-[1rem] absolute tracking-wide">
              {errors.email?.message}
            </p>
          </div>
          {/* </ImageReveal> */}
          {/* <ImageReveal> */}
          <div>
            <input
              type="text"
              {...register("message")}
              name="message"
              autoComplete="off"
              placeholder="Tell us about your project"
              className={`border-b-[0.9px] md:border-b-[1.5px] ${
                errors.message
                  ? "border-b-[#ff0000] focus:border-b-[#ff0000]"
                  : "border-b-[#00000045] focus:border-b-black"
              } w-full rounded-none appearance-none outline-none pb-[0.6rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50 md:text-[2.5rem] md:font-sofia relative`}
            />
            <p className="text-[#ff0000] font-sofia md:text-[1.1rem] text-left pt-1 md:pt-[1rem] absolute tracking-wide">
              {errors.message?.message}
            </p>
          </div>
          {/* </ImageReveal> */}

          {/* <Reveal y={100} width="100%"> */}
          <button
            className={`flex group bg-[#5783C3] hover:bg-[#366cbc] duration-200 items-center px-[2rem] py-[1rem] h-fit gap-[1rem] rounded-full w-fit text-white font-semibold ${
              isSending && "opacity-70"
            }`}
          >
            <p className="text-[1.2rem] lg:text-[1.5rem]">
              {isSending ? "Sending..." : "Submit"}
            </p>
            <Image
              src={right}
              width={25}
              height={25}
              alt="rigth-arrow"
              className=" md:group-hover:translate-x-[0.3rem] transition-transform duration-200"
            />
          </button>
          {/* </Reveal> */}
        </form>
      </section>
    </>
  );
};

export default GetAQuote;
