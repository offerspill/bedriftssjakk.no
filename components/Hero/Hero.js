import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Heading, Text, useColorMode } from "@chakra-ui/react";

const StyledHero = styled.div`
  background: linear-gradient(to left, #ffffff 40%, #423cec 20%);

  color: ${(props) => props.theme.colors.text.light};
`;

const HeroContent = styled.div`
  font-size: 24px;
  box-sizing: border-box;
  min-height: calc(100vh - 80px);
  padding: 3rem;

  max-width: 2000px;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1220px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1080px) {
    background: #423cec;
  }

  @media screen and (max-width: 768px) {
    padding-left: 0rem;
    padding-right: 0rem;
    padding-top: 0;
  }
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  padding: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;

  white-space: nowrap;

  @media screen and (max-width: 1220px) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 20px;
  }
`;

const StyledText = styled(Text)`
  width: 75%;
`;

const TextContent = styled.div`
  margin-bottom: 4rem;
  position: relative;

  h1 {
    max-width: 400px;
  }
`;

const FrontpageImage = styled(Image)`
  width: 400px;
  height: 100px;
`;

const Column1 = styled.div`
  padding-left: 4rem;

  transform: scale(1.1);
  margin-top: 4rem;

  width: 50%;

  @media screen and (max-width: 1080px) {
    width: auto;
  }
`;

const Column2 = styled.div`
  width: 50%;
  height: 50%;

  img {
    margin-top: 6rem;
    width: 700px;
    filter: grayscale(1);
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);

    @media screen and (max-width: 1080px) {
      display: none;
    }
  }
`;

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <StyledHero>
      <HeroContent>
        <Column1>
          <TextContent>
            <Heading as="h1" size="4xl" mb="2rem" mt="4rem">
              Sjakk for bedrifter
            </Heading>
            <StyledText>Hjemmekontor?</StyledText>
            <StyledText>
              Hva med et avbrekk som trener hjernen og lar deg konkurrere mot
              kolleger samtidig som du lærer noe nyttig?
            </StyledText>
          </TextContent>
          <ButtonLink href="#pakker">Se våre pakker</ButtonLink>
        </Column1>
        <Column2>
          <img width="600px" src="./chess.jpeg" />
        </Column2>
      </HeroContent>
    </StyledHero>
  );
};

export default Hero;
