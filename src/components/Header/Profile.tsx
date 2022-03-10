import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export interface ProfileProps {
  name: string;
  email: string;
  src?: string;
  showProfileData: boolean;
}
export const Profile = ({
  name,
  email,
  src,
  showProfileData = true,
}: ProfileProps) => {

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text> {name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}
      <Avatar size="md"  src={src} name={name} />
    </Flex>
  ) 
};
