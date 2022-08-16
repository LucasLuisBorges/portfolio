import { useColorModeValue, VStack } from '@chakra-ui/react';
import { Navbar } from '../../components/navbar';
import { FooterSection } from './contents/footerSection';
import { InformationSection } from './contents/informationSection';
import { JobSection } from './contents/jobSection';
import { MySection } from './contents/mySection';
import { ProjectSection } from './contents/projectSection';

export function Home() {
  const bg = useColorModeValue('primaryDark.100', '#fff');
  return (
    <VStack flex={1} bg={bg}>
      <Navbar />
      <InformationSection />
      <MySection />
      <ProjectSection />
      <JobSection />
      <FooterSection />
    </VStack>
  );
}
