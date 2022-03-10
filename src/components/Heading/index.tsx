import {
  Heading as ChakraHeading,
} from "@chakra-ui/react";
export interface HeadingProps{
  children : string;
}
export const Heading = ({ children }: HeadingProps) => {
  return (
    <ChakraHeading fontSize={["2xl" , "3xl"]} fontWeight="normal">
    {children}
    </ChakraHeading>
  );
};
