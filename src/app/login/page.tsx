"use client";
import FooterPage from "../footer/page";
import HeaderPage from "../shared/header/page";
import NavbarPage from "../navbar/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PageLogin = () => {
  useEffect(()=>
  {
    document.title="Login";
  })
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const [isFocused, setFocused] = useState(false);

  const handleFocusnew = () => {
    setFocused(true);
  };

  const handleBlurnew = () => {
    setFocused(false);
  };

  return (
    <div>
      <div className=" bg-[#2e67dd] ">
        <NavbarPage />
      </div>
      <div className="   ">
        <div className="flex justify-center flex-col  lg:flex-row  ">
          <div className=" bg-[#2c62d3] min-h-[500px] hidden xl:flex    items-center justify-center  w-full lg:w-[980px]">
            <div className="">
              <div className="w-full xl:ml-10">
                <Image
                  src="/images/login2.svg"
                  alt=""
                  objectFit="contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="flex w-full xl:w-1/7 justify-end lg:justify-center">
            <div className="w-full max-w-5xl p-4 xl:ml-8 rounded-xl ">
              <h1 className="text-center p-2 m-3 text-[45px] font-bold text-[#2e67dd]">
                Login/Signup
              </h1>

              {/* Social Media Buttons */}
              <div className="flex justify-center items-center xl:p-3">
                <button className="text-red-500 m-3 ">
                  <img
                    src="/images/google.svg"
                    className="border-[2px] border-solid border-[#878787] rounded-full"
                    alt=""
                    width={50}
                    height={5}
                  />
                </button>
                <button className="text-blue-500 m-6   ">
                  <img
                    src="/images/facebook1.svg"
                    className="   "
                    width={50}
                    height={5}
                    alt=""
                  />
                </button>
              </div>

              {/* OTP Section */}
              <Link
                href=" "
                className="font-popinns font-semibold  flex p-2 justify-center no-underline text-lg"
              >
                or continue with OTP
              </Link>

              <div className="m-5 p-6   justify-center ">
                <div className="flex justify-center rounded-3xl ">
                  {/* <div className="md:mt-8 sm:mt-0 md:p-2 sm:p-3 lg:p-3 p-2 xl:p-2 flex items-center xl:w-[450px] justify-center rounded-md bg-[#f2f2f2]">
                    <input
                      type="text"
                      className=" w-full lg:w-[100%] p-3 bg-[#f2f2f2]  xl:p-3 placeholder:text-[17px] placeholder:font-normal "
                      placeholder="Mobile Number"
                    />
                    <div className="   bg-[#f2f2f2]">
                      <button className=" rounded-lg w-[90px] p-3 bg-[#e7e6f2] text-[#595959] font-medium">
                        Get OTP
                      </button>
                    </div>
                  </div> */}

                  <div className="md:mt-8 sm:mt-0 md:p-2 sm:p-3 lg:p-3 p-2 xl:p-2 flex items-center xl:w-[450px] justify-center rounded-md bg-[#f2f2f2]">
                    <input
                      type="text"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className={`w-full lg:w-[100%] p-3 bg-[#f2f2f2] xl:p-3 placeholder:text-[17px] placeholder:font-normal ${
                        isInputFocused ? "focus:bg-[#ffffff]" : ""
                      }`}
                      placeholder="Mobile Number"
                    />
                    <div className="bg-[#f2f2f2]">
                      <button
                        className={`rounded-lg w-[90px] p-3 text-[#595959] font-medium ${
                          isInputFocused
                            ? "bg-[#5e5cee] text-white hover:bg-[#5e5cee]"
                            : "bg-[#e7e6f2]  text-[#595959]"
                        }`}
                      >
                        Get OTP
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center xl:mt-8">
                  <div className=" sm:mt-0 md:p-2 sm:p-3 lg:p-3 p-2 mt-8 xl:m-1 xl:p-2 flex item-center w-[450px] justify-center rounded-md bg-[#f2f2f2]">
                    <input
                      type="text"
                      onFocus={handleFocusnew}
                      onBlur={handleBlurnew}
                      className={`w-full lg:w-[100%] p-3 bg-[#f2f2f2] xl:p-3 placeholder:text-[17px] placeholder:font-normal ${
                        isFocused ? "focus:bg-[#ffffff]" : ""
                      }`}
                      placeholder="Enter 6 Digit OTP here"
                    />
                  </div>
                </div>
              </div>

              {/* Verify Button */}
              <div className="xl:mt-2 xl:p-5 text-center">
                <button
                  className={`rounded-full text-[18px] w-[280px] p-5 text-[#595959] font-medium ${
                    isFocused
                      ? "bg-[#5e5cee] text-white hover:bg-[#5e5cee]"
                      : "bg-[#abc2f1]  text-[#ffff]"
                  }`}
                >
                  Verify and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="xl:mt-[-50px]">
        <FooterPage />
      </div>
    </div>
  );
};

export default PageLogin;
