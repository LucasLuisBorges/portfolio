import { Text, HStack } from '@chakra-ui/react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { InvertThemeButton } from './invertThemeButton';
import { LinkIconAnimated } from './linkIconAnimated';

export function Navbar() {
  return (
    <HStack
      w="100%"
      h="60px"
      bg="primaryDark.200"
      justifyContent="space-between"
      px={20}
    >
      <Text color="whiteAlpha.600">LOGO</Text>
      <HStack spacing={5}>
        <InvertThemeButton />
        <LinkIconAnimated link="https://www.linkedin.com/in/lucasluisborges/">
          <SiLinkedin size={22} color="#f1f0f0b9" />
        </LinkIconAnimated>
        <LinkIconAnimated link="https://github.com/LucasLuisBorges">
          <SiGithub size={22} color="#f1f0f0b9" />
        </LinkIconAnimated>
        <LinkIconAnimated link="https://www.instagram.com/llborgesss/">
          <SiInstagram size={22} color="#f1f0f0b9" />
        </LinkIconAnimated>
      </HStack>
    </HStack>
  );
}
