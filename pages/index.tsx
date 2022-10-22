import Head from "next/head";
import { METADATA } from "../constants";
import Layout from "@/components/shared/layout";
import Header from "@/components/shared/header";
import React, { useEffect, useState } from "react";
// import HeroSection from "@/components/homepage/hero";
import Footer from "@/components/shared/footer";
import Intro from "@/components/homepage/intro";

export default function Home() {
  const renderBackdrop = (): React.ReactNode => <div className=' -z-1'></div>;
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <Header />
        <main className='flex-col flex  '>
          {/* {renderBackdrop()} */}
          <Intro />

          <Footer />
        </main>
      </Layout>
    </>
  );
}
