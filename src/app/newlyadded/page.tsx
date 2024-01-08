"use client";
const NewlyAdded = () => {
  return (
    // <div className="max-2xl   xl:mt-[-90px] text-center sm:mt-32 md:mt-[32px] mx-4 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16">
    //   <div className="sm:m-[40px] md:m-[40px] lg:m-[30px] xl:m-[100px]  sm:mt-[30px] md:mt-[20px]">
    //     <div className="flex justify-between  mx-auto w-[91] sm:mt-[40px] md:mt-[20px]">
    //       <h3 className="ml-10 font-semibold text-2xl">Newly Added</h3>
    //       <a href="/pages/card" className="text-black mr-10">
    //         View all
    //       </a>
    //     </div>

    //     <div className="flex justify-around  mx-auto flex-wrap mt-6">
    //       <div className="p-2">
    //         <img src="./images/Newly1.svg" alt="" className="newly h-[200]" />
    //       </div>
    //       <div className="p-2">
    //         <img src="./images/Newly2.svg" alt="" className="newly h-[200]" />
    //       </div>
    //       <div className="p-2">
    //         <img src="./images/Newly3.svg" alt="" className="newly h-[200]" />
    //       </div>
    //       <div className="p-2">
    //         <img
    //           src="./images/Newly4.svg"
    //           alt=""
    //           className="newly w-[250] h-[20]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className=" flex flex-col justify-center font-poppins sm:w-full md:w-[800px] xl:mt-[-25px] lg:w-[1450px] xl:w-[1500px] sm-text-flex">
      <div className="md:flex-row sm:md:m-4  lg:m-4 xl:m-4 ">
        <div className="flex justify-between mx-4 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16  ">
          <h3 className="xl:ml-10 font-semibold text-2xl">Newly Added</h3>
          <a href="/pages/card" className="text-black xl:mr-10">
            View all
          </a>
        </div>

        <div className="flex justify-around xl:mt-[-0px]  flex-wrap xl:m-10 mx-4 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 ">
          <div className="text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mt-6">
            <img
              src="./images/Newly1.svg"
              className="object-cover  mx-auto w-full     xl:w-[280px]"
              alt="Vector Graphics"
            />
          </div>
          <div className="text-center w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 mt-6 mx-auto ">
            <img
              src="./images/Newly2.svg"
              className="object-cover  mx-auto w-full  xl:w-[280px]"
              alt="Vector Graphics"
            />
          </div>
          <div className="text-center w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 mt-6 mx-auto ">
            <img
              src="./images/Newly3.svg"
              className="object-cover  mx-auto w-full  xl:w-[280px]"
              alt="Vector Graphics"
            />
          </div>
          <div className="text-center w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 mt-6 mx-auto ">
            <img
              src="./images/Newly4.svg"
              className="object-cover  mx-auto w-full xl:w-[280px]"
              alt="Vector Graphics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewlyAdded;
