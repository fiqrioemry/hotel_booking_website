import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
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
    title: "Confortable and Nice View",
    bg: ImageTwo,
    btnText: "See our Rooms",
  },
  {
    title: "The Best Hotel Experience",
    bg: ImageThree,
    btnText: "See our Rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      className="heroSlider h-[600px] lg:h-[860px]"
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full w-full relative">
              {/* hero image */}
              <div className="absolute w-full h-full">
                <img className="object-cover h-full w-full" src={bg} alt="" />
              </div>
              {/* text */}
              <div className="flex flex-col items-center z-10 text-white">
                <div className="uppercase font-tertiary tracking-[6px] mb-5">
                  Just Enjoy and relax
                </div>
                <h1 className="text-[32px] max-w-[920px] text-center font-primary uppercase tracking-[2px]  lg:text-[68px] leading-tight mb-6">
                  {title}
                </h1>
                <button>
                  <a
                    className="btn btn-lg btn-primary mx-auto  py-4 px-6 "
                    href="#room"
                  >
                    {btnText}
                  </a>
                </button>
              </div>

              {/* blur image */}
              <div className="absolute top-0 h-full w-full bg-black/70 "></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
