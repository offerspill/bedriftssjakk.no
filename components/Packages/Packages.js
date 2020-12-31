import React from "react";
import styled from "styled-components";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

const StyledPackages = styled.div`
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

const PackagesContent = styled.div`
  margin-top: 2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  height: 350px;
  width: 250px;
  background: #fff;
  border-radius: 10px;

  margin-right: -2.2rem;

  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);
`;

const MainCard = styled.div`
  height: 600px;
  width: 440px;
  background: #fff;
  border-radius: 10px;

  background: white;

  margin: 2rem;

  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);
`;

const CardHeader = styled.div`
  height: 80px;
  background-color: #f3f7f9;
  display: flex;

  color: #5e5aa5;

  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  p {
    font-weight: bold;
  }
`;

const Prize = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const Packages = () => {
  return (
    <StyledPackages id="pakker">
      <PackagesContent>
        <Heading as="h1" size="3xl" mb="2rem">
          Våre pakker
        </Heading>
        <CardWrapper>
          <Card>
            <Heading as="h3" size="xl"></Heading>
          </Card>
          <MainCard>
            <CardHeader>
              <Text fontSize="2xl" fontWeight="bold">
                Full pakke
              </Text>
            </CardHeader>
            <Prize>
              <Text mr="0.5rem" fontSize="24px" fontWeight="bold">
                kr
              </Text>
              <Text fontSize="5xl" fontWeight="bold">
                2500,-
              </Text>
              <Text fontSize="20px" ml="1rem" fontWeight="bold">
                NOK
              </Text>
            </Prize>
          </MainCard>
        </CardWrapper>
      </PackagesContent>
    </StyledPackages>
  );
};

export default Packages;
