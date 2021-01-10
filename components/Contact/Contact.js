import React from "react";
import styled from "styled-components";
import { Box, Heading, Text, Flex, Input, Textarea } from "@chakra-ui/react";

const StyledContact = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    display: block;
    text-align: center;
  }
`;

const ContactContent = styled.div`
  background-color: white;
  padding: 10rem;
  border-radius: 5px;
`;

const Form = styled.div``;

const StyledInput = styled(Input)`
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const Contact = () => {
  return (
    <StyledContact id="kontakt">
      <ContactContent>
        <Heading as="h1" size="3xl" mb="2rem">
          Kontakt oss
        </Heading>
        <Form>
          <StyledInput variant="filled" placeholder="Navn" />
          <StyledInput variant="filled" placeholder="E-post" />
          <Textarea
            variant="filled"
            placeholder="Skriv hvilken pakke du vil ha, og eventuelt andre ønsker"
          />
        </Form>
      </ContactContent>
    </StyledContact>
  );
};

export default Contact;
