import React from "react";
import styled from "styled-components";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import { ButtonLink } from "../Hero/Hero";

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
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Card = styled.div`
  height: 300px;
  max-width: 275px;
  background: #fff;
  border-radius: 10px;

  margin-right: -3rem;

  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);

  @media screen and (max-width: 768px) {
    margin-right: 0.5rem;
    width: 300px;
  }
`;

const MainCard = styled.div`
  height: 600px;
  max-width: 440px;
  background: #fff;
  border-radius: 10px;

  background: white;

  margin: 2rem;

  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.42);

  @media screen and (max-width: 468px) {
    margin: 0;
  }
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

const Price = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const StyledListItem = styled(ListItem)`
  font-size: 18px;
`;

const Button = styled.a`
  background: #8d89f3;
  padding: 1rem;

  max-width: 300px;
  border-radius: 5px;

  &:hover {
    background: #5330cf;
  }
`;

const ButtonGrey = styled.a`
  background: #8d89f3;
  padding: 1rem;

  border-radius: 5px;

  &:hover {
    background: #5330cf;
  }
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
            <CardHeader>
              <Text fontSize="xl" fontWeight="bold">
                TILPASSET
              </Text>
            </CardHeader>
            <Price>
              <Text mr="0.5rem" fontSize="24px" fontWeight="bold">
                kr
              </Text>
              <Text fontSize="4xl" fontWeight="bold">
                ?
              </Text>
              <Text fontSize="20px" ml="1rem" fontWeight="bold">
                NOK
              </Text>
            </Price>
            <Flex justifyContent="center" padding="1rem">
              <ButtonGrey href="#kontakt">
                <Text color="white" fontSize="16px" fontWeight="bold">
                  Kontakt oss for bestilling
                </Text>
              </ButtonGrey>
            </Flex>
          </Card>
          <MainCard>
            <CardHeader>
              <Text fontSize="2xl" fontWeight="bold">
                Full pakke
              </Text>
            </CardHeader>
            <Price>
              <Text mr="0.5rem" fontSize="24px" fontWeight="bold">
                kr
              </Text>
              <Text fontSize="5xl" fontWeight="bold">
                2000,-
              </Text>
              <Text fontSize="20px" ml="1rem" fontWeight="bold">
                NOK
              </Text>
            </Price>
            <List
              spacing={5}
              padding="2rem"
              paddingLeft="3rem"
              paddingRight="3rem"
            >
              <StyledListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />1 time
                undervisning tilpasset nivå, deretter
              </StyledListItem>
              <StyledListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />1 time
                tilpasset lynsjakkturnering på nett
              </StyledListItem>
              <StyledListItem>
                <ListIcon as={GoPerson} color="black" />
                Opptil 15 personer
              </StyledListItem>
            </List>
            <Flex justifyContent="center" mt="2rem">
              <Button href="#kontakt">
                <Text color="white" fontSize="20px" fontWeight="bold">
                  Kontakt oss for bestilling
                </Text>
              </Button>
            </Flex>
          </MainCard>
        </CardWrapper>
      </PackagesContent>
    </StyledPackages>
  );
};

export default Packages;
