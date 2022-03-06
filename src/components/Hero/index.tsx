import { Stack, Text, Button } from "@chakra-ui/react";
import intl from "react-intl-universal";

export const HeroText = () => {
  return (
    <Stack spacing="2" data-testid="HeroText">
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width={500}
      >
        {intl.get("welcome")}
        <Text as="p" lineHeight="1" my="6" fontSize={["4xl", "6xl"]}>
          {intl.get("findYourFavorite")}
          <Text as="span" mx="2" color="blue.400">
            {intl.get("ebooks")}
          </Text>
          <Text as="p">{intl.get("easily")}.</Text>
        </Text>
        <Text>
          {intl.get("getAccessForOnly")}
          <Text as="span" mx="2" color="blue.400">
            R$ 9.99 per month
          </Text>{" "}
        </Text>
      </Text>

      <Button type="submit" w={56} colorScheme="blue" size="lg">
        {intl.get("getYourAcess")}
      </Button>
    </Stack>
  );
};
