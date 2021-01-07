import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const NightmodeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box position="absolute" top="10px" left="10px">
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        <MoonIcon />
      </Button>
    </Box>
  );
};

export default NightmodeToggle;
