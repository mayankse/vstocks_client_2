"use client";
import { Box ,List } from  "@mui/material";
import { Dehaze, ListAlt, Search } from "@mui/icons-material";
import { ModalClose } from "@mui/joy";
import "@/app/globals.css";


import {
  Drawer,
  IconButton,
  Input,
  ListItemButton,
  Menu,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DehazeOutlined } from "@mui/icons-material";

const NavbarPage = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [click, setClick] = useState(false);
  
  const expClick = () => {
    setClick(true);
  };
  const colClick = () => {
    setClick(false);
  };

  const [drop, setDrop] = useState(false);

  const handleDropdownClick = () => {
    setDrop(!drop);
  };
  const [buttonColor, setButtonColor] = useState("bg-transparent");

  // const handleButtonClick = () => {
  //   // Toggle the button color when clicked
  //   setButtonColor((prevColor) =>
  //     prevColor === 'bg-white' ? 'bg-transparent' : 'bg-white'

  //   );

  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "bg-transparent",
    textColor: "text-white",
  });

  const handleButtonClick = () => {
    setButtonStyle((prevStyle) => ({
      backgroundColor:
        prevStyle.backgroundColor === "bg-transparent"
          ? "bg-white"
          : "bg-transparent",
      textColor:
        prevStyle.textColor === "text-white" ? "text-black" : "text-white",
      fontColor:
        prevStyle.backgroundColor == "text-transparent"
          ? "text-black"
          : "text-transparent",
    }));
  };
  return (
    <div className=" font-poppins ">
      <nav className="w-full p-[35px] font-poppins h-auto border-gray-200 dark:bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:p-5">
          <a href="/" className="flex p-3 items-center  ">
            <span className="self-center text-[40px] mb-2 font-semibold whitespace-nowrap dark:text-white">
              Vstocks
            </span>
          </a>
          {/* <div className="flex md:order-2  md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-white"
              aria-controls="navbar-cta"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div> */}

          <div className="ani xl:hidden flex p-2 ">
          <React.Fragment >
            
            <DehazeOutlined
              // variant="outlined"
              // // color="white"
              // className=" text-gray-800 h-4 w-5 "
              onClick={() => setOpen(true)}
            ></DehazeOutlined>
            <Drawer  open={open} onClose={() => setOpen(false)} sx={{ backgroundColor:'#538CFD', animationDuration:'1000' }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: "150px",
                  mt: 1,
                  mr: 2,
                }}

              >
                <Typography
                  component="label"
                  htmlFor="close"
                  fontSize="sm"
                  fontWeight="lg"
                  className="text-[#2e67dd]"
                  sx={{ cursor: "pointer" }}
                >
                  Close
                </Typography>
                <ModalClose id="close "    sx={{ position: "initial",color:'red'  }} />
              </Box>
              <Input 
                // size="sm"
                placeholder="Search"
                // variant="plain"       
                // endDecorator={<Search  />}
                slotProps={{
                  input: {
                    "aria-label": "Search anything",
                    
                  },
                }}
                sx={{
                  m: 3,
                  borderRadius: 0,
                  borderBottom: "2px solid",
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": {
                    borderColor: "neutral.outlinedHoverBorder",
                  },
                  "&::before": {
                    border: "1px solid var(--Input-focusedHighlight)",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
              <List className="text-[#2e67dd] mt-[-20px]"
                // size="lg"
                // component="nav"
                // sx={{
                //   flex: "none",
                //   fontSize: "xl",
                //   "& > div": { justifyContent: "center" },
                // }}
              >
                <ListItemButton sx={{ fontWeight: "lg",backgroundColor:'' }} className="ml-5 font-medium mt-[-10px] hover:bg-indigo-100 m-1 p-2 text-[17px]"><a href="/" >Home</a></ListItemButton>
                <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium ">Template </ListItemButton>
                <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium "><a href="/">My Project</a></ListItemButton>
                <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium "><a href="/pricing">Premium</a></ListItemButton>
                <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium "><span className="text-indigo-500">
                  <a href="/login" className= {buttonStyle.textColor}>
                    {/* <img
                      src="/images/Vector (2).svg"
                      alt=""
                      className=" bg-transparent inline-block font-black"
                    /> */}
                    <span className=" text-indigo-500 ">Login</span>
                  </a></span>
                </ListItemButton>
              </List>
            </Drawer>
            </React.Fragment>
          </div>

          <div
            className={`items-center justify-between w-full md:block md:w-auto md:order-1 ${
              mobileMenuOpen ? "block" : "hidden"
            } md:flex-row`}
            id="navbar-cta"
          >
            <ul className="flex xl:ml-20 flex-col font-medium xl:mt-3.5 p-5 md:p-0 mt-4 rounded-lg  md:space-x-20  md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block  py-2 px-4 text-[22px] xl:ml-5 font-light font-poppins text-white rounded md:bg-transparent  md:dark:bg-transparent md:p-0  bg-blue-700  "
                  aria-current="page">
                  Home
                </a>
              </li>

              <li className="group relative">
                <a
                  href="#"
                  className=" text-white px-4 py-2 xl:ml-8 rounded-lg text-[22px] inline-flex  items-center group font-poppins font-normal md:p-0  hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  type="button"
                  onClick={() => setDrop(!drop)}
                >
                  Template
                  <svg
                    className=" ml-2   transition-transform duration-300 transform group-hover"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </a>
                <div
                  className={`text-base list-none divide-gray-100 rounded absolute duration-300 opacity-0 ${
                    drop ? "opacity-100" : "opacity-0"
                  }`}
                  id="navbar"
                >
                  <div className="bg-[#ffffff]  xl:ml-[-265px] relative xl:w-[760px] xl:h-[350px] xl:flex hidden dropDownArror p-6  flex-col items-start justify-center    border-[#5e5cee] border shadow-md  ">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 rounded-[50px] justify-center ml-[60px]  lg:gap-[53px] text-lg text-black">
                      <div className="shrink-0 flex flex-col items-start justify-center lg:gap-[10px] mb-4 lg:mb-0">
                        <div className="relative">Dussehra</div>
                        <div className="relative">Diwali</div>
                        <div className="relative">Christmas</div>
                        <div className="relative">Pongal</div>
                        <div className="relative inline-block lg:w-[58.5px]">
                          Holi
                        </div>
                        <div className="relative inline-block lg:w-[79.5px]">
                          Ugadhi
                        </div>
                        <div className="relative inline-block lg:w-[93px]">
                          Sankranthi
                        </div>
                      </div>

                      <div className="shrink-0 flex flex-col items-start justify-start lg:gap-[10px] mb-4 lg:mb-0">
                        <div className="relative">Education</div>
                        <div className="relative">Health</div>
                        <div className="relative">Jewellery</div>
                        <div className="relative">Real estate</div>
                        <div className="relative inline-block lg:w-[58.5px]">
                          Retail
                        </div>
                        <div className="relative inline-block lg:w-[58.5px]">
                          Travel
                        </div>
                        <div className="relative inline-block lg:w-[79.5px]">
                          Others
                        </div>
                      </div>

                      <div className="shrink-0 flex flex-col items-start justify-start lg:gap-[10px] mb-4 lg:mb-0">
                        <div className="relative">Birthday</div>
                        <div className="relative">Wedding</div>
                        <div className="relative">Invitation</div>
                        <div className="relative">House warming</div>
                        <div className="relative inline-block lg:w-[75px]">
                          Festival
                        </div>
                        <div className="relative inline-block lg:w-[95px]">
                          Occasion
                        </div>
                      </div>

                      <div className="shrink-0 flex flex-col items-start justify-start lg:gap-[10px] mb-4 lg:mb-0">
                        <div className="relative">Birthday</div>
                        <div className="relative">Wedding</div>
                        <div className="relative">Invitation</div>
                        <div className="relative">House warming</div>
                        <div className="relative inline-block lg:w-[75px]">
                          Festival
                        </div>
                        <div className="relative inline-block lg:w-[95px]">
                          Occasion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-[22px]  xl:ml-3 font-normal font-popinns  md:bg-transparent  md:dark:bg-transparent  md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Projects
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block py-2 px-3 xl:ml-2 text-[22px]  font-normal font-poppins text-white rounded md:bg-transparent  md:dark:bg-transparent                                        md:p-0  bg-blue-700  "
                  aria-current="page"
                >
                  Premium
                </a>
              </li>

              <li className="group ">
                <button
                  type="button"
                  className={`inline-block  w-[150px] h-[50px] xl:ml-10 d-flex p-[8px 35px] rounded-[44px] border border-solid  border-white ${buttonStyle.backgroundColor} ${buttonStyle.textColor} transition-colors duration-300 ease-in-out`}
                  onClick={handleButtonClick}
                >
                  <a href="/login" className={buttonStyle.textColor}>
                    <img
                      src="/images/Vector (2).svg"
                      alt=""
                      className="inline-block font-white"
                    />
                    <span className="ml-2 text-[20px]">Login</span>
                  </a>   
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
