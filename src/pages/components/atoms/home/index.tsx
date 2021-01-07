import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const HomeWrapper: React.FC = ({ children }) => (
  <Box
    display="flex"
    height="100vh"
    width="100vw"
    paddingX="10px"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);

export const Header: React.FC = () => (
  <Flex direction="column" width="100%" align="start" textAlign="left">
    <Text fontSize="4xl" color="blue.400" fontWeight="bold">
      Welcome to Moodgif
    </Text>
    <Text marginLeft="3px" fontSize="sm" color="gray.500">
      Define your mood, we find the Gif.
    </Text>
  </Flex>
);
