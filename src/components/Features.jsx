import React from "react";

// import data features

import { featuresData } from "../data";
// import icon
import { BsArrowRight } from "react-icons/bs";

export default function Features() {
  const { list, subtitle, title } = featuresData;
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2 className="h2 mb-6" data-aos="fade-down" data-aos-delay="100">
            {title}
          </h2>
          <p
            className="lead max-w-[584px] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {subtitle}
          </p>
        </div>
        {/* list */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((ele, i) => {
            // destructure
            const { title, bgImage, delay, description, image, linkText } = ele;
            return (
              <div
                key={i}
                className="w-full  max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-offset="100"
              >
                <div className="hidden xl:flex absolute top-0 -z-10 right-0">
                  <img src={bgImage} alt="/" />
                </div>
                <div
                  className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="" />
                </div>
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic mb-4">{description}</p>
                  {/* link */}
                  <div className="flex items-center gap-x-2 text-primary font-bold group">
                    <a href="#">{linkText}</a>
                    <BsArrowRight className="text-xl text-accent-primary  transition-all group-hover:ml-[5px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
//
