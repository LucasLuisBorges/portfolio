import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export function JobSection() {
  return (
    <VStack spacing={5} w="100%" pt={10}>
      <Text fontSize={32} color="whiteAlpha.600" fontWeight="medium">
        Jobs
      </Text>
      <HStack w="80%" minH="70vh" color="white" justifyContent="space-between">
        <Box boxSize="sm" bg="primaryDark.200">
          <Text>a</Text>
        </Box>

        <Button
          colorScheme="teal"
          leftIcon={<MdKeyboardArrowRight size={24} />}
        >
          View more
        </Button>
      </HStack>
    </VStack>
  );
}
