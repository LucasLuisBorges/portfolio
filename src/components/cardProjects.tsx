import { VStack, Image, Text, Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { itemAnimated, MotionBox } from '../animations/projectCardAnimation';

export function CardProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <MotionBox
      as={VStack}
      layout
      onClick={toggleOpen}
      bg="primaryDark.200"
      py={5}
      rounded={25}
    >
      <MotionBox boxSize="85%" layout>
        <Image
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          rounded={25}
        />
      </MotionBox>
      <Text fontSize={24} fontWeight="medium" color="whiteAlpha.600">
        Projeto Name
      </Text>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </MotionBox>
  );
}

function Content() {
  return (
    <MotionBox
      layout
      variants={itemAnimated}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <VStack>
        <Box w="50px" h="2px" bg="whiteAlpha.700" />
        <Text>Olá </Text>
        <Text>Olá</Text>
      </VStack>
    </MotionBox>
  );
}
