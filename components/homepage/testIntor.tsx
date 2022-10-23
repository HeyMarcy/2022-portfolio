import { gsap, Linear } from "gsap";
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
type clientHeightProps = {
  clientHeight: number;
};
const HeroSection = ({ clientHeight }: clientHeightProps) => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const heyText = quoteRef.current.querySelector(".hey");
    const aboutText = quoteRef.current.querySelector(".about");
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    const timeline2 = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        heyText,
        {
          // "--font-variation-weight": 500,
          scale: 1,
          delay: 0.5,
        },
        {
          scale: 0.8,
          ease: "linear",
        }
      )
      .to(heyText, {
        scale: 1,
        // "--font-variation-weight": 800,
        ease: "elastic.out(1, 0.2)",
        duration: 1.2,
      });
    timeline2
      .from(aboutText, {
        opacity: 0,
        delay: 0.5,
      })
      .to(aboutText, {
        opacity: 1,
        ease: "elastic.out(1, 0.2)",
      });
    // timeline.from(quoteRef.current.querySelector(".hey"), {
    //   y: -50,
    //   opacity: 0,
    //   fontWeight: 800,
    //   duration: 2,
    // });

    ScrollTrigger.create({
      trigger: targetSection.current,

      markers: true,
    });
  }, [quoteRef, targetSection]);
  return (
    <section className='w-3/6 m-auto relative h-screen select-none text-white'>
      <div
        ref={targetSection}
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container h-full text-center`}
      >
        <span ref={quoteRef} className='flex flex-col h-full justify-center'>
          <h1 className='hey  text-[6rem] leading-none'>Hey there!</h1>
          <p className='about text-[2rem] my-12'>
            I&apos;m a software engineer in Chicago{" "}
          </p>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
