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
    <Flex direction={['column', 'row']}>
      <Text flex="1" textAlign="justify" fontSize={['sm', '2xl']}>
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex
        flex="1"
        textAlign="center"
        align="center"
        justify={['space-between', 'space-evenly']}
        fontWeight={['normal', 'semibold']}
        mt={['4', 0]}
      >
        <VStack spacing="0" align={['start', 'center']}>
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.800"
            fontWeight={['semibold', 'bold']}
          >
            50
          </Heading>
          <Text fontSize={['md', '2xl']}>países</Text>
        </VStack>

        <VStack spacing="0" align={['start', 'center']}>
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.800"
            fontWeight={['semibold', 'bold']}
          >
            60
          </Heading>
          <Text fontSize={['md', '2xl']}>línguas</Text>
        </VStack>

        <VStack spacing="0" align={['start', 'center']}>
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.800"
            fontWeight={['semibold', 'bold']}
          >
            27
          </Heading>
          <HStack>
            <Text fontSize={['md', '2xl']}>cidades +100</Text>
            <Tooltip
              label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo. "
              aria-label="A tooltip"
            >
              <Image
                src="/images/continent/info.svg"
                alt="Info icon"
                w={['10px', 'initial']}
                h={['10px', 'initial']}
              />
            </Tooltip>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}
