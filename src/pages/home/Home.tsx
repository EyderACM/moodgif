import React from "react";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import NightmodeToggle from "src/components/NighmodeToggle";

const Home = () => {
  return (
    <div>
      <NightmodeToggle />
      <Box
        display="flex"
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" width="80%" maxW="700px">
          <Stack align="center" spacing={2} padding="10vw">
            <Flex
              direction="column"
              width="100%"
              align="start"
              textAlign="left"
            >
              <Text fontSize="4xl" color="blue.400" fontWeight="bold">
                Welcome to Moodgif
              </Text>
              <Text marginLeft="3px" fontSize="sm" color="gray.500">
                Define your mood, we find the Gif.
              </Text>
            </Flex>
            <Flex
              dir="row"
              alignItems="center"
              justifyContent="center"
              paddingTop="20px"
              w="100%"
            >
              <Input variant="filled" size="md" />
              <Button
                marginX={4}
                colorScheme="blue"
                isLoading={false}
                type="submit"
              >
                Search
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
