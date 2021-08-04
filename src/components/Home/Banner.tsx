import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isMobileVersion = useBreakpointValue({
    sm: true,
  });

  return (
    <Flex
      bgImg="/images/home/banner/background.svg"
      bgPos="top"
      bgSize="auto"
      bgRepeat="no-repeat"
      h={368}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" height={335}>
          <Box maxW={524}>
            <Heading
              as="h1"
              color="gray.50"
              fontWeight="medium"
              lineHeight="base"
            >
              5 continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text mt="5" color="gray.100" fontSize="xl">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          {isMobileVersion && (
            <Image
              transform="rotate(3deg)"
              src="/images/home/banner/airplane.svg"
              alt="Airplane"
              alignSelf="flex-end"
              mb={-30}
            />
          )}
        </Flex>
      </Container>
    </Flex>
  );
}
