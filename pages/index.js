/** @format */

import Head from "next/head";

import Intro from "../components/intro";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Awesome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro></Intro>
      </main>
    </div>
  );
}
