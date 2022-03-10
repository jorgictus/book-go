import { Flex, Text, Image } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex data-testid="Banner" w="100%" bg="gray.800" justify="space-between" borderRadius="xl">
      <Text
        fontSize={["2xl", "5xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width={["100%", 700]}
        p="8"
        align={["center", "left"]}
      >
        Build your library!
        <Text as="p" lineHeight="1" fontSize={["4xl"]} my="6">
          Find your favorite
          <Text as="span" mx="2" color="blue.400">
            book
          </Text>
          <Text as="p">easily now.</Text>
        </Text>
      </Text>

      <Image
        mt="-240"
        boxSize={["100%", "520px"]}
        src="/Book-lover.svg"
        alt="Ebook"
      />
    </Flex>
  );
};
