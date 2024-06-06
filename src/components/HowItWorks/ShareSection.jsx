import React from "react";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const ShareSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="px-8 grid md:grid-cols-3 justify-center gap-y-6">
        <div className="flex flex-col items-end ">
          <div className="flex items-center gap-x-4">
            <ShieldCheckIcon className="h-6 w-6" />

            <h2 className="text-xl font-semibold py-6">Share with friends</h2>
          </div>
          <div className=" pl-10">
            <ol className="space-y-3 list-disc">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li>Watch a video tutorial</li>
            </ol>
          </div>
        </div>
        {/*----------------- Column 2 --- --------------*/}
        <div className="flex flex-col items-end  ">
          <div className="flex items-center gap-x-4">
            <UserPlusIcon className="h-6 w-6 " />
            <h2 className="text-xl font-semibold py-6">Manage donations</h2>
          </div>
          <div>
            <ol className="space-y-3  list-disc pl-6">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li>Watch a video tutorial</li>
            </ol>
          </div>
        </div>
        {/*----------------- Column 3--- --------------*/}

        <div className="flex flex-col items-end  ">
          <div className="flex items-center gap-x-4">
            <FunnelIcon className="h-6 w-6" />

            <h2 className="text-xl font-semibold py-6">
              Start your fundraiser
            </h2>
          </div>
          <div>
            <ol className="space-y-3 list-disc pl-6">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li>Watch a video tutorial</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className=" bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded-xl">
          Start a GoFundMe
        </button>
      </div>
    </div>
  );
};

export default ShareSection;
