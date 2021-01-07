import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Packages from "../components/Packages/Packages";
import Instructors from "../components/Instructors/Instructors";
import Contact from "../components/Contact/Contact";

function Home({ stars }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
      <Packages />
      <Instructors />
      <Contact />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  console.log("json", json);
  return { props: { stars: json.stargazers_count } };
};

export default Home;
