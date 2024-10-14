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
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: ImageTwo,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: ImageThree,
    btnText: "Room & Suites",
  },
];

const HeroSlider = () => {
  return (
    <Swiper className="heroSlider h-[600px] lg:h-[860px]">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full bg-pink-500 flex justify-center items-center relative"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5 ">
                Just Enjoy and relax
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px]">
                {title}
              </h1>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>

            {/* overlay */}
            <div className="absolute top-0 w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
