import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const GifInput = () => {
  return (
    <Flex
      dir="row"
      alignItems="center"
      justifyContent="center"
      paddingTop="20px"
      w="100%"
    >
      <Input variant="filled" size="md" />
      <Button marginX={4} colorScheme="blue" isLoading={false} type="submit">
        Search
      </Button>
    </Flex>
  );
};

export default GifInput;
