import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Role = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div>
        <h1 className="text-3xl font-normal py-4">Fundraise for anyone</h1>
        {/*------------------- first Section  -----------------*/}
        <div className="group cursor-pointer border-b-[1px] py-10 border-gray-400">
          <div className=" flex justify-between items-center">
            <h1 className="md:text-5xl text-3xl font-medium py-4">Your Self</h1>
            <div>
              <span className="rounded-full  text-gray-500  ring-1  px-3 py-3 flex justify-center items-center group-hover:bg-black group-hover:text-white ring-gray-500">
                <ChevronRightIcon className="h-4 w-4 " />
              </span>
            </div>
          </div>

          <p className="text-xl font-normal text-gray-500">
            Found are deliver to bank account for your own use
          </p>
        </div>
        {/*------------------- second Section  -----------------*/}
        <div className="group cursor-pointer border-b-[1px] py-10 border-gray-400">
          <div className=" flex justify-between items-center">
            <h1 className="md:text-5xl text-3xl font-medium py-4">
              Friends and Family
            </h1>
            <div>
              <span className="rounded-full  text-gray-500  ring-1  px-3 py-3 flex justify-center items-center group-hover:bg-black group-hover:text-white ring-gray-500">
                <ChevronRightIcon className="h-4 w-4 " />
              </span>
            </div>
          </div>

          <p className="text-xl font-normal text-gray-500">
            Found are deliver to bank account for your own use
          </p>
        </div>
        {/*------------------- Third Section  -----------------*/}
        <div className="group cursor-pointer border-b-[1px] py-10 border-gray-400">
          <div className=" flex justify-between items-center">
            <h1 className="md:text-5xl text-3xl font-medium py-4">Charity</h1>
            <div>
              <span className="rounded-full  text-gray-500  ring-1  px-3 py-3 flex justify-center items-center group-hover:bg-black group-hover:text-white ring-gray-500">
                <ChevronRightIcon className="h-4 w-4 " />
              </span>
            </div>
          </div>

          <p className="text-xl font-normal text-gray-500">
            Found are deliver to bank account for your own use
          </p>
        </div>
      </div>
    </div>
  );
};

export default Role;
