import React from "react";

// import data
import { testimonialsData } from "../data";

// swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

export default function TestimonialsSlider() {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, i) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={i}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px]
            max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* image */}
            <img src={image} alt="" />
            {/* text */}
            <div>
              <div className="text-lg text-primary">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <div className="max-w-[340px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
