import {
  Box,
  Flex,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Member = (props) => {
  const { image, name, role, twitter, linkedIn, children } = props;
  return (
    <Flex direction="column" align="center" textAlign="center">
      <Img
        alt={name}
        w="40"
        h="40"
        rounded="full"
        objectFit="cover"
        src={image}
      />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text
          fontWeight="semibold"
          color={useColorModeValue("gray.500", "whiteAlpha.700")}
        >
          {role}
        </Text>
      </Box>
      <Text
        mt="2"
        color={useColorModeValue("gray.600", "whiteAlpha.900")}
        maxW={{ base: "unset", md: "20rem" }}
      >
        {children}
      </Text>
    </Flex>
  );
};
