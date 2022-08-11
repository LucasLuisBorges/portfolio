import { Avatar, VStack, Text, HStack, Box } from '@chakra-ui/react';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { IconAnimated } from '../../../components/iconAnimated';
import {
  animatedBox,
  itemAnimated,
  imageAnimated,
  nameAnimated,
  subTitleAnimated,
  MotionBox,
} from '../../../animations/profileAnamation';
import { useRef } from 'react';

export function InformationSection() {
  const containerRef = useRef(null);
  const containerWelcomeRef = useRef(null);
  return (
    <HStack
      w="80%"
      minH="70vh"
      color="white"
      display="flex"
      justifyContent={{ base: 'center', xl: 'space-between' }}
    >
      <MotionBox
        as={VStack}
        boxSize="sm"
        bg="primaryDark.200"
        rounded={15}
        py={15}
        boxShadow="dark-lg"
        variants={animatedBox}
        initial="hidden"
        animate="visible"
      >
        <MotionBox
          as={VStack}
          variants={animatedBox}
          initial="hidden"
          animate="visible"
          w="100%"
        >
          <MotionBox
            ref={containerRef}
            w="100%"
            h="150px"
            display="flex"
            placeContent="center"
            placeItems="center"
            overflow="hidden"
          >
            <MotionBox
              drag
              dragConstraints={containerRef}
              variants={imageAnimated}
              initial="hidden"
              animate="visible"
            >
              <Avatar
                pointerEvents="none"
                size="2xl"
                name="Dan Abrahmov"
                src="https://github.com/LucasLuisBorges.png"
                borderColor="red.500"
                borderWidth="2px"
              />
            </MotionBox>
          </MotionBox>
          <MotionBox variants={nameAnimated} initial="hidden" animate="visible">
            <Text fontSize={24} color="whiteAlpha.700">
              Lucas Luis Borges
            </Text>
          </MotionBox>
          <MotionBox
            variants={subTitleAnimated}
            initial="hidden"
            animate="visible"
          >
            <Text fontSize={16} color="whiteAlpha.700">
              Developer
            </Text>
          </MotionBox>
        </MotionBox>
        <Box w="60%" h="2px" bg="whiteAlpha.700" />
        <MotionBox
          as={HStack}
          maxW="75%"
          flexWrap="wrap"
          justifyContent="center"
          gap={5}
          paddingTop={3}
        >
          <MotionBox variants={itemAnimated} initial="hidden" animate="visible">
            <IconAnimated>
              <SiTypescript size={28} color="#2828dab8" />
            </IconAnimated>
          </MotionBox>
          <MotionBox variants={itemAnimated} initial="hidden" animate="visible">
            <IconAnimated>
              <SiJavascript size={28} color="#e4e01fb8" />
            </IconAnimated>
          </MotionBox>
          <MotionBox variants={itemAnimated} initial="hidden" animate="visible">
            <IconAnimated>
              <SiReact size={28} color="#23b6e2b8" />
            </IconAnimated>
          </MotionBox>
          <MotionBox variants={itemAnimated} initial="hidden" animate="visible">
            <IconAnimated>
              <SiHtml5 size={28} color="#e7781db8" />
            </IconAnimated>
          </MotionBox>
          <MotionBox variants={itemAnimated} initial="hidden" animate="visible">
            <IconAnimated>
              <SiCss3 size={28} color="#2357c7b8" />
            </IconAnimated>
          </MotionBox>
        </MotionBox>
      </MotionBox>
      <MotionBox
        display={{ base: 'none', xl: 'flex' }}
        ref={containerWelcomeRef}
        h="sm"
        w="50%"
        alignItems="center"
        justifyContent="center"
        placeContent="center"
        placeItems="center"
      >
        <MotionBox drag dragConstraints={containerWelcomeRef}>
          <Text fontSize={24} fontWeight="medium" color="whiteAlpha.600">
            Welcome the my portfolio
          </Text>
        </MotionBox>
      </MotionBox>
    </HStack>
  );
}
