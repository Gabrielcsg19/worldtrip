import { Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { Banner } from '../components/Continent/Banner';
import { Card } from '../components/Continent/Card';
import { Content } from '../components/Continent/Content';
import { Header } from '../components/Header';

export default function Continent() {
  return (
    <Flex flexDir="column">
      <Header />
      <Banner />

      <Container maxW="container.lg" mt="20">
        <Content />

        <Heading mt="20" mb="10" fontWeight="medium" fontSize="4xl">
          Cidades +100
        </Heading>

        <SimpleGrid columns={[1, 2, 4]} spacing={12} mb="10">
          <Card
            imgSrc="/images/continent/card/london.svg"
            city="Londres"
            country="Reino Unido"
            flagImgSrc="/images/continent/card/flag/england-flag.svg"
          />

          <Card
            imgSrc="/images/continent/card/paris.svg"
            city="Paris"
            country="França"
            flagImgSrc="/images/continent/card/flag/france-flag.svg"
          />

          <Card
            imgSrc="/images/continent/card/rome.svg"
            city="Roma"
            country="Itália"
            flagImgSrc="/images/continent/card/flag/italy-flag.svg"
          />

          <Card
            imgSrc="/images/continent/card/prague.svg"
            city="Praga"
            country="República Tcheca"
            flagImgSrc="/images/continent/card/flag/czech-republic-flag.svg"
          />

          <Card
            imgSrc="/images/continent/card/amsterdam.svg"
            city="Amsterdã"
            country="Holanda"
            flagImgSrc="/images/continent/card/flag/holland-flag.svg"
          />
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
