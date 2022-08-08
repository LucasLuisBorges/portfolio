import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const itemAnimated = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const MotionBox = motion<BoxProps>(Box);
