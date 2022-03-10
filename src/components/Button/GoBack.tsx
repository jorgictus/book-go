import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import * as React from "react";
import { FiArrowLeft } from "react-icons/fi";

export const GoBackButton = (props: IconButtonProps) => (
  <IconButton
    isRound
    color="white"
    size="md"
    variant="unstyled"
    fontSize="24"
    _hover={{ transform: "scale(1.1)" }}
    sx={{ ":hover > svg": { transform: "scale(1.1)" } }}
    transition="all 0.15s ease"
    icon={<Icon  as={FiArrowLeft} transition="all 0.15s ease" />}
    {...props}
  />
);
