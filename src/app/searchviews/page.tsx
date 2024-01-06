"use client";

import { Search } from "@mui/icons-material";
import React from "react";

const SearchViews = () => {
  return (
    //     <div className="max-2xl: flex justify-center mt-9 ">

    //   <div className="  top-[230px] left-[calc(50%_-_px)] rounded-full bg-[#5885e4]  flex flex-row items-center justify-start gap-[620px]">
    //             <div className=" ml-8 inline-block w-[312px] shrink-0 text-[18px] text-slate-300 m-4">
    //               Search for anything
    //             </div>
    //             <img
    //               className="relative w-[30px] mr-8 h-[30px] m-4 overflow-hidden shrink-0 object-cover"
    //               alt=""
    //               src="/images/search.svg"
    //             />
    //           </div>

    // </div>

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
