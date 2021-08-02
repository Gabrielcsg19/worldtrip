import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Box
        bgImg="/images/background.svg"
        bgPos="top"
        bgSize="auto"
        bgRepeat="no-repeat"
        h={368}
      >
        <Container maxW={1160}>
          <Flex justify="space-between">
            <Box>
              <Heading colorScheme={'pink.500'}>
                5 continentes, infinitas possibilidades
              </Heading>
            </Box>

            <Box>Right</Box>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
