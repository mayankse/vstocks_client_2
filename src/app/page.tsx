"use client";
import HeaderPage from "./shared/header/page";
import CategoryPage from "./category/page";
import EditOwn from "./editownviews/page";
import NewlyAdded from "./newlyadded/page";
import Promotion_Views from "./promotion/page";
import Recommended_Views from "./recommended/page";
import ClientReview_Views from "./client_review/page";
import FooterPage from "./shared/footer/page";
import "@/app/globals.css";


export default function Home() {
  useEffect(()=>
  {
    document.title="VSTOCKS"
  },[]);
  return (
    <div className="bg-[#fefaff]">
      <div className="">
        <HeaderPage />
      </div>

      <div className="">
        <CategoryPage />
      </div>
      <div className="mt-[40px] ">
        <NewlyAdded />
      </div>
      <div className=" mt-[40px]">
        <EditOwn />
      </div>
      <div className="mt-[45px]">
        <Promotion_Views />
      </div>
      <div>
        <Recommended_Views />
      </div>
      <div>
        <ClientReview_Views />
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
   
  );
}
