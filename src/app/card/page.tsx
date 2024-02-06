"use client";
import HeaderPage from "../shared/header/page";
import FooterPage from "../shared/footer/page";
import NavbarPage from "../shared/navbar/page";
import SearchViews from "../searchviews/page";
import { AddCircle, ExpandMore, Home } from "@mui/icons-material";
import { Tune } from "@mui/icons-material";
import VectroSerarch from "../vectorsearch/page";
import Image from "next/image";

const CardFilter = () => {
  const items = [
    {
      Photo: " /image-11@2x.png",
    },
    {
      Photo: "/image-3@2x.png",
    },
    {
      Photo: "/image-10@2x.png",
    },
    {
      Photo: "/image-13@2x.png",
    },
    {
      Photo: " /image-20@2x.png  ",
    },
    {
      Photo: "/image-2@2x.png   ",
    },
    {
      Photo: "/image-12@2x.png",
    },
    {
      Photo: "/image-14@2x.png",
    },
    {
      Photo: "/image-18@2x.png",
    },
    {
      Photo: "/image-15@2x.png",
    },
    {
      Photo: "/image-16@2x.png",
    },
    {
      Photo: "/image-17@2x.png",
    },
    {
      Photo: "/image-24@2x.png",
    },
    {
      Photo: "/image-26@2x.png",
    },
    {
      Photo: "/image-22@2x.png",
    },
    {
      Photo: "/image-4@2x.png",
    },
    {
      Photo: "/image-25@2x.png",
    },
    {
      Photo: "/image-5@2x.png",
    },
    {
      Photo: "/image-38@2x.png",
    },
  ];
  return (
    <div>
      <div className="bg-[#2E67DD] text-white">
        <NavbarPage />
        <div className="text-center p-4">
          <p className="text-lg">
            Thousands of collections by{" "}
            <p className="inline-block text-3xl font-semibold">Vstocks</p>
          </p>
        </div>
        <div>
          <SearchViews />
        </div>
        
        <div className="mt-1  ">
          <VectroSerarch />
        </div>
        <div className="ml-4 md:ml-28 p-2 xl:flex hidden">
        <Image src="/images/home.svg" className="inline-block" alt="" />
          <span className="">&nbsp; Home Vectors</span>
         </div>
      </div>
      <div className="md:m-[90px]">
        <div className="flex justify-between flex-wrap ml-8">
          <button className="rounded-full border p-2 hover:bg-[#2E67DD] duration-500 w-36 m-2">
            {" "}
            Vector{" "}
          </button>
          <button className="rounded-full border p-2 hover:bg-[#2E67DD] duration-500 w-36 m-2">
            {" "}
            <a href="/pages/card">Animation{" "}</a>
          </button>
          <button className="rounded-full border p-2 hover:bg-[#2E67DD] duration-500 w-36 m-2">
            {" "}
            Poster{" "}
          </button>
          <button className="rounded-full border p-2 hover:bg-[#2E67DD] duration-500 w-36 m-2">
            {" "}
            Brochure{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around m-2 md:m-[80px]">
        <div className="flex flex-wrap justify-around m-2 md:m-[10px]">
          <div className="border mt-2 sm:mt-4 md:mt-[50px] w-full sm:w-[150px] sm:h-[100px] md:w-[210px] md:h-[210px] md:m-[65px] xl:h-[220px] xl:w-[220px]">
            <input type="file" id="uploadBtn" className="hidden" />
            <label
              htmlFor="uploadBtn"
              className="font-semibold cursor-pointer relative sm:-[5px] md:p-[10px] xl:p-[20px]"
            >
              <i className="text-gray-300 p-[35px] text-center flex justify-center">
                <Image src="/images/Plus.svg" width={70} height={50} alt="" />
              </i>
              <span className="flex items-center justify-center transition-opacity duration-300 mx-auto xl:p-5">
                Create from Scratch
              </span>
            </label>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-between  shubh xl:w-[23%]  md:w-[25px] sm:w-[50px] new"
            >
              <div className="w-full">
                <Image
                  className="shadow-sm w-full h-auto"
                  src={item.Photo}
                  alt={`Item Photo ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-[20px]">
        <FooterPage />
      </div>
    </div>
  );
};

export default CardFilter;
