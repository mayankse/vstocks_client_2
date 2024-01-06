"use client ";
import SearchViews from "../../searchviews/page";
import "../globals.css";
import VectorSearch from "../../vectorsearch/page";
import NavbarPage from "../navbar/page";

const HeaderPage = () => {
  return (
    <div className="head text-white bg-[#2E67DD] font-popinns  px-4 rounded-bottom-curve shadow-xl h-auto   ">
      <div className="bg-[#2E67DD] ">
        <NavbarPage />
      </div>
      <SearchViews />
      <div className="mt-1">
        <VectorSearch />
      </div>
    </div>
  );
};

export default HeaderPage;
