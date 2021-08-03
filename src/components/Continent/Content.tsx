import {
  Flex,
  VStack,
  Heading,
  HStack,
  Tooltip,
  Text,
  Image,
} from '@chakra-ui/react';

export function Content() {
  return (
    <Flex>
      <Text flex="1" textAlign="justify" fontSize="2xl">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex
        flex="1"
        textAlign="center"
        align="center"
        justify="space-evenly"
        fontWeight="semibold"
      >
        <VStack spacing="0">
          <Heading fontSize="5xl" color="yellow.800">
            50
          </Heading>
          <Text fontSize="2xl">países</Text>
        </VStack>

        <VStack spacing="0">
          <Heading fontSize="5xl" color="yellow.800">
            60
          </Heading>
          <Text fontSize="2xl">línguas</Text>
        </VStack>

        <VStack spacing="0">
          <Heading fontSize="5xl" color="yellow.800">
            27
          </Heading>
          <HStack>
            <Text fontSize="2xl">cidades +100</Text>
            <Tooltip
              label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo. "
              aria-label="A tooltip"
            >
              <Image src="/images/continent/info.svg" alt="Info icon" />
            </Tooltip>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}
