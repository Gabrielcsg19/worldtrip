import { Flex, Container, Heading } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      bgImg="/images/continent/europe-inner-image.svg"
      bgSize="cover"
      h={[150, 500]}
    >
      <Container maxWidth="container.lg">
        <Flex
          align={['center', 'flex-end']}
          justify={['center', 'initial']}
          h="100%"
        >
          <Heading
            as="h1"
            mb={['initial', '16']}
            fontWeight="semibold"
            color="gray.50"
            fontSize={['2xl', '5xl']}
          >
            Europa
          </Heading>
        </Flex>
      </Container>
    </Flex>
  );
}
