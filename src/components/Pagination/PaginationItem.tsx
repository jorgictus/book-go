import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ChakraButtonProps {
  isCurrent?: boolean;
  number: number;
}

export const PaginationItem = ({
  isCurrent = false,
  number,
  ...rest
}: PaginationItemProps) => {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="2"
      colorScheme="blue"
      disabled
      _disabled={{ bg: "blue.500", cursor: "default" }}
      {...rest}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="2"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
      {...rest}
    >
      {number}
    </Button>
  );
};
