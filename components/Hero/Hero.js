import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const StyledHero = styled.div`
  font-size: 20px;
  box-sizing: border-box;

  background: linear-gradient(to left, #ffffff 40%, #423cec 20%);

  color: ${(props) => props.theme.colors.text.light};
  min-height: calc(100vh - 80px);
  padding: 3rem;

  display: flex;
  justify-content: center;

  p {
    width: 400px;
    font-weight: 100;
  }

  @media screen and (max-width: 1080px) {
    background: #423cec;
  }

  @media screen and (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
  padding: 1.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-transform: uppercase;
  font-weight: 700;

  white-space: nowrap;

  @media screen and (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const TextContent = styled.div`
  margin-bottom: 4rem;

  h1 {
    max-width: 400px;

    @media screen and (max-width: 1012px) {
      width: 1000px;
    }
  }
`;

const FrontpageImage = styled(Image)`
  width: 400px;
  height: 100px;
`;

const Column1 = styled.div`
  padding-left: 4rem;

  width: 50%;
  height: 50%;
`;

const Column2 = styled.div`
  width: 50%;
  height: 50%;

  img {
    margin-top: 5rem;
    filter: grayscale(1);
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);

    @media screen and (max-width: 1012px) {
      display: none;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Column1>
        <TextContent>
          <Heading as="h1" size="4xl" mb="2rem" mt="4rem">
            Sjakk for bedrifter
          </Heading>
          <Text>Hjemmekontor?</Text>
          <Text>
            Hva med et avbrekk som trener hjernen og lar deg konkurrere mot
            kolleger samtidig som du lærer noe nyttig?
          </Text>
        </TextContent>
        <ButtonLink href="#pakker">Se våre pakker</ButtonLink>
      </Column1>
      <Column2>
        <Parallax y={[40, -40]}>
          <img width="600px" src="./chess.jpeg" />
        </Parallax>
      </Column2>
    </StyledHero>
  );
};

export default Hero;
