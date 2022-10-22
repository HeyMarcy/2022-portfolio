import { MENULINKS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import ChiSkyline from "./chiSkyline";

const HERO_STYLES = {
  SECTION:
    "w-full flex   section-container min-h-screen relative align items-end",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER: "absolute  w-full ",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={`${HERO_STYLES.BG_WRAPPER}`}>
      <ChiSkyline styleName='w-full' fillColor='#1c4478' />
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
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "Hero";

export default HeroSection;
