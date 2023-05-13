import React from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";
import HeroCarouselNavigationButtonsContainer from "./HeroCarouselNavigationButtonsContainer";

const CarouselBanner = ({ data }) => {
  return (
    <Swiper
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      effect="fade"
      modules={[EffectFade, Autoplay]}
      centeredSlides={true}
      slidesPerView={1}
      className="relative"
      loop
    >
      {data?.map((item, index) => (
        <SwiperSlide key={item.id}>
          <CarouselItem data={item} rank={index + 1} />
        </SwiperSlide>
      ))}
      <HeroCarouselNavigationButtonsContainer />
    </Swiper>
  );
};

export default CarouselBanner;
