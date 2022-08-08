import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';
import { useState } from 'react';

export function InvertThemeButton() {
  const [isDark, setIsDark] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  function handleThemeMode() {
    setIsDark(!isDark);
    toggleColorMode();
  }

  return (
    <IconButton
      bg={colorMode === 'light' ? 'dark.400' : 'whiteAlpha.600'}
      color={isDark ? 'whiteAlpha.600' : 'yellow'}
      aria-label="Dark Theme"
      icon={isDark ? <Moon /> : <Sun />}
      onClick={handleThemeMode}
      _hover={{
        bg: colorMode === 'light' ? 'whiteAlpha.700' : 'dark.500',
      }}
    />
  );
}
