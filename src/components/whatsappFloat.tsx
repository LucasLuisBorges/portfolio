import { Link } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function WhatsappFloat() {
  return (
    <Link
      target="_blank"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="60px"
      w="60px"
      bg="green.600"
      rounded="full"
      href="https://wa.me/999444443"
    >
      <WhatsappLogo size={36} color="white" />
    </Link>
  );
}
