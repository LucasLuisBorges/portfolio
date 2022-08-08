import { Container } from '@chakra-ui/react';
import { useRef } from 'react';
import {
  MotionBox,
  MotionCenter,
} from '../../../animations/myInformationAnimation';
import { MyInformation } from '../../../components/myInformation';

export function MySection() {
  const containerRef = useRef(null);
  return (
    <Container maxW="80%" h="60vh">
      <MotionCenter>
        <MotionBox
          ref={containerRef}
          display="flex"
          placeContent="center"
          placeItems="center"
          w="60%"
          mt={20}
        >
          <MotionBox drag dragConstraints={containerRef}>
            <MyInformation />
          </MotionBox>
        </MotionBox>
      </MotionCenter>
    </Container>
  );
}
