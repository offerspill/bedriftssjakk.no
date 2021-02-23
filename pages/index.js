import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Packages from "../components/Packages/Packages";
import Instructors from "../components/Instructors/Instructors";
import Contact from "../components/Contact/Contact";
import client from "../client";
import Description from "../components/Description/Description";

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
