import React from "react";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Member } from "./Member";

const builder = imageUrlBuilder(client);

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

const Instructors = ({ instructors, instructors_description }) => {
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <StyledInstructors id="instruktorer">
      <Box as="section">
        <Box
          mx="auto"
          maxW={{ base: "xl", md: "7xl" }}
          px={{ base: "6", md: "8" }}
          py={{ base: "12", md: "20" }}
        >
          <Box textAlign="center">
            <Heading
              size="3xl"
              letterSpacing="tight"
              mb="5"
              fontWeight="extrabold"
            >
              Instruktører
            </Heading>
            {instructors_description && (
              <Text color="gray.900" fontSize="xl" maxW="2xl" mx="auto">
                {instructors_description}
              </Text>
            )}
          </Box>
          <SimpleGrid
            mt="20"
            columns={{ base: 1, md: 2, lg: 3 }}
            spacingX="6"
            spacingY="16"
          >
            {instructors.map((member, idx) => (
              <Member
                key={idx}
                role={member.role}
                image={urlFor(member.image).url()}
                name={member.name}
                twitter="#"
                linkedIn="#"
              >
                {member.description}
              </Member>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </StyledInstructors>
  );
};

export default Instructors;
