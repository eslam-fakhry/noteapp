import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Panes from "../components/Panes";

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Panes />
      </main>
    </>
  );
}
