import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" w="100%" align="center" justify="center" py="6">
      <Image src="/images/header/logo.svg" alt="Worldtrip logo" />
    </Flex>
  );
}
