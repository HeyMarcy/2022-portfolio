import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Intro = () => {
  const introRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const renderQuote = (): React.ReactNode => (
    <div className='section-container h-screen'>
      <h1 className={`font-medium text-8xl  text-center `}>
        <span className='text-strong font-bold font-serif'>Hey there!</span>
      </h1>
      <h2
        ref={introRef}
        className={`font-medium text-2xl md:text-3xl text-center `}
      >
        I&apos;m a software engineer{" "}
        <span className='text-strong font-bold'>Chicago</span>.
      </h2>
    </div>
  );

  return (
    <section className='w-full relative select-none' ref={targetSection}>
      {renderQuote()}
    </section>
  );
};

export default Intro;
