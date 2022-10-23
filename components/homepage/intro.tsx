import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Intro = () => {
  // gsap.to("titleRef", { x: 400, duration: 2 });
  type HeaderProps = {
    lineContent: string;
    lineContent2: string;
  };

  const Title = ({ lineContent, lineContent2 }: HeaderProps) => {
    let line1: MutableRefObject<HTMLDivElement> = useRef(null);
    let line2: MutableRefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
      gsap.to([line1, line2], 2, {
        delay: 2,
        ease: "power3.out",
        y: 64,
        stagger: {
          amount: 0.15,
        },
      });
    }, [line1, line2]);
    return (
      <h1 className='page-title'>
        <div className='line-wrap'>
          <div
            ref={(el) => (line1.current = el)}
            className='line h1 font-serif text-white '
          >
            {lineContent}
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={(el) => (line2.current = el)} className='line'>
            {lineContent2}
          </div>
        </div>
      </h1>
    );
  };

  return (
    <section className='w-full my-36'>
      <Title
        lineContent='Hey There!'
        lineContent2="I'm a software what's going on in Chicago."
      />
    </section>
  );
};

export default Intro;
