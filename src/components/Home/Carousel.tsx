import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { CarouselSlide } from './CarouselSlide';

SwiperCore.use([Pagination, Navigation, A11y]);

export function Carousel() {
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
      <SwiperSlide>
        <CarouselSlide
          bgImg="/images/home/carousel/europe-image.svg"
          title="Europa"
          subtitle="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselSlide
          bgImg="/images/home/carousel/america-image.jpg"
          title="América"
          subtitle="O continente que tem os EUA."
        />
      </SwiperSlide>
    </Swiper>
  );
}
