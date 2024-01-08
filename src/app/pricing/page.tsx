"use client";
import React, { useState, useEffect } from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import FooterPage from "../shared/footer/page";
import Yearly_Pricing from "./Yearly_Pricing";
import Monthly_Pricing from "./Monthly_Pricing";
import NavbarPage from "../shared/navbar/page";
import {} from "@emotion/styled";
import HeaderPage from "../shared/header/page";
import "@/app/globals.css";

const PricingPage = () => {
  useEffect(()=>
  {
    document.title="Pricing"
  })
  const [value1, setValue1] = useState<boolean>(true);

  const handleSwitchChange = () => {
    setValue1(!value1);
  };

  return (
    <div className="">
      <div className="bg-[#2E67DD]">
        <NavbarPage />
      </div>
      <div className="flex justify-center  items-center text-center xl:mt-[100px]">
        <div>
          <div className="xl:mb-2 sm:px-4 md:px-8 lg:px-16 xl:px-16 ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl m-[10px] font-medium font-popinns text-center">
              Our Product Plans
            </h2>
          </div>

          <div className="xl:mt-4  ">
            <p className="text-slate-600 xl:text-[23px] font-popinns font-normal">
              All plans include video editing features, unlimited 
              storage, unlimited project files, and auto captions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[25px]">
        <span className="switch mt-[30px] ">
          <input
            type="checkbox"
            id="switcher"
            checked={value1}
            onChange={handleSwitchChange}
          />
          <label htmlFor="switcher"></label>
        </span>
      </div>

      <div className="">
        {value1 ? <Monthly_Pricing /> : <Yearly_Pricing />}
      </div>

      <div className="">
        <FooterPage />
      </div>
    </div>
  );
};

export default PricingPage;
