import { VStack, Text, Box, HStack } from '@chakra-ui/react';

interface IProps {
  name: string;
  date: string;
  type: string;
  content: string;
}

export function CardJobs({ name, date, type, content }: IProps) {
  return (
    <VStack bg="primaryDark.200" py={5} w="400px" minH="250px" rounded={25}>
      <HStack>
        <Text fontSize={24} fontWeight="medium" color="whiteAlpha.600">
          {name}
        </Text>
        <Text>{date}</Text>
      </HStack>
      <Text>{type}</Text>
      <Box w="50px" h="2px" bg="whiteAlpha.700" />
      <Text maxW="90%" textAlign="center">
        {content}
      </Text>
    </VStack>
  );
}
