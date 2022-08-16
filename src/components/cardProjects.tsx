import {
  VStack,
  Image,
  Text,
  Box,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { itemAnimated, MotionBox } from '../animations/projectCardAnimation';

interface IProps {
  name?: string;
  img?: string;
  description?: string;
  link?: string;
}

export function CardProjects({ name, img, description, link }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const bg = useColorModeValue('primaryDark.200', 'primaryWhite.200');
  const textColor = useColorModeValue('whiteAlpha.700', 'white');
  return (
    <MotionBox
      as={VStack}
      layout
      onClick={toggleOpen}
      bg={bg}
      py={5}
      w="220px"
      rounded={25}
    >
      <MotionBox boxSize="200px" layout>
        <Image src={img} rounded={25} />
      </MotionBox>
      <Text fontSize={24} fontWeight="medium" color={textColor}>
        {name}
      </Text>
      <AnimatePresence>
        {isOpen && <Content description={description} link={link} />}
      </AnimatePresence>
    </MotionBox>
  );
}

function Content({ description, link }: IProps) {
  const textColor = useColorModeValue('whiteAlpha.700', 'white');
  return (
    <MotionBox
      layout
      variants={itemAnimated}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <VStack>
        <Box w="50px" h="2px" bg={textColor} />
        <Text color={textColor}>{description}</Text>

        <Link
          href={`https://github.com/LucasLuisBorges/${link}`}
          color="white"
          bg="teal.400"
          p={1}
          rounded={10}
        >
          Ir para
        </Link>
      </VStack>
    </MotionBox>
  );
}
