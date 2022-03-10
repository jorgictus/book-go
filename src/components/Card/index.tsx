import {
  Box,
  Image,
  Skeleton,
  Stack,
  useBreakpointValue,
  AspectRatio
} from "@chakra-ui/react";

import { InfoBox } from "./InfoBox";

export interface CardProps {
  title: string;
  authors: Array<string>;
  imageLink: string;
}

export const Card = ({ title, authors, imageLink }: CardProps) => {
  return (
    <Stack
      w={["64", "40"]}
      mr={["0", "4"]}
      mb={["2", "4"]}
      minHeight="72"
      _hover={{ filter: "brightness(50%)", cursor: "pointer" }}
    >
      <Box w="100%">
        <AspectRatio ratio={4 / 6}>
          <Image
            src={imageLink}
            fallback={<Skeleton />}
            alt={title}
            w="100%"
            minHeight="60"
            draggable="false"
            borderRadius={["md", "xl"]}
          />
        </AspectRatio>
      </Box>
      <InfoBox title={title} authors={authors} />
    </Stack>
  );
};
