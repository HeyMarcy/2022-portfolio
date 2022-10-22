import Head from "next/head";
import { METADATA } from "../constants";
import Layout from "@/components/shared/layout";
import Header from "@/components/shared/header";
import React, { useEffect, useState } from "react";
// import HeroSection from "@/components/homepage/hero";
import Footer from "@/components/shared/footer";
import Intro from "@/components/homepage/intro";
import ProjectsSection from "@/components/homepage/projects";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DEBOUNCE_TIME = 100;

export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";
export interface IDesktop {
  isDesktop: boolean;
}
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <Header />
        <main className='flex-col flex  '>
          <Intro />
          <ProjectsSection isDesktop={false} />
          <Footer />
        </main>
      </Layout>
    </>
  );
}
