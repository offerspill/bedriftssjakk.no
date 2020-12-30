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
  border-radius: 5px;

  margin: 2rem;

  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);
`;

const MainCard = styled(Card)`
  transform: scale(1.1);
  margin: 1rem;
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
          <MainCard></MainCard>
          <Card></Card>
        </CardWrapper>
      </PackagesContent>
    </StyledPackages>
  );
};

export default Packages;
