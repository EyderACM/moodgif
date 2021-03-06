import React, { useEffect, useState } from "react";
import { Flex, Stack, Img } from "@chakra-ui/react";
import { Header, HomeWrapper } from "../components/atoms/home";
import GifInput from "../components/molecules/GifInput";
import NightmodeToggle from "pages/components/molecules/NightmodeToggle";
import { motion } from "framer-motion";
import gifService from "services/gifService";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const [isImgLoading, setIsLoading] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>();

  const onSearch = async ({ searchValue }: any) => {
    setWasClicked(true);
    setIsLoading(true);
    const { data } = await gifService.getGifs({ query: searchValue });
    setIsLoading(false);

    const randomNumber = Math.floor(Math.random() * 50);
    setImgUrl(data[randomNumber].images.original.url);
  };

  return (
    <div>
      <NightmodeToggle />
      <HomeWrapper>
        <Flex direction="column" maxW="900px">
          <motion.div
            animate={wasClicked && { y: "-47vh" }}
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
                transition={{ duration: wasClicked ? 0.3 : 0.8 }}
              >
                <Header />
              </motion.div>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <GifInput
                  isLoading={isImgLoading}
                  handleSubmit={handleSubmit(onSearch)}
                  refRegister={register}
                />
              </motion.div>
            </Stack>
          </motion.div>
        </Flex>
        {imgUrl && (
          <Img
            borderRadius="15px"
            pos="fixed"
            objectFit="cover"
            height="300px"
            width="300px"
            src={imgUrl}
          />
        )}
      </HomeWrapper>
    </div>
  );
};

export default Home;
