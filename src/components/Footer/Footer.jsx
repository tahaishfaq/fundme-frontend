import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 border-b-2 py-14">
      <div className="max-w-7xl mx-auto grid justify-center md:justify-start gap-y-6  sm:px-10 px-6 sm:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <h2 className="text-green font-bold text-3xl cursor-pointer opacity-70 text-green-600">
            gofundme
          </h2>
        </div>
        {/*-------------------- 2nd div     ---------------------*/}
        <div className="capitalize">
          <h3 className="font-normal text-xl pb-2 ">Fundraise for</h3>
          <ul className=" flex flex-col gap-y-4 text-xl font-normal cursor-pointer opacity-50">
            <li>Medical</li>
            <li>Emergency</li>
            <li>Memorial</li>
            <li>Education</li>
            <li>charity</li>
          </ul>
        </div>
        <div className="capitalize">
          <h3 className="font-medium text-xl pb-2 ">Learn more</h3>
          <ul className=" flex flex-col gap-y-4 text-xl font-normal cursor-pointer opacity-50">
            <li>how gofundme works</li>
            <li>common question</li>
            <li>success stories</li>
            <li>supported countries</li>
            <li> charity fundraising</li>
            <li>pricing</li>
          </ul>
        </div>
        <div className="capitalize">
          <h3 className="font-normal text-xl pb-2 ">Resources</h3>
          <ul className=" flex flex-col gap-y-4 text-xl font-normal cursor-pointer opacity-50">
            <li>Help center </li>
            <li>blog</li>
            <li>goFundMe</li>
            <li>newsroom</li>
            <li>about FundMe</li>
            <li>more resource</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
