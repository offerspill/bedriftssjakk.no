import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const dummyNavbar = [{ link: "https://vg.no", title: "VG" }];

  return (
    <>
      <Navbar toggle={toggle} navbar={dummyNavbar} />
    </>
  );
}
