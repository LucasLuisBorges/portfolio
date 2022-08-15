import { Box, Button, HStack, Link, Text, VStack } from '@chakra-ui/react';

export function FooterSection() {
  return (
    <HStack
      w="100%"
      h="50vh"
      bg="primaryDark.200"
      justifyContent="space-around"
    >
      <VStack h="250px" w="400px" spacing={5}>
        <Text fontSize={24} color="whiteAlpha.700">
          Contact
        </Text>
        <Box>
          <Text mb={2} color="whiteAlpha.600">
            Email: lucasluisborges1205@gmail.com
          </Text>
          <Text color="whiteAlpha.600">Number: +55 (48) 999444443</Text>
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
