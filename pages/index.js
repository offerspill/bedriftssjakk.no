import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Packages from "../components/Packages/Packages";
import Instructors from "../components/Instructors/Instructors";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const dummyNavbar = [
    { link: "/", title: "Hjem" },
    { link: "#pakker", title: "Våre pakker" },
    { link: "#instruktorer", title: "Instruktører" },
    { link: "https://vg.no", title: "Kontakt" },
  ];

  return (
    <>
      <Navbar toggle={toggle} navbar={dummyNavbar} />
      <Hero />
      <Packages />
      <Instructors />
    </>
  );
}
