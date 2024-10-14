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
            className=" bg-pink-500 flex justify-center items-center relative h-full w-full z-[999px]"
            key={index}
          >
            <div className="flex  flex-col text-white text-center z-10 bg-red-500 ">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Just Enjoy and relax
              </div>
              <div className="max-w-[920px] flex items-center justify-center">
                {" "}
                <h1 className="text-[32px] font-primary uppercase tracking-[2px]  lg:text-[68px] leading-tight mb-6">
                  {title}
                </h1>
              </div>

              <div>
                <button className="btn btn-lg btn-primary mx-auto">
                  {btnText}
                </button>
              </div>
            </div>

            {/* hero image */}
            <div className="absolute w-full h-full z-[8px]">
              <img className="object-cover" src={bg} alt="" />
            </div>

            {/* overlay */}
            <div className="absolute w-full h-full bg-black/70 z-[9px]"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
