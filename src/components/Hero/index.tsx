import { Stack, Text } from "@chakra-ui/react";

export const HeroText = () => {
  return (
    <Stack spacing="2" data-testid="HeroText">
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width={["100%", 500]}
        mt={["6", "0"]}
        align={["center", "left"]}
      >
        Hey, welcome.
        <Text as="p" lineHeight="1" my="6" fontSize={["4xl", "6xl"]}>
          Find your favorite
          <Text as="span" mx="2" color="blue.400">
            Ebooks
          </Text>
          <Text as="p">easily.</Text>
        </Text>
        <Text>
          Get acess for only
          <Text as="span" mx="2" color="blue.400">
            R$ 9.99 per month
          </Text>
        </Text>
      </Text>
    </Stack>
  );
};
