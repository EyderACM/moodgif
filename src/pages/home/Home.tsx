import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { Header, HomeWrapper } from "../components/atoms/home";
import GifInput from "../components/molecules/GifInput";
import NightmodeToggle from "pages/components/molecules/NightmodeToggle";

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
