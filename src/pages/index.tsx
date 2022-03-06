import { Box, Flex, Image, Text, Button, Stack } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { HeroText } from "@components/Hero";
export default function Home() {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        maxWidth={1200}
        mx="auto"
        px="6"
        justify="space-between"
        align="center"
      >
        <HeroText />
        <Image
          data-testid="HeroImage"
          mt="-4"
          boxSize="520px"
          src="/Ebook.svg"
          alt="Ebook"
        />
      </Flex>
    </Box>
  );
}
