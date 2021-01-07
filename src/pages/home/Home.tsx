import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import NightmodeToggle from "src/pages/components/NighmodeToggle";
import { Header, HomeWrapper } from "./components/atoms";
import GifInput from "./components/molecules/GifInput";

const Home = () => {
  return (
    <div>
      <NightmodeToggle />
      <HomeWrapper>
        <Flex direction="column" width={{ xl: "80%" }} maxW="700px">
          <Stack
            align="center"
            spacing={2}
            padding={{ md: "10vw", xl: "20px" }}
          >
            <Header />
            <GifInput />
          </Stack>
        </Flex>
      </HomeWrapper>
    </div>
  );
};

export default Home;
