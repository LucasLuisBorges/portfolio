import { Box, BoxProps } from '@chakra-ui/react';
import { Center, CenterProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);
export const MotionCenter = motion<CenterProps>(Center);
