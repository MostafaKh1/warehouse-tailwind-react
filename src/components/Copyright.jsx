import React from "react";

import { copyrightData } from "../data";
export default function Copyright() {
  const { text, icon } = copyrightData;
  return (
    <section className="mt-24 pb-12" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center md:text-left log:flex-row gap-y-8">
          {/* text */}
          <div className="text-sm font-light italic max-w-[360px] ">{text}</div>
          {/* icon */}
          <div className="-order-1 md:order-1 ">
            <div className="w-[60px] h-[60px] bg-accent-primary/20 flex justify-center items-center rounded-full cursor-pointer group">
              <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
