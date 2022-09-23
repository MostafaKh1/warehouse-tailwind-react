import React from "react";

// import about data

import { aboutData } from "../data";

export default function About() {
  const { image, subtitle, title } = aboutData;
  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="100"
    >
      <div className="container mx-auto ">
        <div className=" bg-accent-secondary/[15%] rounded-[50px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center  xl:text-left gap-x-[60px] xl:pb-0">
          {/* img */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="/" />
          </div>
          {/* text */}
          <div
            className="flex-1 xl:pr-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="h2 mb-10">{title}</h2>
            <p
              className=" lead max-w-[474px] mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
