import { Container, ScaleFade } from '@chakra-ui/react';
import { useRef } from 'react';
import {
  MotionBox,
  MotionCenter,
} from '../../../animations/myInformationAnimation';
import { MyInformation } from '../../../components/myInformation';

export function MySection() {
  const containerRef = useRef(null);
  return (
    <Container maxW="80%" h="80vh">
      <MotionCenter>
        <MotionBox
          ref={containerRef}
          display="flex"
          placeContent="center"
          placeItems="center"
          w={{ base: '100%', xl: '60%', md: '80%' }}
          mt={20}
        >
          <ScaleFade in={true} initialScale={0} delay={1.5}>
            <MotionBox drag dragConstraints={containerRef}>
              <MyInformation />
            </MotionBox>
          </ScaleFade>
        </MotionBox>
      </MotionCenter>
    </Container>
  );
}
