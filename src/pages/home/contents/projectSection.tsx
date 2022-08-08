import { HStack } from '@chakra-ui/react';
import { CardProjects } from '../../../components/cardProjects';

export function ProjectSection() {
  return (
    <HStack w="80%" color="white" justifyContent="space-between">
      <CardProjects />
      <CardProjects />
      <CardProjects />
    </HStack>
  );
}
