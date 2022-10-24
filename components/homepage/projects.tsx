import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import { MENULINKS, PROJECTS } from "../../constants";
// import ProjectTile from "../common/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop, NO_MOTION_PREFERENCE_QUERY } from "pages";

const PROJECT_STYLES = {
  SECTION:
    "w-screen px-12  bg-gray-200 relative select-none section-container flex-col flex py-8 justify-center",
  // PROJECTS_WRAPPER: "project-wrapper w-fit md:gap-10 gap-6 bg-gray-200",
  PROJECTS_WRAPPER:
    "tall:mt-12 mt-12 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

type ProjectProps = {
  isDesktop: boolean;
  screenWidth: number;
};
const ProjectTile = (project: any) => (
  <div style={{ height: 600, width: "80vw", backgroundColor: "white" }}>
    {project.name}
  </div>
);
const ProjectsSection = ({ isDesktop }: IDesktop) => {
  const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const sectionTitleElementRef: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);
  const [horizontalAnimationEnabled, sethorizontalAnimationEnabled] =
    useState(false);

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
      scrub: 1.2,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (
    targetSectionRef: MutableRefObject<HTMLDivElement>,
    sectionTitleElementRef: MutableRefObject<HTMLDivElement>
  ): [GSAPTimeline, ScrollTrigger] => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    // const sidePadding =
    //   document.body.clientWidth -
    //   targetSectionRef.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      // sidePadding +
      targetSectionRef.current.querySelector(".project-wrapper").clientWidth;
    targetSectionRef.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;

    console.log("elementWidth", elementWidth);
    console.log(
      "targetSectionWidth",
      targetSectionRef.current.querySelector(".inner-container").clientWidth
    );

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
      markers: true,
      onToggle: (self) => setwillChange(self.isActive),
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    let projectsScrollTrigger: ScrollTrigger | undefined;
    let projectsTimeline: GSAPTimeline | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

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

  const renderSectionTitle = (): React.ReactNode => (
    <div
      className={`flex flex-col inner-container  ${
        willChange ? "will-change-transform" : ""
      }`}
      ref={sectionTitleElementRef}
    >
      <h3 className='section-heading seq mt-2'>My Work</h3>
      <p className='text-2xl md:max-w-3xl w-full seq max-w-sm mt-2 text-white'>
        I have nearly 10 years of experience designing and developing
        accessible, scalable and performant web applications.
      </p>
    </div>
  );

  const renderProjectTiles = (): React.ReactNode =>
    PROJECTS.map((project) => (
      <ProjectTile
        project={project}
        key={project.name}
        animationEnabled={horizontalAnimationEnabled}
      ></ProjectTile>
    ));

  const { ref: projectsSectionRef } = MENULINKS[1];

  return (
    <section
      ref={targetSectionRef}
      className={`${isDesktop && "min-h-screen"} ${PROJECT_STYLES.SECTION}`}
      id={projectsSectionRef}
    >
      {renderSectionTitle()}
      <div className={PROJECT_STYLES.PROJECTS_WRAPPER}>
        {renderProjectTiles()}
      </div>
    </section>
  );
};

export default ProjectsSection;
