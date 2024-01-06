"use client";

import React from "react";
import "@/app/globals.css";

const Recommended_Views = () => {
  return (
    // <div className="container mx-auto bg-[#f1f4fc] ">
    //   <div className=" ">
    //     <div className="p-5 xl:m-[100px]">
    //       <div className=" mx-auto flex mt-5">
    //         <h2 className="  ml-12  sm:text-[40px] md:text-[18px] xl:text-3xl text-[#213871] font-popinns font-semibold">
    //           Recommended to You
    //         </h2>
    //       </div>
    //       <div className="flex justify-center flex-wrap p-4 md:flex lg:flex xl:flex">
    //         <div className="flex items-center item w-full mt-2 justify-around">
    //           <div className="flex justify-center items-center container mx-auto ">
    //             <img
    //               src="./images/Navratri1.svg"
    //               alt=""
    //               className="wid"
    //               width=""
    //               height=""
    //             />
    //           </div>

    //           <div className="flex justify-center items-center flex-wrap">
    //             <div className="p-4">
    //               <img src="./images/r1.svg" alt="" className="w-auto" />
    //             </div>
    //             <div className="p-4">
    //               <img src="./images/r3.svg" alt="" className="w-auto" />
    //             </div>
    //             <div className="p-4 ">
    //               <img src="./images/r2.svg" alt="" className="w-auto" />
    //             </div>
    //             <div className="p-4">
    //               <img src="./images/r4.svg" alt="" className="w-auto" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto  bg-[#f1f4fb]">
      <div className="p-5 xl:m-4">
        <div className="mx-auto xl:flex mt-2  sm:mt-5 ">
          <h2 className="xl:ml-24 text-2xl md:text-3xl lg:text-4xl  text-[#213871] font-poppins font-semibold">
            Recommended to You
          </h2>
        </div>

        <div className="flex justify-center flex-wrap container p-7 md:flex lg:flex xl:flex">
          <div className="flex items-center item w-full mt-2 justify-around">
            <div className="flex justify-center items-center xl:container  mx-4 sm:mx-16 md:mx-16  lg:mx-16 xl:mx-16">
              <img
                src="./images/Navratri1.svg"
                alt=""
                className="w-full sm:w-auto"
              />
            </div>
            <div className="flex justify-center items-center flex-wrap container  sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4">
              <div className="p-2">
                <img
                  src="./images/r1.svg"
                  alt=""
                  className="w-full sm:w-auto "
                />
              </div>
              <div className="p-2">
                <img
                  src="./images/r3.svg"
                  alt=""
                  className="w-full sm:w-auto"
                />
              </div>
              <div className="p-2">
                <img
                  src="./images/r2.svg"
                  alt=""
                  className="w-full sm:w-auto"
                />
              </div>
              <div className="p-2">
                <img
                  src="./images/r4.svg"
                  alt=""
                  className="w-full sm:w-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended_Views;
