import { HStack, Text, VStack } from '@chakra-ui/react';
import { CardProjects } from '../../../components/cardProjects';

export function ProjectSection() {
  return (
    <VStack spacing={5}>
      <Text fontSize={32} color="whiteAlpha.600" fontWeight="medium">
        Projects
      </Text>
      <HStack w="80%" justifyContent="center" flexWrap="wrap" gap={5}>
        <CardProjects />
        <CardProjects />
        <CardProjects />
      </HStack>
    </VStack>
  );
}
