import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg bg-gradient-to-b from-orange-250 to-fuchsia-300  z-40 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold text-3xl font-mono ml-[10px] hidden md:block text-white">
            DATAMAZE
          </span>
        </a>
        {/* <div className="flex flex-row gap-5 justify-center items-center ">
          <FaInstagram
            href=""
            className="text-2xl text-white cursor-pointer hover:text-purple-600"
          />
          <FaTwitter
            href=""
            className="text-2xl text-white cursor-pointer hover:text-blue-600"
          />

          <FaFacebook
            href=""
            className="text-2xl text-white cursor-pointer hover:text-blue-400"
          />
        </div> */}

        <div className="w-[500px] text-lg h-full flex flex-row items-center justify-between md: text-gray-50  ">
          {/* <div className="flex items-center justify-between w-full h-auto border border-[#34285861] bg-gradient-to-b from-purple-800 to-fuchsia-100 mr-[15px] px-[20px] py-[10px] rounded-full text-black"> */}
          <a
            href="#about-me"
            className="cursor-pointer font-semibold hover:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300 "
          >
            About
          </a>
          <a
            href="#projects"
            className="cursor-pointer font-semibold hover:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300"
          >
            Events
          </a>
          <a
            href="#schedule"
            className="cursor-pointer font-semibold hover:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300 "
          >
            Schedule
          </a>

          <a
            href="#general"
            className="cursor-pointer font-semibold hover:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300 "
          >
            General Information
          </a>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
