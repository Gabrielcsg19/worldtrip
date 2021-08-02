import { Box, Container, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Box
        bgImg="/images/background.svg"
      >
        <Container maxW={1160}>
          <h1>Teste</h1>
        </Container>
      </Box>
    </Flex>
  )
}
