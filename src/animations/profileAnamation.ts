import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const animatedBox = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.2,
    },
  },
};

export const itemAnimated = {
  hidden: { y: -300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const imageAnimated = {
  hidden: { y: 300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const nameAnimated = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const subTitleAnimated = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const MotionBox = motion<BoxProps>(Box);
