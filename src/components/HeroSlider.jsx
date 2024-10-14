import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import ImageOne from "../assets/img/heroSlider/1.jpg";
import ImageTwo from "../assets/img/heroSlider/2.jpg";
import ImageThree from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: ImageOne,
    btnText: "See our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: ImageTwo,
    btnText: "See our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: ImageThree,
    btnText: "See our Rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper className="heroSlider h-[600px] lg:h-[860px]">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-full h-full bg-red-500 "
          >
            text
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
