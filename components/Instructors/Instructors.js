import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyledInstructors = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  h1 {
    display: block;
    text-align: center;

    @media screen and (max-width: 1200px) {
      margin-top: 2rem;
    }
  }
`;

const Name = styled.span`
  color: black;

  font-size: 20px;
  margin-top: 0.5rem;
  text-align: center;
`;

const Instructor = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  padding: 2rem;
  border-radius: 5px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  max-width: 350px;
`;

const Image = styled.img`
  clip-path: circle();
  margin: 0 auto;
`;

const Title = styled.span`
  color: #615e5e;
  font-size: 18px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  color: #3d3c3c;
  margin-top: 1rem;
`;

const InstructorContent = styled.div`
  display: flex;
  flex-basis: auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const Instructors = () => {
  return (
    <StyledInstructors id="instruktorer">
      <Heading as="h1" size="3xl" mb="2rem">
        Instruktører
      </Heading>
      <InstructorContent>
        <Instructor>
          <div>
            <Image src="./testimg.jpg" />
          </div>
          <Name>Navn navn navn</Name>
          <Title>Candidate master</Title>
          <Description>Blablabla er en internasjonal maeste rsom</Description>
        </Instructor>
        <Instructor>
          <div>
            <Image src="./testimg.jpg" />
          </div>
          <Name>Navn navn navn</Name>
          <Title>Stormester</Title>
          <Description>Blablabla er en internasjonal maeste rsom</Description>
        </Instructor>
        <Instructor>
          <div>
            <Image src="./testimg.jpg" />
          </div>
          <Name>Navn navn navn</Name>
          <Title>Internasjonal mester</Title>
          <Description>
            Blablabla bøabøabøa babøabøabøabø fiorjoer jgore gjreo greijer
          </Description>
        </Instructor>
      </InstructorContent>
    </StyledInstructors>
  );
};

export default Instructors;
