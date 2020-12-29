import React from "react";
import { Heading } from "@chakra-ui/react";
import styled from "styled-components";

const StyledInstructors = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    display: block;
    text-align: center;
  }
`;

const InstructorContent = styled.div``;

const Instructors = () => {
  return (
    <StyledInstructors id="instruktører">
      <InstructorContent>
        <Heading as="h1" size="3xl" mb="2rem">
          Instruktører
        </Heading>
      </InstructorContent>
    </StyledInstructors>
  );
};

export default Instructors;
