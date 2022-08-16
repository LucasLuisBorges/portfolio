import { VStack, Text, Box, HStack, useColorModeValue } from '@chakra-ui/react';

interface IProps {
  name: string;
  date: string;
  type: string;
  content: string;
}

export function CardJobs({ name, date, type, content }: IProps) {
  const bg = useColorModeValue('primaryDark.200', 'primaryWhite.200');
  const textColor = useColorModeValue('whiteAlpha.700', 'white');
  return (
    <VStack bg={bg} py={5} w="400px" minH="250px" rounded={25}>
      <HStack>
        <Text fontSize={24} fontWeight="medium" color={textColor}>
          {name}
        </Text>
        <Text>{date}</Text>
      </HStack>
      <Text color={textColor}>{type}</Text>
      <Box w="50px" h="2px" bg={textColor} />
      <Text maxW="90%" textAlign="center" color={textColor}>
        {content}
      </Text>
    </VStack>
  );
}
