"use client";
import { Box, List } from "@mui/material";
import {
  Dehaze,
  ListAlt,
  PermIdentity,
  PermIdentityOutlined,
  Person,
  PersonOutline,
  Search,
} from "@mui/icons-material";
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
    

    <div className=" container mx-auto sm:p-10 md:p-10 lg:p-12  xl:p-12 ">
      <nav className="flex  justify-between items-center w-full     ">
        <div className="xl:ml-16  mt-4  sm:mt-5 md:mt-1 lg:mt-1 xl:mt-0">
          <a
            href="/"
            className="text-[40px] font-bold ml-5 sm:ml-2 md:ml-0 lg:ml-0 xl:ml-5  text-white "
          >
            VStocks
          </a>
        </div>
        <div className="lg:hidden">
          <div className=" xl:hidden mr-5 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-5 mt-5  ">
            <React.Fragment>
              <DehazeOutlined
                // variant="outlined"
                // // color="white"
                // className=" text-gray-800 h-4 w-5 "
                onClick={() => setOpen(true)}
              ></DehazeOutlined>
              <Drawer
                open={open}
                onClose={() => setOpen(false)}
                sx={{ backgroundColor: "#538CFD", animationDuration: "1s" }}
              >
                {/* <Box
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
                  <ModalClose
                    id="close"
                    sx={{ position: "initial", color: "red" }}
                  />
                </Box> */}
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
                <List className="text-[#2e67dd] mt-[-20px] ">
                  <ListItemButton
                    sx={{ fontWeight: "lg", backgroundColor: "" }}
                    className="ml-5 font-medium mt-[-10px] hover:bg-indigo-100 m-1 p-2 text-[17px]"
                  >
                    <a href="/">Home</a>
                  </ListItemButton>
                  <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium ">
                    Template{" "}
                  </ListItemButton>
                  <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium ">
                    <a href="/animation">My Project</a>
                  </ListItemButton>
                  <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium ">
                    <a href="/pricing">Premium</a>
                  </ListItemButton>
                  <ListItemButton className=" hover:bg-indigo-100  m-1 p-2 text-[17px] ml-5 font-medium ">
                    <span className="text-indigo-500">
                      <a href="/login" className={buttonStyle.textColor}>
                        {/* <img
                       src="/images/Vector (2).svg"
                       alt=""
                       className=" bg-transparent inline-block font-black"
                     /> */}
                        <span className=" text-indigo-500 ">Login</span>
                      </a>
                    </span>
                  </ListItemButton>
                </List>
              </Drawer>
            </React.Fragment>
          </div>
        </div>
        <div className="hidden lg:flex xl:flex justify-evenly xl:space-x-28 md:space-x-8">
          <a href="/" className=" text-white font-medium text-[25px] xl:ml-8">
            Home
          </a>
          <div className="group relative">
            <a href="#" className="text-white text-[24px] font-medium  flex">
              Templates
              <span className="flex">
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
              </span>
            </a>
            <div className="xl:hidden group-hover:block absolute left-0 mt-2 space-y-2  rounded-lg shadow-lg">
              <div className="  xl:ml-[-265px] relative xl:w-[760px] xl:h-[350px] xl:flex hidden dropDownArror p-6  flex-col items-start justify-center    border-[#5e5cee] border shadow-md  ">
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
          </div>
          <a
            href="/animation"
            className="text-white font-medium text-[23px]">
            My Projects
          </a>
          <a
            href="/pricing"
            className="text-white font-medium text-[23px] xl:mr-8">
            Premium
          </a>
        </div>
        <div className="hidden lg:flex mr-1 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-10">
          <a href="/login" className="flex items-center ">
            <button
              type="submit"
              className="btn border text-[22px] rounded-full btn-outline-success px-8 relative xl:ml-2 py-2"
            >
              <PermIdentityOutlined className="relative m-1" />
              <span className="font-poppins font-medium">Login</span>
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
