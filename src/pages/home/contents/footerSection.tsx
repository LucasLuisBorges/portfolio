import {
  Box,
  Button,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export function FooterSection() {
  const bg = useColorModeValue('primaryDark.200', 'primaryWhite.200');
  const textColor = useColorModeValue('whiteAlpha.700', 'white');
  return (
    <HStack w="100%" h="50vh" bg={bg} justifyContent="space-around">
      <VStack h="250px" w="400px" spacing={5}>
        <Text fontSize={24} color={textColor}>
          Contact
        </Text>
        <Box>
          <Text mb={2} color={textColor}>
            Email: lucasluisborges1205@gmail.com
          </Text>
          <Text color={textColor}>Number: +55 (48) 999444443</Text>
        </Box>
        <Button colorScheme="teal" size="md">
          <Link download href="./assets/cv.pdf">
            Download cv
          </Link>
        </Button>
      </VStack>
      <Box boxSize="250px" bg="blue"></Box>
    </HStack>
  );
}
