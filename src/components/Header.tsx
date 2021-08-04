import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" w="100%" align="center" justify="center" py={['4', '6']}>
      <Image
        src="/images/header/logo.svg"
        maxW={['81px', 'initial']}
        alt="Worldtrip logo"
      />
    </Flex>
  );
}
