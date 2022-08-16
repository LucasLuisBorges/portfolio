import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';
import { useState } from 'react';

export function InvertThemeButton() {
  const [isDark, setIsDark] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('whiteAlpha.600', '#fff');

  function handleThemeMode() {
    setIsDark(!isDark);
    toggleColorMode();
  }

  return (
    <IconButton
      bg={colorMode === 'light' ? 'dark.400' : 'whiteAlpha.300'}
      color={isDark ? text : 'yellow'}
      aria-label="Dark Theme"
      icon={isDark ? <Moon /> : <Sun />}
      onClick={handleThemeMode}
      _hover={{
        bg: colorMode === 'light' ? 'whiteAlpha.700' : 'dark.500',
      }}
    />
  );
}
