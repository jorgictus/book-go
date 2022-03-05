import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";
export interface HeadingProps{
  children : string;
}
export const Heading = ({ children }: HeadingProps) => {
  return (
    <ChakraHeading fontSize="large" fontWeight="normal">
    {children}
    </ChakraHeading>
  );
};
