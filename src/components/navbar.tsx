import { Text, HStack, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { InvertThemeButton } from './invertThemeButton';
import { LinkIconAnimated } from './linkIconAnimated';

export function Navbar() {
  const [isFixed, updateFixed] = useState(false);
  const startBg = useColorModeValue('primaryDark.200', 'primaryWhite.100');
  const endBg = useColorModeValue('primaryDark.300', 'primaryWhite.300');
  const text = useColorModeValue('#f1f0f0b9', '#fff');

  useEffect(() => {
    document.addEventListener('scroll', function () {
      const scrollYPosition = window.pageYOffset;
      if (scrollYPosition >= 10) updateFixed(true);
      else updateFixed(false);
    });
  }, []);

  return (
    <HStack
      pos="fixed"
      w="100%"
      h="60px"
      bg={isFixed ? endBg : startBg}
      justifyContent="space-between"
      px={isFixed ? 20 : 25}
      py={isFixed ? 10 : 0}
      zIndex={100}
      transition="1s"
    >
      <Text color="whiteAlpha.600">LOGO</Text>
      <HStack spacing={5}>
        <InvertThemeButton />
        <LinkIconAnimated link="https://www.linkedin.com/in/lucasluisborges/">
          <SiLinkedin size={22} color={text} />
        </LinkIconAnimated>
        <LinkIconAnimated link="https://github.com/LucasLuisBorges">
          <SiGithub size={22} color={text} />
        </LinkIconAnimated>
        <LinkIconAnimated link="https://www.instagram.com/llborgesss/">
          <SiInstagram size={22} color={text} />
        </LinkIconAnimated>
      </HStack>
    </HStack>
  );
}
