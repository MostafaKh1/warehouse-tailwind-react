import React, { useState } from "react";

import Logo from "../assets/img/logo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

// import icons
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          {/* logo */}
          <div className="flex items-center gap-x-[120px]">
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
            {/* show in large screen */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* Hide in large screen */}
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute  top-24 w-full  bg-accent-tertiary rounded font-bold transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
          {/* button */}
          <button className="btn btn-quaternary flex items-center gap-x-[20px] group ">
            Request Demo{" "}
            <BsArrowRight className=" text-accent-primary group-hover:text-white transition" />
          </button>
          {/* nav trigger only show in mobile screen */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            {navMobile ? <IoMdClose className="" /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}
