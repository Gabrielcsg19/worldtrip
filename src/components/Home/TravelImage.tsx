import { Flex, Image, ImageProps, Text } from '@chakra-ui/react';

interface TravelImageProps extends ImageProps {
  title: string;
}

export function TravelImage({ src, alt, title, ...rest }: TravelImageProps) {
  return (
    <Flex flex={1} flexDir="column" textAlign="center">
      <Image maxH={85} src={src} alt={alt} {...rest} />
      <Text mt="6" fontWeight="semibold" fontSize="2xl">
        {title}
      </Text>
    </Flex>
  );
}
