import React from "react";
import styled from "styled-components";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const StyledContact = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: center;
  }
`;

const ContactContent = styled.div``;

const Contact = () => {
  return (
    <StyledContact id="contact">
      <ContactContent>
        <Heading as="h1" size="3xl" mb="2rem">
          Kontakt oss
        </Heading>
      </ContactContent>
    </StyledContact>
  );
};

export default Contact;
