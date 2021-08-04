import { Flex } from '@chakra-ui/react';
import { TravelImage } from './TravelImage';

export function TravelTypes() {
  return (
    <Flex
      align="center"
      justifyContent="space-between"
      flexWrap="wrap"
      px={['5', 'initial']}
      gridGap={['7', 'initial']}
    >
      <TravelImage
        src="/images/home/nightlife.svg"
        alt="Night life"
        title="vida noturna"
      />
      <TravelImage src="/images/home/beach.svg" alt="Beach" title="praia" />
      <TravelImage src="/images/home/modern.svg" alt="Modern" title="moderno" />
      <TravelImage
        src="/images/home/classic.svg"
        alt="Classic"
        title="clássico"
      />
      <TravelImage
        src="/images/home/more.svg"
        alt="And more"
        title="e mais..."
        center
      />
    </Flex>
  );
}
