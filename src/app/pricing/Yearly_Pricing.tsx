"use client";
import Image from "next/image";

const Yearly_Pricing = () => {
  return (
    <div>
    <div className="flex justify-center flex-wrap items-center xl:m-[100px]  mt-5">
      <div className="border-slate-300 border-[3px] rounded-3xl shadow-xl flex p-4 m-10 justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  hover:border-[#3580f0]  duration-500">
          <div className="mt-8">
            <div className=" flex  ">
              <Image
                src="/images/Group 8.png"
                className="m-2"
                alt=""
                width="65"
                height="25"
              />

              <div className=" flex justify-center items-center  ">
                <h3 className="font-roboto text-[32px] font-semibold leading-10 tracking-tight ml-16 ">
                  FREE
                </h3>
              </div>
            </div>
            <div className=" m-4 mt-14 font-roboto text-base font-normal leading-6 text-center tracking-wide ">
              <p>
                We provide complete features and certainly no less competitive
                with other video applications
              </p>
            </div>
            <div className="mt-16 m-6  text-center">
              <h3 className="">
                <sup className="text-5xl   font-bold">&#8377; 0</sup>
              </h3>
            </div>
            <div className="flex justify-center mt-10 m-6">
              <button className="btn btn border rounded-full p-3 w-[145px] h-[46px] p-[8px 35px] rounded-[44px] hover:bg-[#3580f0]">
                Try For Free
              </button>
            </div>
          </div>
        </div>
        <div className="border-slate-300 border-[3px] rounded-3xl shadow-xl flex p-4 m-10 justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 hover:border-[#3580f0]  duration-500">
          <div className="">
            <div className="flex justify-end">
              <h1 className="text-white top-0  bg-indigo-500 flex justify-center items-center p-1 w-[50%] gap-10 rounded-tl-[20.45px] rounded-tr-[15.1px] rounded-br-[15.1px] rounded-bl-0">
                Recommended
              </h1>
            </div>
            <div className=" flex m-2 ">
              <Image
                src="/images/Group 6.png"
                className="m-2"
                alt=""
                width={65}
                height={25}
              />

              <div className=" flex justify-center items-center  ">
                <h3 className="font-roboto text-[32px] font-semibold leading-10 tracking-tight ml-16 ">
                  BASE
                </h3>
              </div>
            </div>
            <div className=" m-4 mt-12 font-roboto text-base font-normal leading-6 text-center tracking-wide ">
              <p>
                We provide complete features and certainly no less competitive
                with other video applications
              </p>
            </div>
            <div className="mt-16 m-10  text-center">
              <h3 className="">
                <sup className="text-5xl   font-bold">&#8377; 4999</sup>
              </h3>
            </div>
            <div className="flex justify-center m-8">
              <button className="btn btn border rounded-full p-3 w-[145px] h-[46px] p-[8px 35px] rounded-[44px] hover:bg-[#3580f0]">
                Try Basic
              </button>
            </div>
          </div>
        </div>
        <div className="border-slate-300 border-[3px] rounded-3xl shadow-xl flex p-4 m-10 justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  hover:border-[#3580f0]  duration-500">
          <div className="mt-7">
            <div className=" flex  ">
              <Image
                src="/images/Group 7.png"
                className="m-2"
                alt=""
                width={65}
                height={25}
              />

              <div className=" flex justify-center items-center  ">
                <h3 className="font-roboto text-[32px] font-semibold leading-10 tracking-tight ml-16 ">
                  PRO
                </h3>
              </div>
            </div>
            <div className=" m-4 mt-14 font-roboto text-base font-normal leading-6 text-center tracking-wide ">
              <p>
                We provide complete features and certainly no less competitive
                with other video applications
              </p>
            </div>
            <div className="mt-16 m-6  text-center">
              <h3 className="">
                <sup className="text-5xl   font-bold">&#8377; 6999</sup>
              </h3>
            </div>
            <div className="flex justify-center mt-10 m-6">
              <button className="btn btn border rounded-full p-3 w-[145px] h-[46px] p-[8px 35px] rounded-[44px] hover:bg-[#3580f0]">
                Try For Pro
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Yearly_Pricing;
