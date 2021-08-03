import {
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Home/Banner';
import { Carousel } from '../components/Home/Carousel';
import { TravelTypes } from '../components/Home/TravelTypes';

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Banner />

      <Container maxW="container.lg" my="20">
        <TravelTypes />
      </Container>

      <Center mb="12" textAlign="center">
        <VStack>
          <Divider h="2px" maxW={90} bg="gray.700" mb="12" />

          <Heading as="h1">Vamos nessa?</Heading>
          <Heading>Então escolha seu continente</Heading>
        </VStack>
      </Center>

      <Container maxW="container.lg" mb="20" h={450}>
        <Carousel />
      </Container>
    </Flex>
  );
}
