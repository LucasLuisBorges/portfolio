import { VStack } from '@chakra-ui/react';
import { Navbar } from '../../components/navbar';
import { FooterSection } from './contents/footerSection';
import { InformationSection } from './contents/informationSection';
import { JobSection } from './contents/jobSection';
import { MySection } from './contents/mySection';
import { ProjectSection } from './contents/projectSection';

export function Home() {
  return (
    <VStack flex={1} bg="primaryDark.100">
      <Navbar />
      <InformationSection />
      <MySection />
      <ProjectSection />
      <JobSection />
      <FooterSection />
    </VStack>
  );
}
