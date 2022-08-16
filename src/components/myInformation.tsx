import { Box, Button, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export function MyInformation() {
  const [copied, setCopied] = useState(false);
  const bg = useColorModeValue('primaryDark.200', 'primaryWhite.200');
  const textColor = useColorModeValue('whiteAlpha.700', 'white');
  const text =
    "My name is Lucas, I'm 21 years old and I've always liked programming. I am currently studying systems analysis and development and completion isscheduled for december. I have listed all the technologies that I have a great affinity for, but I intend not to get stuck only on the front, I want to become a full stack!.";

  function copyText() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <VStack
      w="100%"
      boxShadow="dark-lg"
      bg={bg}
      rounded={25}
      py={10}
      spacing={5}
      pos="relative"
    >
      <Button
        pos="absolute"
        colorScheme="teal"
        size="sm"
        right={10}
        onClick={copyText}
      >
        {copied ? 'Copied' : 'Copy'}
      </Button>
      <Box w="40%" h="2px" bg={textColor} />
      <Text fontSize={24} fontWeight="medium" color={textColor}>
        My Information
      </Text>
      <Text
        fontSize={16}
        fontWeight="medium"
        color={textColor}
        maxW="80%"
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  );
}
