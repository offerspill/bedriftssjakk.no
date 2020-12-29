import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Image from "next/image";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const FrontpageContainer = styled.div`
  box-sizing: border-box;
  background: #2632a3;
  height: 100vh;
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrontpageImage = styled(Image)`
  width: 400px;
  height: 100px;
`;

const Column1 = styled.div`
  width: 50%;
  height: 50%;
`;

const Column2 = styled.div`
  width: 50%;
  height: 50%;
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const dummyNavbar = [
    { link: "https://vg.no", title: "Hjem" },
    { link: "https://vg.no", title: "Våre pakker" },
    { link: "https://vg.no", title: "Instruktører" },
    { link: "https://vg.no", title: "Kontakt" },
  ];

  return (
    <>
      <Navbar toggle={toggle} navbar={dummyNavbar} />
      <FrontpageContainer>
        <Column1>
          <h1>Sjakk for bedrifter</h1>
          <p>Hjemmekontor?</p>
        </Column1>
        <Column2>
          <img width="500px" src="./chess.jpeg" />
        </Column2>
      </FrontpageContainer>
    </>
  );
}
