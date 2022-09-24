import React from "react";

import { footerData } from "../data";

import Copyright from "./Copyright";

export default function Footer() {
  const { address, email, list1, list2, logo, phone, socialList } = footerData;
  return (
    <footer data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12 ">
          {/* info */}
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            {/* logo */}
            <a href="#">
              <img className="mb-[65px]" src={logo} alt="/" />
            </a>
            {/* address */}
            <div className="max-w-[260px] mb-5 text-primary font-bold">
              {address}
            </div>
            {/* email */}
            <div className=" font-light italic">{email}</div>
            {/* phone */}
            <div className="font-bold italic  ">{phone}</div>
          </div>

          {/* lists */}
          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between ">
            {/* list 1 */}
            <div>
              <div className=" font-extrabold  text-primary mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((ele, i) => {
                  return (
                    <li key={i}>
                      <a className="text-primary" href={ele.href}>
                        {ele.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 2 */}
            <div>
              <div className=" font-extrabold  text-primary mb-8">Help</div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((ele, i) => {
                  return (
                    <li key={i}>
                      <a className="text-primary" href={ele.href}>
                        {ele.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list social */}
            <div>
              <div className=" font-extrabold  text-primary mb-8">
                Social Media
              </div>
              <ul className="flex  gap-4 justify-center">
                {socialList.map((ele, i) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full hover:bg-accent-secondary transition-all"
                      key={i}
                    >
                      <a
                        className="text-white text-2xl transition-all hover:text-white "
                        href={ele.href}
                      >
                        {ele.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
