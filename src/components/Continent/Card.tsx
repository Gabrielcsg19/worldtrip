import { VStack, Flex, Box, Heading, Image, Text } from '@chakra-ui/react';

interface CardProps {
  imgSrc: string;
  city: string;
  country: string;
  flagImgSrc: string;
}

export function Card({ imgSrc, city, country, flagImgSrc }: CardProps) {
  return (
    <VStack>
      <Image src={imgSrc} alt={`Imagem da cidade de ${city}`} w="100%" />
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        p="6"
        mt="0px !important"
        borderWidth="1px"
        borderRadius="0 0 5px 5px"
        borderColor="yellow.700"
        borderTop="0"
      >
        <Box>
          <Heading fontWeight="semibold" fontSize="xl">
            {city}
          </Heading>
          <Text mt="3" color="gray.600">
            {country}
          </Text>
        </Box>
        <Image
          src={flagImgSrc}
          h={30}
          w={30}
          alt={`Bandeira do(a) ${country}`}
        />
      </Flex>
    </VStack>
  );
}
