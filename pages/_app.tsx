import type { AppProps } from "next/app";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
