import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import WhatWeOffer from "./WhatWeOffer";
import ProjectsSlider from "./ProjectsSlider";
import GetInTouch from "./GetInTouch";

const LandingPage = () => {
  return (
    <section className="px-[1.2rem] md:px-[5rem] lg:px-[7rem]">
      <HeroSection />
      <AboutUs />
      <WhatWeOffer />
      <ProjectsSlider />
      <GetInTouch />
    </section>
  );
};

export default LandingPage;
