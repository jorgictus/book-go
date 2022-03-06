import { Box, Flex, Text, Avatar, Button } from "@chakra-ui/react";
export interface ProfileProps {
  name: string;
  email: string;
  src?: string;
  showProfileData: boolean;
  loggedIn?: boolean;
}
export const Profile = ({
  name,
  email,
  src,
  showProfileData = true,
  loggedIn = true,
}: ProfileProps) => {
  return loggedIn ? (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}
      <Avatar size="md" name={name} />
    </Flex>
  ) : (
    <Button type="submit" colorScheme="blue" size="md">
      Entrar
    </Button>
  );
};
