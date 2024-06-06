import { Line } from "rc-progress";
import React from "react";
import { CurrencyPoundIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Discover = () => {
  const data = [
    {
      des: " Discover fundraisers inspired by what you care about",
      persent: 90,
      price: "135,733",
    },
    {
      des: " Discover fundraisers inspired by what you care about",
      persent: 95,
      price: "135,733",
    },
    {
      des: " Discover fundraisers inspired by what you care about",
      persent: 85,
      price: "135,733",
    },
    {
      des: " Discover fundraisers inspired by what you care about",
      persent: 80,
      price: "135,733",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-medium text-4xl py-10">
          Discover fundraisers inspired by what you care about
        </h1>
        <div className="grid lg:grid-cols-2 gap-2">
          <Link
            to={"/4"}
            className="group p-2 hover:bg-slate-100 rounded-xl cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://www.greetingsisland.com/wp-content/uploads/2021/10/Thanksgiving-featured-image-566x376.jpg"
                alt=""
                className="w-full object-cover transition ease-in delay-50  group-hover:scale-105 duration-300"
              />
            </div>
            <h1 className="p-4 text-2xl font-normal">
              Help My Family from Gaza have a Safe & Secure Life
            </h1>
            <div className="pt-10">
              <Line
                percent={70}
                strokeWidth={1}
                trailWidth={1}
                strokeColor="green"
              />
              <div className="flex items-center py-6 gap-x-2">
                <CurrencyPoundIcon className="h-6 w-6" />
                <h2 className=" font-medium">1367,758 Raised</h2>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-2 gap-2">
            {data.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="group p-2 hover:bg-slate-100 rounded-xl  cursor-pointer"
                >
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="https://www.greetingsisland.com/wp-content/uploads/2021/10/Thanksgiving-featured-image-566x376.jpg"
                      alt=""
                      className="object-fill transition ease-in delay-50 group-hover:scale-105 duration-300"
                    />
                  </div>
                  <h1 className="p-2 text-xl font-normal">{item.des}</h1>
                  <div>
                    <Line
                      percent={item.persent}
                      strokeWidth={2}
                      trailWidth={2}
                      strokeColor="green"
                    />
                    <div className="flex items-center gap-x-2">
                      <CurrencyPoundIcon className="h-6 w-6 text-gray-900" />

                      <h2 className="pt-2 font-medium">{item.price}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
