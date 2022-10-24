import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import ProjectTile from "../shared/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop, NO_MOTION_PREFERENCE_QUERY } from "pages";

const PROJECT_STYLES = {
  SECTION: "",
  PROJECTS_WRAPPER:
    "w-full h-screen flex items-center bg-gray-200 overflow-hidden",
  PROJECTS_CONTAINER: "flex flex-nowrap min-w-screen gap-[50px] px-[50px] py-4",
  CARD: "card shadow-md flex justify-center items-center basis-full bg-white rounded-lg bg-white p-8 w-[600px] h-[400px]",
  // CARD: "card shadow-md flex justify-center items-center bg-white rounded-lg p-8 w-screen h-[400px] sm:w-[600px] ",
  // CARD: "card shadow-md flex justify-center items-center basis-full bg-white rounded-lg bg-white p-8 w-[400px] h-[400px]",
  // "tall:mt-12 mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};
type ProjectProps = {
  isDesktop: boolean;
  clientWidth: number;
};
const ProjectsSection = ({ isDesktop, clientWidth }: ProjectProps) => {
  const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const sectionTitleElementRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const { ref: projectsSectionRef } = MENULINKS[1];

  const [horizontalAnimationEnabled, sethorizontalAnimationEnabled] =
    useState(false);

  useEffect(() => {
    let projectsScrollTrigger: ScrollTrigger | undefined;
    let projectsTimeline: GSAPTimeline | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    const initRevealAnimation = (
      targetSectionRef: MutableRefObject<HTMLDivElement>
    ): [GSAPTimeline, ScrollTrigger] => {
      const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
      revealTl.from(
        targetSectionRef.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: targetSectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0,
        animation: revealTl,
      });

      return [revealTl, scrollTrigger];
    };

    const initProjectsAnimation = (
      targetSectionRef: MutableRefObject<HTMLDivElement>,
      sectionTitleElementRef: MutableRefObject<HTMLDivElement>
    ): [GSAPTimeline, ScrollTrigger] => {
      const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
      const sidePadding = 0;
      const elementWidth =
        sidePadding +
        targetSectionRef.current.querySelector(".project-wrapper").clientWidth;
      targetSectionRef.current.style.width = `${elementWidth}px`;
      const width = window.innerWidth - elementWidth;
      const duration = `${(elementWidth / window.innerHeight) * 100}%`;
      timeline
        .to(targetSectionRef.current, { x: width })
        .to(sectionTitleElementRef.current, { x: -width }, "<");

      const scrollTrigger = ScrollTrigger.create({
        trigger: targetSectionRef.current,
        start: "top top",
        end: duration,
        scrub: 0,
        pin: true,
        animation: timeline,
        pinSpacing: "margin",
        onToggle: (self) => setwillChange(self.isActive),
      });

      return [timeline, scrollTrigger];
    };

    sethorizontalAnimationEnabled(isDesktop && matches);

    if (isDesktop && matches) {
      [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
        targetSectionRef,
        sectionTitleElementRef
      );
    } else {
      const projectWrapper = targetSectionRef.current.querySelector(
        ".project-wrapper"
      ) as HTMLDivElement;
      const parentPadding = window
        .getComputedStyle(targetSectionRef.current)
        .getPropertyValue("padding-left");

      targetSectionRef.current.style.setProperty("width", "100%");
      projectWrapper.classList.add("overflow-x-auto");
      projectWrapper.style.setProperty("width", `calc(100vw)`);
      projectWrapper.style.setProperty("padding", `0 ${parentPadding}`);
      projectWrapper.style.setProperty(
        "transform",
        `translateX(-${parentPadding})`
      );
    }

    const [revealTimeline, revealScrollTrigger] =
      initRevealAnimation(targetSectionRef);

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [targetSectionRef, sectionTitleElementRef, isDesktop]);
  return (
    <section
      ref={targetSectionRef}
      className={`${isDesktop && "min-h-screen"} ${PROJECT_STYLES.SECTION}`}
      id={projectsSectionRef}
    >
      <div
        className={`project-wrapper ${PROJECT_STYLES.PROJECTS_WRAPPER}`}
        id='cardsWrapper'
      >
        <div className={PROJECT_STYLES.PROJECTS_CONTAINER} id='cardsContainer'>
          <div className={PROJECT_STYLES.CARD}>
            <h1 className='text-4xl font-semibold'>One</h1>
          </div>
          <div className={PROJECT_STYLES.CARD}>
            <h1 className='text-4xl font-semibold'>Two</h1>
          </div>
          <div className={PROJECT_STYLES.CARD}>
            <h1 className='text-4xl font-semibold'>Three</h1>
          </div>
          <div className={PROJECT_STYLES.CARD}>
            <h1 className='text-4xl font-semibold'>Four</h1>
          </div>
          <div className={PROJECT_STYLES.CARD}>
            <h1 className='text-4xl font-semibold'>Five</h1>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ProjectsSection;
