import React from "react";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
const BlockContent = require("@sanity/block-content-to-react");
import { Member } from "./Member";
import { members } from "./data";

const builder = imageUrlBuilder(client);

const serializers = {
  types: {
    block: (props) => <div style={{ minHeight: "1rem" }}>{props.children}</div>,
  },
};

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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 2rem;
  border-radius: 5px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 350px;
  position: relative;
`;

const Title = styled.span`
  color: #615e5e;
  font-size: 18px;
  text-align: center;
`;

const Description = styled(BlockContent)`
  font-size: 16px;
  text-align: center;
  color: #3d3c3c;
  margin-top: 1rem;
`;

const TextContent = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const InstructorContent = styled.div`
  color: black;
  display: flex;
  max-width: 1300px;
  flex-basis: auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  margin: 0 auto;
  max-height: 380px;
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
            <Text color="gray.900" fontSize="xl" maxW="2xl" mx="auto">
              {instructors_description}
            </Text>
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
