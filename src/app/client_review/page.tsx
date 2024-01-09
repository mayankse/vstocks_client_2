"use client";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const ClientReview_Views = () => {
  return (
    <div className="container mt-20  ">
      <div className=" mx-auto flex flex-col items-center ">
        <div className="text-center  ">
          <p className="text-[#2E67DD] text-[20px] tracking-widest font-roman font-bold leading-  text-center">
            TESTIMONIALS
          </p>
          <h2 className="text-dark font-bold sm:text-[39px] xl:text-[42px] mt-1 text-[#252468]">
            What our clients say about us.
          </h2>
          <div className="flex flex-wrap justify-center items-center xl:m-[30px]">
            <div className="bg-[#dedafc] rounded-full p-3 hidden xl:flex  hover:bg-[#717fa2] transition-all duration-200  ">
              <KeyboardArrowLeft className="hover:text-white" />
            </div>
            <div className="border-2 rounded-2xl border-blue-600 m-4 p-2  max-w-sm">
              <div className="p-3">
                <div className="flex justify-center mt-5">
                  <img src="./images/men1.png" alt="" className="w-32"  />
                </div>
                <div className="  text-[#001a5b] font-semibold mt-4 text-[20px]">
                  James Pattinson
                </div>
                <div className="text-danger  m-2">
                  <span className="">
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/Star 5.svg"
                      className="inline-block"
                      alt=""
                    />
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-sans">
                    “Lobortis leo pretium facilisis amet nisl at nec.
                    Scelerisque risus tortor donec ipsum consequat semper
                    consequat adipiscing ultrices.”
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-2xl border-blue-600 m-4 p-2  max-w-sm">
              <div className="p-3">
                <div className="flex justify-center mt-5">
                  <img src="./images/men2.png" alt="" className="w-32" />
                </div>
                <div className="  text-[#001a5b] font-semibold mt-4 text-[20px]">
                  James Pattinson
                </div>
                <div className="text-danger  m-2">
                  <span className="">
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-sans">
                   Vestibulum, cum nam non amet consectetur morbi aenean
                    condimentum eget. Ultricies integer nunc neque accumsan
                    laoreet. Viverra nibh ultrices.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-2xl border-blue-600 m-4 p-2  max-w-sm">
              <div className="p-3">
                <div className="flex justify-center mt-5">
                  <img src="./images/men3.png" alt="" className="w-32" />
                </div>
                <div className="  text-[#001a5b] font-semibold mt-4 text-[20px]">
                  James Pattinson
                </div>
                <div className="text-danger  m-2">
                  <span className="">
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                    <img
                      src="/images/star.svg"
                      className="inline-block"
                      alt=""
                    />
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-sans">
                    “Ut tristique viverra sed porttitor senectus. A facilisis
                    metus pretium ut habitant lorem. Velit vel bibendum eget
                    aliquet sem nec, id sed. Tincidunt.”
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#dedafc] rounded-full p-3 hidden xl:flex text-[50px] hover:bg-[#717fa2]  duration-500 transition-all ">
              <KeyboardArrowRight  className="text-[50px] hover:text-white "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview_Views;
