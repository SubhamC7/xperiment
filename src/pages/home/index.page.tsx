import React from "react";

import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../../../content/home.md";

import AppStore from "AppStore";
type Props = {};

const Home = (props: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  let { title, cats } = attributes;
  console.log("cats", cats);

  return (
    <>
      <Head>
        <title>Xperiment</title>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </Head>
      <header
        className={`fixed top-0 right-0 h-20 w-full bg-rose-700 text-white flex items-center justify-between ${paddingClass}`}
      >
        <p className="text-white text-2xl font-semibold">Xperiment</p>
        <div className="flex items-center justify-center space-x-7">
          <p className="text-white font-semibold">Home</p>
          <p className="text-white font-semibold">About</p>
        </div>
      </header>
      <article className={`pt-24 ${paddingClass}`}>
        <h1 className="text-4xl font-semibold text-rose-600">{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat: any, k: any) => (
            <div
              key={k}
              className="py-3 flex items-start justify-start space-x-4"
            >
              <div className="rounded-full h-4 w-4 bg-cyan-600 mt-2"></div>
              <div>
                <h2 className="text-lg font-medium">{cat.name}</h2>
                <p className="">-{cat.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Home;
