import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Packages from "../components/Packages/Packages";
import Instructors from "../components/Instructors/Instructors";
import Contact from "../components/Contact/Contact";
import client from "../client";
import Description from "../components/Description/Description";
import Head from "next/head";

function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log("data", data);

  const dummyNavbar = [
    { link: "/", title: "Hjem" },
    { link: "#pakker", title: "Våre pakker" },
    { link: "#instruktorer", title: "Instruktører" },
    { link: "#kontakt", title: "Kontakt" },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hjemmekontor? Hva med et avbrekk som trener hjernen og lar deg konkurrere mot kolleger samtidig som du lærer noe nyttig?"
        />
        <meta property="og:title" content="Bedriftssjakk" key="ogtitle" />
        <meta
          property="og:description"
          content="Hjemmekontor? Hva med et avbrekk som trener hjernen og lar deg konkurrere mot kolleger samtidig som du lærer noe nyttig?"
          key="ogdesc"
        />
        <title>Bedriftssjakk</title>
      </Head>
      <Navbar toggle={toggle} navbar={dummyNavbar} />
      <Hero />
      <Description about={data.about} />
      <Packages />
      <Instructors instructors={data.instructors} />
      <Contact />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await client.fetch('*[_type == "bedriftssjakk"][0]');

  return { props: { data: res } };
};

export default Home;
