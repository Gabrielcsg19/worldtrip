import {
  Box,
  Image,
  ImageProps,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

interface TravelImageProps {
  title: string;
  src: string;
  alt: string;
  center?: boolean;
}

export function TravelImage({
  src,
  alt,
  title,
  center = false,
}: TravelImageProps) {
  const isMobileVersion = useBreakpointValue({ sm: true });

  return (
    <Stack
      flex={['initial', 1]}
      direction={['row', 'column']}
      align="center"
      w={center && '100%'}
      justify={center && 'center'}
    >
      {isMobileVersion ? (
        <Image maxH={85} src={src} alt={alt} />
      ) : (
        <Box h="8px" w="8px" borderRadius="full" background="yellow.800" />
      )}
      <Text
        mt="6"
        fontWeight={['medium', 'semibold']}
        fontSize="2xl"
        textAlign="center"
      >
        {title}
      </Text>
    </Stack>
  );
}
