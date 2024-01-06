"use client ";
import React from "react";
import "@/app/globals.css";

const CategoryPage = () => {
  return (
    // <div className="flex flex-col mt-[-5px] justify-center sm:w-[550px] md:w-[800px] lg:w-[1450px] xl:w-[1520px]  sm-text-flex">
    //   <div className=" md:flex-row sm:   md:m-[30px] sm:mt-[50px] lg:m-[50px] xl:m-[100px]  mt-5 ">
    //     <div className="text-center ">
    //       <h1 className="font-bold font-poppins text-3xl sm:text-3xl-flex md:text-4xl lg:text-5xl xl:text-[40px]   text-flex">
    //         Unleash Your Creativity with V-Stock!
    //       </h1>
    //       <p className="text-xl sm:text-xl md:text-xl lg:text-[22px] xl:text-[22px] mt-3 font-normal  font-poppins">
    //         Where Ideas Come to Life - Your One Stop Destination for Stunning
    //         Visual Content
    //       </p>
    //     </div>

    //     <div className="flex justify-around flex-wrap xl:m-10 ">
    //       <div className="text-center    ">
    //         <img
    //           src="./images/c1.svg"
    //           className="object-cover  "
    //           alt="Vector Graphics"
    //         />
    //         <div className="font-poppins text-xl  font-medium leading-7 tracking-normal ">
    //           Vector Graphics
    //         </div>
    //       </div>
    //       <div className="text-center ">
    //         <img
    //           src="./images/c2.svg"
    //           className="object-cover"
    //           alt="Vector Animation"
    //         />
    //         <div className="font-poppins text-xl  font-medium leading-7 tracking-normal">
    //           Vector Animations
    //         </div>
    //       </div>
    //       <div className="text-center  ">
    //         <img src="./images/c3.svg" className="object-cover " alt="Poster" />
    //         <div className="font-poppins text-xl  font-medium leading-7 tracking-normal ">
    //           Vector Graphics
    //         </div>
    //       </div>
    //       <div className="text-center ">
    //         <img
    //           src="./images/c1.svg"
    //           className="object-cover"
    //           alt="Vector Animation"
    //         />
    //         <div className="font-poppins text-xl  font-medium leading-7 tracking-normal ">
    //           Posters
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="flex flex-col mt-[-5px] justify-center sm:w-full md:w-[800px] lg:w-[1450px] xl:w-[1520px] sm-text-flex">
    //   <div className="md:flex-row sm:md:m-[30px] sm:mt-[50px] lg:m-[50px] xl:m-[100px] mt-5">
    //     <div className="text-center">
    //       <h1 className="font-bold font-poppins text-3xl sm:text-3xl-flex md:text-4xl lg:text-5xl xl:text-[40px] text-flex">
    //         Unleash Your Creativity with V-Stock!
    //       </h1>
    //       <p className="text-xl sm:text-xl md:text-xl lg:text-[22px] xl:text-[22px] mt-3 font-normal font-poppins">
    //         Where Ideas Come to Life - Your One Stop Destination for Stunning
    //         Visual Content
    //       </p>
    //     </div>

    //     <div className="flex justify-around flex-wrap xl:m-10">
    //       <div className="text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
    //         <img
    //           src="./images/ne1.svg"
    //           className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]" style={{ borderRadius: '35px',boxShadow:' -9px 10px 25px 0px #00000040' }}
    //           alt="Vector Graphics"
    //         />
    //         <div className="font-poppins text-xl font-medium leading-10  mx-auto xl:mt-7 tracking-normal">
    //           Vector Graphics
    //         </div>
    //       </div>
    //       <div className="text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
    //         <img
    //           src="./images/ne2.svg"
    //           className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl sm:m-[160px]  xl:w-[280px]" style={{ borderRadius: '35px',boxShadow:' -9px 10px 25px 0px #00000040' }}
    //           alt="Vector Animation"
    //         />
    //         <div className="font-poppins  text-xl font-medium leading-7 mx-auto xl:mt-7 tracking-normal">
    //           Vector Animations
    //         </div>
    //       </div>
    //       <div className="text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
    //         <img
    //           src="./images/ne3.svg"
    //           className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]" style={{ borderRadius: '35px',boxShadow:' -9px 10px 25px 0px #00000040' }}
    //           alt="Poster"
    //         />
    //         <div className="font-poppins text-xl font-medium leading-7 mx-auto xl:mt-7 tracking-normal">
    //           Vector Graphics
    //         </div>
    //       </div>
    //       <div className="text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
    //         <img
    //           src="./images/ne1.svg"
    //           className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]" style={{ borderRadius: '35px',boxShadow:' -9px 10px 25px 0px #00000040' }}
    //           alt="Vector Animation"
    //         />
    //         <div className="font-poppins  text-xl font-medium leading-7 mx-auto xl:mt-7 tracking-normal">
    //           Posters
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col justify-center sm:w-full   md:w-[800px] lg:w-[1450px] xl:w-[1520px] sm-text-flex bg-[#fefaff] ">
      <div className="md:flex-row sm:md:m-4  lg:m-4 xl:m-4  sm:mt-10 md:mt-14 lg:mt-20  xl:mt-20">
      <div className="text-center flex justify-center   flex-wrap mx-4  sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 " >
         <h1 className="font-bold font-poppins text-3xl sm:text-3xl-flex md:text-4xl lg:text-5xl xl:text-[40px] text-flex">
           Unleash Your Creativity with V-Stock!
         </h1>
         <p className="text-xl sm:text-xl md:text-xl lg:text-[22px] xl:text-[22px] mt-3 font-normal font-poppins">
           Where Ideas Come to Life - Your One Stop Destination for Stunning
           Visual Content
         </p>
       </div>

        <div className="flex justify-center  flex-wrap xl:m-10 mx-4 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 ">
          <div className="text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mt-8">
            <img
              src="./images/ne1.svg"
              className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]"
              style={{
                borderRadius: "35px",
                boxShadow: " -9px 10px 25px 0px #00000040",
              }}
              alt="Vector Graphics"
            />
            <div className="font-poppins text-xl  font-medium leading-10  mx-auto xl:mt-7 mt-1 tracking-normal">
              Vector Graphics
            </div>
          </div>
          <div className="text-center w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 mt-8 mx-auto ">
            <img
              src="./images/ne2.svg"
              className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]"
              style={{
                borderRadius: "35px",
                boxShadow: " -9px 10px 25px 0px #00000040",
              }}
              alt="Vector Graphics"
            />
            <div className="font-poppins text-xl font-medium leading-10  mx-auto xl:mt-7 tracking-normal">
              Vector Animations
            </div>
          </div>
          <div className="text-center w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 mt-8 mx-auto ">
            <img
              src="./images/ne3.svg"
              className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]"
              style={{
                borderRadius: "35px",
                boxShadow: " -9px 10px 25px 0px #00000040",
              }}
              alt="Vector Graphics"
            />
            <div className="font-poppins text-xl font-medium leading-10  mx-auto xl:mt-7 tracking-normal">
              Poster
            </div>
          </div>
          <div className="text-center w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 mt-8 mx-auto ">
            <img
              src="./images/ne1.svg"
              className="object-cover  mx-auto w-full   rounded-md border  shadow-3xl  xl:w-[280px]"
              style={{
                borderRadius: "35px",
                boxShadow: " -9px 10px 25px 0px #00000040",
              }}
              alt="Vector Graphics"
            />
            <div className="font-poppins text-xl font-medium leading-10  mx-auto xl:mt-7 tracking-normal">
              Vector Animations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
