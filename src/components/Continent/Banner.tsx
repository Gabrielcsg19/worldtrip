import { Flex, Container, Heading } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex bgImg="/images/continent/europe-inner-image.svg" h={500}>
      <Container maxWidth="container.lg">
        <Flex align="flex-end" h="100%">
          <Heading
            as="h1"
            mb="16"
            fontWeight="semibold"
            color="gray.50"
            fontSize="5xl"
          >
            Europa
          </Heading>
        </Flex>
      </Container>
    </Flex>
  );
}
