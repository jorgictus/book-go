import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

interface InfoBoxProps {
  title: string;
  authors: Array<string>;
}

export const InfoBox = ({ title, authors }: InfoBoxProps) => {
  return (
    <Stack>
      <Stack spacing="1">
        <Text
          fontSize="sm"
          fontWeight="medium"
          color={useColorModeValue("gray.200", "gray.100")}
        >
          {title}
        </Text>

        <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.600")}>
          {authors?.toString()}
        </Text>
      </Stack>
    </Stack>
  );
};
