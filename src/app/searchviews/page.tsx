"use client";

import { Search } from "@mui/icons-material";
import React from "react";

const SearchViews = () => {
  return (
    <div className="flex items-center font-poppins justify-center mt-[25px] fix">
      <div className="  inline-block w-full sm:w-3/4 md:w-1/2 lg:w-[950px] xl:w-[1070px]">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full  p-10 py-5 rounded-full inline-block placeholder:text-[#cbd9f7] placeholder:font-popinns placeholder:ml-[25px]  placeholder:text-[20px]  bg-[#5885e4] focus:outline-none "
        />
        <span className=" flex mt-[-30px] justify-end items-end relative  right-0 top-1/2 transform -translate-y-1/2 mr-6 rounded-full">
          <Search className="w-[17px]  h-[17px] mr-2 " />
        </span>
      </div>
    </div>
  );
};

export default SearchViews;
