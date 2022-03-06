import { Text } from "@chakra-ui/react";
export const Logo = () => {
  return (
    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
      book
      <Text as="span" mx="1" color="blue.500">
        .
      </Text>
      go
    </Text>
  );
};
