import { HStack, Text, VStack } from '@chakra-ui/react';
import { CardProjects } from '../../../components/cardProjects';
import { projects } from '../../../utils/projectsData';

export function ProjectSection() {
  return (
    <VStack spacing={5}>
      <Text fontSize={32} color="whiteAlpha.600" fontWeight="medium">
        Projects
      </Text>
      <HStack w="80%" justifyContent="center" flexWrap="wrap" gap={5}>
        {projects.map(items => (
          <CardProjects
            key={items.name}
            name={items.name}
            description={items.desc}
            img={items.image}
            link={items.link}
          />
        ))}
      </HStack>
    </VStack>
  );
}
