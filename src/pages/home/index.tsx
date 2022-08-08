import { VStack } from '@chakra-ui/react';
import { Navbar } from '../../components/navbar';
import { InformationSection } from './contents/informationSection';
import { MySection } from './contents/mySection';
//import { ProjectSection } from './contents/projectSection';

export function Home() {
  return (
    <VStack flex={1} bg="primaryDark.100">
      <Navbar />
      <InformationSection />
      <MySection />
    </VStack>
  );
}
