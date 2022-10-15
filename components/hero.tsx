import { EMAIL, MENULINKS } from "../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
// import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";

const HERO_STYLES = {
  SECTION:
    "w-full flex  bg-gradient-to-t from-amber-300 via-blue-300 to-sky-500 section-container min-h-screen relative align items-end",
  // "w-full flex  bg-gradient-to-b from-sky-500 via-sky-300 to-rose-200 section-container min-h-screen relative align items-end",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER: "absolute  w-full ",
  // "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  // const initTypeAnimation = (
  //   typedSpanElement: MutableRefObject<HTMLSpanElement>
  // ): Typed => {
  //   return new Typed(typedSpanElement.current, {
  //     strings: TYPED_STRINGS,
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     backDelay: 8000,
  //     loop: true,
  //   });
  // };

  // const initRevealAnimation = (
  //   targetSection: MutableRefObject<HTMLDivElement>
  // ): GSAPTimeline => {
  //   const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
  //   revealTl
  //     .to(targetSection.current, { opacity: 1, duration: 2 })
  //     .from(
  //       targetSection.current.querySelectorAll(".seq"),
  //       { opacity: 0, duration: 0.5, stagger: 0.5 },
  //       "<"
  //     );

  //   return revealTl;
  // };

  // useEffect(() => {
  //   const typed = initTypeAnimation(typedSpanElement);
  //   initRevealAnimation(targetSection);

  //   return typed.destroy;
  // }, [typedSpanElement, targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div
      className={`${HERO_STYLES.BG_WRAPPER}`}
      // style={{ maxHeight: "650px" }}
    >
      <HeroImage />
      <div className='bg-gradient-to-b from-cyan-600 via-sky-700 to-sky-900 h-24'></div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      // style={{ opacity: 0 }}
    >
      {/* {renderHeroContent()} */}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "Hero";

export default HeroSection;
