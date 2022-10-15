import Head from "next/head";
import React from "react";
import { METADATA } from "../../constants";

// TODO: add more meta data
// Fix favicon

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  );
};

export default Layout;
