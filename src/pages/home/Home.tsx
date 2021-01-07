import React, { useEffect, useState } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { Header, HomeWrapper } from "../components/atoms/home";
import GifInput from "../components/molecules/GifInput";
import NightmodeToggle from "pages/components/molecules/NightmodeToggle";
import { motion } from "framer-motion";

const Home = () => {
  const [wasClicked, setWasClicked] = useState<Boolean>(false);

  const onSearch = (e: React.MouseEvent<HTMLElement>) => {
    setWasClicked(true);
  };

  return (
    <div>
      <NightmodeToggle />
      <HomeWrapper>
        <Flex direction="column" width={{ xl: "80%" }} maxW="700px">
          <motion.div
            animate={wasClicked && { y: "-45vh" }}
            transition={{ duration: 0.5 }}
          >
            <Stack
              align="center"
              spacing={2}
              padding={{ md: "10vw", xl: "20px" }}
            >
              <motion.div
                variants={{
                  active: {
                    opacity: 1,
                    y: 0,
                  },
                  hidden: {
                    opacity: 0,
                    y: 0,
                  },
                }}
                animate={wasClicked ? "hidden" : "active"}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <Header />
              </motion.div>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <GifInput onClick={onSearch} />
              </motion.div>
            </Stack>
          </motion.div>
        </Flex>
      </HomeWrapper>
    </div>
  );
};

export default Home;
