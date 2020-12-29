import React from "react";
import styled from "styled-components";
import { Box, Heading } from "@chakra-ui/react";

const StyledPackages = styled.div`
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

const PackagesContent = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  height: 300px;
  width: 200px;
  background: #fff;
  border-radius: 5px;

  margin: 2rem;
`;

const MainCard = styled.div`
  height: 340px;
  width: 220px;
  background: #fff;
  border-radius: 5px;
`;

const Packages = () => {
  return (
    <StyledPackages>
      <PackagesContent>
        <Heading as="h1" size="3xl" mb="2rem">
          Våre pakker
        </Heading>
        <CardWrapper>
          <Card></Card>
          <MainCard></MainCard>
          <Card></Card>
        </CardWrapper>
      </PackagesContent>
    </StyledPackages>
  );
};

export default Packages;
