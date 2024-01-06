"use client ";
import { Facebook } from "@mui/icons-material";
import { Instagram, Twitter } from "@mui/icons-material";
import React from "react";

const FooterPage = () => {
  return (
    <div className="mx-auto xl:w-[100] h-[400px] bg-[#2e67dd]">
      <div className=" xl:mt-[50px]   bg-[#2e67dd] text-white text-center ">
        <div className=" xl:m-[100px]  xl:mt-[50px] ">
          <div className="flex justify-center  xl:mt-[0px] ">
            <img
              alt=""
              src="/logo.svg"
              width={40}
              height={50}
              className="mt-[60px]"
            />
          </div>
          <p className="  m-5 text-xl text-[#d5e1f8]">
            There are three responses to a piece <br />
            of design - yes, no, and WOW!
          </p>
          <div className="flex flex-wrap justify-evenly mt-12 font-roman  text-[22px]">
            <p className="">Privacy Policy</p>
            <p className="">Contact Us</p>
            <p className="">Terms and conditions</p>
            <p className="">About</p>
            <p className="">FAQs</p>
          </div>

          <div className="flex justify-center items-center mt-2 p-4">
            <img
              src="/images/faceb.svg" width={45}
              className=" rounded-full p-4 m-1 "
              alt=""
            />
            <img
              src="/images/twitter.svg"width={55}
              className=" rounded-full p-4 m-1"
              alt=""
            />
            <img
              src="/images/instagram.svg" width={55}
              className=" rounded-full bg-[#2e67dd] p-4 m-1"
              alt=""
            />
          </div>

          <div className="h-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
