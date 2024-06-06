import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
const TrustBuilder = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="bg-green-900 py-28 text-white px-4" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-semibold text-[2.5rem] max-w-2xl pb-4"
            ta-aos="zoom-in"
          >
            We've got you covered.
          </h2>
          <p className="font-semibold md:text-4xl text-2xl max-w-4xl pb-4">
            GoFundMe is a trusted leader in online fundraising. With simple
            pricing and a team of Trust & Safety experts in your corner, you can
            raise money or make a donation with peace of mind.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrustBuilder;
