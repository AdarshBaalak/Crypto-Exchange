import { Avatar, Box, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";


const avatarSrc = "https://avatars.githubusercontent.com/AdarshBaalak";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India to provide deep information about cryptocurrencies.
          </Text>

        <Text fontWeight={"bold"}>Follow Us</Text>
          <HStack w={"full"} alignItems={["center", "flex-start"]}>
          <a href="https://youtube.com" target={"blank"}>
            Youtube
          </a>
          <a href="https://www.instagram.com/aadarsh_baalak_/" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/AdarshBaalak" target={"blank"}>
            Github
          </a>
          </HStack>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "2"]} src={avatarSrc} />
          <Text fontWeight={"bold"}>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;