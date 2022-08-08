import { Box, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps {
  link: string;
  children: ReactNode;
}

export function LinkIconAnimated({ children, link }: IProps) {
  return (
    <Box
      as={Link}
      pos="relative"
      href={link}
      _after={{
        content: `""`,
        pos: 'absolute',
        backgroundColor: 'red.500',
        height: '3px',
        width: '0%',
        left: 0,
        bottom: '-10px',
        transition: '0.3s',
      }}
      _hover={{
        _after: {
          width: '100%',
        },
      }}
    >
      {children}
    </Box>
  );
}
