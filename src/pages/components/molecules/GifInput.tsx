import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

interface IGifInput {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const GifInput: React.FC<IGifInput> = ({ onClick }) => {
  return (
    <Flex
      dir="row"
      alignItems="center"
      justifyContent="center"
      paddingTop="20px"
      w="100%"
    >
      <Input variant="filled" size="md" />
      <Button
        onClick={onClick}
        marginLeft={4}
        colorScheme="blue"
        isLoading={false}
        type="submit"
      >
        Search
      </Button>
    </Flex>
  );
};

export default GifInput;
