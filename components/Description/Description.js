import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
const BlockContent = require("@sanity/block-content-to-react");

const StyledDescription = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  font-size: 30px;
`;

const Content = styled(BlockContent)`
  padding: 10rem;

  max-width: 2000px;

  @media screen and (max-width: 1170px) {
    font-size: 28px;
    padding: 8rem;
  }

  @media screen and (max-width: 780px) {
    font-size: 24px;
    padding: 6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    padding: 2rem;
    padding-top: 6rem;
  }

  a {
    color: #b0b0b0;

    &:hover {
      color: #fff;
    }
  }

  h1 {
    font-size: 50px;
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (max-width: 1170px) {
      font-size: 35px;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
      text-align: left;
    }
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const settTag = (node) => {
  const style = node.style;

  if (RegExp("/?h[1-6]").test(style)) {
    return style;
  }

  return "div";
};

const serializers = {
  types: {
    block: (props) => {
      const Tag = settTag(props.node);

      return (
        <Fade bottom>
          <Tag>{props.children}</Tag>
        </Fade>
      );
    },
  },
};

const Description = ({ about }) => {
  console.log("About", about);
  return (
    <StyledDescription>
      <Content blocks={about} serializers={serializers} />
    </StyledDescription>
  );
};

export default Description;
