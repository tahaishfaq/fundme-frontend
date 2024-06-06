import React from "react";
import HowToStart from "./HowToStart";

const Charity = () => {
  return (
    <div className="">
      {/*------------------Hero Section ----------------------*/}
      <div className=" bg-[#fbf8f6] py-20">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2">
          <div>
            <div className="p-14 max-w-3xl rounded-3xl md:absolute top-24 left-11  bg-white">
              <h1 className="text-3xl md:text-5xl  font-semibold pb-10">
                Start a Charity Fundraiser on GoFundMe
              </h1>
              <p className="text-2xl">
                Make a difference for your favourite charity by starting a
                GoFundMe for your birthday, a marathon, or just because you
                care.{" "}
              </p>
              <div className=" mt-10">
                <button className=" bg-green-700 hover:bg-green-800 py-3 px-6 text-white font-bold rounded-xl">
                  Start a GoFundMe
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://www.greetingsisland.com/wp-content/uploads/2021/10/Thanksgiving-featured-image-566x376.jpg"
              alt=""
              className="h-[600px] rounded-2xl -z-10"
            />
          </div>
        </div>
        <div className="py-16 flex justify-center">
          <h1 className="text-3xl md:text-4xl text-center font-medium py-8  max-w-5xl">
            Everything you need to help your fundraiser succeed is here. Start
            fundraising on GoFundMe today
          </h1>
        </div>
      </div>
      <HowToStart />
    </div>
  );
};

export default Charity;
