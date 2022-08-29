import {
  Box,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
  Image,
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
        <Link
          download
          href="./assets/cv.pdf"
          color="white"
          size="md"
          bg="cyan.600"
          px={5}
          py={2}
          borderRadius={5}
        >
          Download cv
        </Link>
      </VStack>
      <Box boxSize="250px">
        <Image
          objectFit="cover"
          src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-13-1024x959.png"
        />
      </Box>
    </HStack>
  );
}
