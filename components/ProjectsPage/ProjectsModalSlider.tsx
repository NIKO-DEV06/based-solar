"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import CarouselSlider from "./CarouselSlider";

const GalleryPopup = ({
  isOpen,
  setIsOpen,
  selectedImage,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedImage: any;
}) => {
  return (
    <SpringModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedImage={selectedImage}
    />
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
  selectedImage,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedImage: any;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-yscroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-fit h-[50%] md:w-[35rem] md:h-[20rem] lg:w-[50rem] lg:h-[35rem]"
          >
            <CarouselSlider selectedImage={selectedImage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryPopup;
