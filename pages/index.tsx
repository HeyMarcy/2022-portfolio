import Head from "next/head";
import type { NextPage } from "next";
import { METADATA } from "../constants";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Layout from "@/components/shared/layout";
import Header from "@/components/shared/header";
import Projects from "@/components/homepage/projects";
import Hero from "@/components/homepage/hero";
import Footer from "@/components/shared/footer";

const DEBOUNCE_TIME = 100;

export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";
export interface IDesktop {
  isDesktop: boolean;
}
const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
  const [clientHeight, setClientHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isDesktop, setisDesktop] = useState(true);
  useEffect(() => {
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    window.history.scrollRestoration = "manual";

    setisDesktop(result);
    setClientHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
  }, [isDesktop, clientHeight]);
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <Header />
        <main className='flex-col flex  '>
          <Hero clientHeight={clientHeight} />
          <Projects isDesktop={isDesktop} />
          <Footer />
        </main>
      </Layout>
    </>
  );
};
export default Home;

// TODO. fix header height or padding.
// reconsider gradient
// fix logo
