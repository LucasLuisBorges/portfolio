import { Text, VStack, HStack, Center } from '@chakra-ui/react';
import { CardJobs } from '../../../components/cardJobs';
import { jobs } from '../../../utils/jobsData';

export function JobSection() {
  return (
    <VStack w="100%" spacing={10} pt={20} pb={20} flex={1}>
      <Text fontSize={32} color="whiteAlpha.600" fontWeight="medium">
        Jobs
      </Text>
      <Center w="100%">
        <HStack
          w="80%"
          color="whiteAlpha.600"
          justifyContent="center"
          flexWrap="wrap"
          gap={5}
        >
          {jobs.map(items => (
            <CardJobs
              key={items.name}
              name={items.name}
              date={items.date}
              type={items.type}
              content={items.content}
            />
          ))}
        </HStack>
      </Center>
    </VStack>
  );
}
