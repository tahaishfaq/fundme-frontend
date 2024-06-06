import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
const Covered = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="bg-green-50 py-28 px-4" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-normal md:text-4xl text-xl max-w-2xl pb-4">
            Fundraising on GoFundMe is easy, powerful and trusted.
          </h2>
          <p className="max-w-4xl leading-8 text-xl text-gray-800">
            Get what you need to help your fundraiser succeed on GoFundMe,
            whether you’re raising money for yourself, friends, family or
            charity. With no fee to start, GoFundMe is the world’s leading
            crowdfunding platform – from memorial tributes and funerals to
            medical emergencies and charities. Whenever you need help, you can
            ask here.
          </p>
          <p className="max-w-4xl leading-8 text-xl text-gray-800">
            Still have questions? Learn more about how GoFundMe works.
          </p>
        </div>
      </div>
    </>
  );
};

export default Covered;
