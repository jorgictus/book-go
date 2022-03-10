import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <Text
        as="a"
        fontSize={"3xl"}
        fontWeight="bold"
        letterSpacing="tight"
        w={["100%","64"]}
        align={["center", 'left']}
      >
        book
        <Text as="span" mx="1" color="blue.500">
          .
        </Text>
        go
      </Text>
    </Link>
  );
};
