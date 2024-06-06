import React from "react";
import doordash from "../../images/doordash-cj-zQaOOMtY-unsplash.jpg";
import doordashPdBg from "../../images/doordash-ePdBgYsfmRc-unsplash.jpg";
import doordash2 from "../../images/doordash-GlSMQq7kUF0-unsplash.jpg";
import { Line } from "rc-progress";

const CardCollection = () => {
  const data = [
    {
      id: 1,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      heading: "Medical fundraisers",
      desc1: "ULTRAMAN 2024 - A world’s first, for Childhood Cancer",
      desc2: "Care for Caolan",
      desc3: "Help Holly Get the Medical Care she needs",
    },
    {
      id: 2,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      heading: "Memorial fundraisers",
      desc1: "ULTRAMAN 2024 - A world’s first, for Childhood Cancer",
      desc2: "Care for Caolan",
      desc3: "Help Holly Get the Medical Care she needs",
    },
    {
      id: 3,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      heading: "Emergency fundraisers",
      desc1: "ULTRAMAN 2024 - A world’s first, for Childhood Cancer",
      desc2: "Care for Caolan",
      desc3: "Help Holly Get the Medical Care she needs",
    },
    {
      id: 4,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      heading: "Charity fundraisers",
      desc1: "ULTRAMAN 2024 - A world’s first, for Childhood Cancer",
      desc2: "Care for Caolan",
      desc3: "Help Holly Get the Medical Care she needs",
    },
    {
      id: 5,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      heading: "Education fundraisers",
      desc1: "ULTRAMAN 2024 - A world’s first, for Childhood Cancer",
      desc2: "Care for Caolan",
      desc3: "Help Holly Get the Medical Care she needs",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:px-10 pb-8">
        <h1 className="md:text-7xl text-3xl font-normal py-10 max-w-3xl">
          Browse fundraisers by category
        </h1>
        <p className="text-xl font-normal text-gray-600 py-4">
          People around the world are raising money for what they are passionate
          about.
        </p>
        <div className="pt-4">
          <button className=" bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded-xl">
            Start a GoFundMe
          </button>
        </div>
      </div>
      {data.map((item) => {
        return (
          <div className="py-16 border-t-[1px] border-gray-400">
            <h1 className="pb-6 text-3xl">{item.heading}</h1>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group hover:bg-gray-100 rounded-2xl p-2 cursor-pointer ">
                <div className="h-52 overflow-hidden rounded-2xl">
                  <img
                    src={item.imgsrc}
                    alt=""
                    className="h-56 w-full object-cover rounded-2xl group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="py-3 text-xl">{item.desc1}</p>
                  <Line
                    percent={80}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="green"
                  />
                </div>
              </div>

              <div className="group hover:bg-gray-100 rounded-2xl p-3 cursor-pointer">
                <div className="h-52 overflow-hidden rounded-2xl">
                  <img
                    src={item.imgsrc2}
                    alt=""
                    className="h-56 w-full object-cover rounded-2xl group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="py-3 text-xl">{item.desc2}</p>
                  <div>
                    <Line
                      percent={90}
                      strokeWidth={1}
                      trailWidth={1}
                      strokeColor="green"
                    />
                  </div>
                </div>
              </div>
              <div className="group hover:bg-gray-100 rounded-2xl p-3 cursor-pointer">
                <div className="h-52 overflow-hidden rounded-2xl">
                  <img
                    src={item.imgsrc3}
                    alt=""
                    className=" w-full object-cover  group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="py-3 text-xl">{item.desc3}</p>
                  <Line
                    percent={60}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="green"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCollection;
