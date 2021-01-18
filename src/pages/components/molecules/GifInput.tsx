import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

interface IGifInput {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  refRegister: any;
}

const GifInput: React.FC<IGifInput> = ({
  handleSubmit,
  isLoading,
  refRegister,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Flex
        dir="row"
        alignItems="center"
        justifyContent="center"
        paddingTop="20px"
        w="100%"
      >
        <Input
          ref={refRegister}
          name="searchValue"
          variant="filled"
          size="md"
        />
        <Button
          marginLeft={4}
          colorScheme="blue"
          isLoading={isLoading}
          type="submit"
        >
          Search
        </Button>
      </Flex>
    </form>
  );
};

export default GifInput;
