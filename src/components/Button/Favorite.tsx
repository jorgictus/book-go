import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react'
import * as React from 'react'
import { FiHeart } from 'react-icons/fi'

export const FavoriteButton = (props: IconButtonProps) => (
    <IconButton
      isRound
      bg="white"
      aria-label="Favorite Button"
      color="gray.900"
      size="md"
      _hover={{ transform: 'scale(1.1)' }}
      sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
      transition="all 0.15s ease"
      icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
      boxShadow="base"
      {...props}
    />
)