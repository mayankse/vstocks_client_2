"use client";
import FooterPage from "../shared/footer/page";
import NavbarPage from "../shared/navbar/page";

import {
  ArrowRight,
  Edit,
  KeyboardArrowRight,
  Search,
} from "@mui/icons-material"
import { ArrowCircleDown, East, KeyboardArrowDown } from "@mui/icons-material";
import React from "react";

const AnimationPage = () => {
  return (
    <div className="bg-[#fefaff]">
      <div className="bg-[#2E67DD]">
        <NavbarPage/>
      </div>
      <div className="bg-[#fefaff] md:m-10 p-1">
        <div className="md:m-4">
          <div className="flex flex-col md:flex-row justify-around md:m-4 mt-3">
            <div className="md:mb-0 mt-1 flex justify-center items-center">
              <p className="inline-block mx-text sm:text-[22px] font-popinns font-semibold md:text-[30px] lg:text-[40px] xl:text-[24px]">
                My Projects{" "}<KeyboardArrowRight className=" sm:relative absolute  xl:text-3xl xl:flex" />
              </p>
            </div>
            <div className="w-full md:w-3/4 lg:w-1/2 mt-4 md:mt-0 hidden xl:flex">
              <div className="relative w-full xl:p-5">
                <input
                  type="text"
                  placeholder="Search in your projects"
                  className="w-full p-5 md:p-5 lg:py-4  xl:p-5 pr-20 rounded-full inline-block placeholder-font-roman  placeholder-text-18px lg:placeholder-text-3xl xl:placeholder:text-[20px] xl:placeholder:ml-10 placeholder:text-[#424142]  bg-[#efebf0] focus:outline-none"
                />
                <span className="absolute inset-y-0 right-0  xl:mr-9 flex items-center pr-5">
                  <Search className="w-6 h-6 md:w-[26px] md:h-[26px] text-[#424142]" />
                </span>
              </div>
            </div>
            <div className=" mt-10 hidden xl:flex">
              <p className="inline-block text-[20px] font-popinns font-normal ">
                View 
              </p>
              <span className="ml-2 font-semibold text-[20px]">
              All<KeyboardArrowDown />
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-around font xl:mt-[105px]  md:flex-row md:m-4">
            <div className="shadow-md rounded-xl bg-[#ffffff] m-3 mt-5 md:w-1/3 lg:w-1/4">
              <div className="m-2 w-full">
                <img
                  src="/images/n1.svg"
                  className="md:w-[auto] m-3 h-[295px]"
                  alt=""
                />
                <div className="justify-between m-1">
                  <div className="ml-5 xl:mt-1 text-md inline-block font-medium">
                    unitold file 1
                  </div>
                  <div className="inline-block">
                    <Edit className="ml-6 " />
                  </div>
                  <div className="text-[12px] ml-5">Vector Graphics</div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-xl bg-[#ffffff] m-3 mt-5 md:w-1/3 lg:w-1/4">
              <div className="w-full">
                <img
                  src="/images/n2.svg"
                  className="md:w-[auto] h-[auto]"
                  alt=""
                />
                <div className="justify-between ml-8 m-1 mt-[-15px]">
                  <div className="inline-block font-medium xl:mt-[-10px]">
                    Sankranti
                  </div>
                  <div className="inline-block">
                    <Edit className="ml-10" />
                  </div>
                  <div className="text-[12px]">Vector Graphics</div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-xl bg-[#ffffff] m-3 mt-5 md:w-1/3 lg:w-1/4">
              <div>
                <img
                  src="/images/n3.svg"
                  className="md:w-[auto] h-[auto]"
                  alt=""
                />
                <div className="justify-between ml-8 m-1 mt-[-15px]">
                  <div className="inline-block font-medium xl:mt-[-10px]">
                    unitold file 1
                  </div>
                  <div className="inline-block">
                    <Edit className="ml-10" />
                  </div>
                  <div className="text-[12px]">Vector Graphics</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around xl:mt-[105px] md:flex-row md:m-4">
            <div className="shadow-md rounded-lg h-[290px] bg-[#ffffff] m-3 md:w-1/3 lg:w-1/4">
              <div className="m-6 h-[200px]">
                <img
                  src="/images/n4.svg"
                  className="md:w-[240px] m-3 h-[190px]"
                  alt=""
                />
                <div className="justify-between">
                  <div className="ml-4 text-md inline-block font-medium">
                    wedding invitation
                  </div>
                  <div className="inline-block">
                    <Edit className="ml-6" />
                  </div>
                </div>
                <div className="text-[12px] ml-4">Vector Animations</div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-[290px] bg-[#ffffff] m-3 md:w-1/3 lg:w-1/4">
              <div className="m-6 h-[200px]">
                <img
                  src="/images/n5.svg"
                  className="md:w-[260px] m-3 h-[190px]"
                  alt=""
                />
                <div className="justify-between">
                  <div className="ml-4 text-md inline-block font-medium">
                    Birthday invitation
                  </div>
                  <div className="inline-block">
                    <Edit className="ml-6" />
                  </div>
                </div>
                <div className="text-[12px] ml-4">Vector Animations</div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-[290px] bg-[#ffffff] m-3 md:w-1/3 lg:w-1/4">
              <div className="m-6 h-[200px]">
                <img
                  src="/images/n6.svg"
                  className="w-full md:w-[260px] m-3 h-[190px]"
                  alt=""
                />
                <div className="justify-between">
                  <div className="ml-4 text-md inline-block font-medium">
                    marriage invitation
                  </div>
                  <div className="inline-block">
                    <Edit className="ml-6" />
                  </div>
                </div>
                <div className="text-[12px] ml-4">Vector Animations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto">
        <FooterPage />
      </div>
    </div>
  );
};

export default AnimationPage;
