import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

interface CarouselSlideProps {
  bgImg: string;
  title: string;
  subtitle: string;
}

export function CarouselSlide({ bgImg, title, subtitle }: CarouselSlideProps) {
  return (
    <Flex
      h={450}
      bgImg={bgImg}
      bgPos="bottom"
      alt={title}
      align="center"
      justify="center"
      textAlign="center"
      textShadow="1px 2px 1px #222"
    >
      <VStack>
        <Link href="/continent" passHref>
          <Heading
            color="gray.50"
            fontWeight="bold"
            fontSize="5xl"
            lineHeight="base"
            cursor="pointer"
            transition="transform 0.5s"
            _hover={{
              transform: 'translate(0, -3px)',
            }}
          >
            {title}
          </Heading>
        </Link>
        <Text fontSize="2xl" color="gray.100" fontWeight="bold">
          {subtitle}
        </Text>
      </VStack>
    </Flex>
  );
}
