import { Line } from "rc-progress";
import React from "react";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  UserGroupIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";

const DetailPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="font-semibold text-[2.5rem]  max-w-2xl pb-4">
        PAL Humanity Initiative
      </h1>
      <div className=" grid lg:grid-cols-3 gap-x-6 gap-y-6">
        {/*------------   Detial image Section    -----------*/}
        <div className=" lg:col-span-2">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://www.greetingsisland.com/wp-content/uploads/2021/10/Thanksgiving-featured-image-566x376.jpg"
              alt=""
              className="w-full object-cover transition ease-in delay-50  group-hover:scale-105 duration-300"
            />
          </div>
          <div className="px-6">
            <div className="text-[#c5912c] flex items-center gap-x-2 py-4 px-2">
              <UserGroupIcon className="h-6 w-6 " />
              <p>Team fundraiser</p>
            </div>
            <p className="py-6">
              PAL Humanity and Operation Olive Branch are organising this
              fundraiser in aid of Aaser Elhalawany.
            </p>
            <div>
              <div className="border-b-[1px] border-t-[1px] py-4 border-gray-400">
                <button className="px-4 py-1 rounded-full text-sm flex items-center space-x-2 text-green-900 font-semibold border-[1px] border-green-900 bg-green-100 hover:bg-green-200 cursor-pointer">
                  <ShieldCheckIcon className="h-5 w-5" />
                  <span>Donation Protected</span>
                </button>
              </div>

              <div>
                <h2 className="text-2xl font-medium py-5">Updates (5)</h2>
                <p className="py-3">
                  <strong>Yesterday</strong> by PAL Humanity, Organiser
                </p>
                <p className="pb-4 text-sm">
                  THANK YOU for meeting yet another goal and it came just in
                  time as we are almost out of medications so we have have
                  ordered a second shipment already. Some families travel quite
                  far to reach us so if they have regular medications we try to
                  give them as much as we can so they will last. Because of your
                  consistent support we are not yet worried about rationing
                  this, we cannot thank you more for that!
                </p>
                <p className="text-sm pb-10">
                  Today we met with this family again as we treat their son with
                  Cohen Syndrome, they have nothing and are quite vulnerable. We
                  hope you will bless them with some support if you feel called
                  to do so. Mom doesn't have internet at all and they had no
                  support with their campaign until they finally mentioned it to
                  us today. Our friends at OOB have added them to a "heater" and
                  we hope you'll join them. Their GFM:
                  https://gofund.me/9337952f
                </p>
              </div>
            </div>
            {/*------------   Reviews Section    -----------*/}
            <Team />
            {/*------------   Reviews Section    -----------*/}
            <Reviews />
          </div>
        </div>
        {/*------------   Detials trnsaction  Section    -----------*/}
        <div className="p-6 col-span-full lg:col-span-1 shadow-gray-300 hadow-inherit shadow-xl h-[600px] rounded-2xl">
          <div>
            <div className=" flex justify-between items-center py-3">
              <span className="text-2xl font-medium ">$571,403</span>
              <p>USD raised of $650,000 target</p>
            </div>
            <Line
              percent={70}
              strokeWidth={1}
              trailWidth={1}
              strokeColor="green"
            />
            <p className="py-2">13.7K donations</p>
          </div>

          <div className="flex flex-col gap-y-4 py-4 max-w-xl mx-auto justify-center ">
            <div className="rounded-lg cursor-pointer">
              <button className="w-full bg-gradient-to-b from-orange-500 to-orange-300 hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-500 rounded-lg py-2 px-4">
                Share
              </button>
            </div>
            <div>
              <button className=" w-full rounded-lg bg-gradient-to-b from-orange-500 to-orange-300 hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-500   py-2 px-4 cursor-pointer">
                Donate Now
              </button>
            </div>
          </div>
          <div className=" flex  flex-col gap-y-6">
            <div className="cursor-pointer hover:text-purple-800 flex gap-x-4 items-center">
              <span className="px-2 py-2  rounded-full bg-slate-200">
                <ChartBarIcon className="h-6 w-6 " />
              </span>
              <p>1.2K people have just made a donation</p>
            </div>
            <div className="cursor-pointer hover:text-purple-800 flex gap-x-4 items-center">
              <span className="px-2 py-2  rounded-full bg-slate-200">
                <LifebuoyIcon className="h-6 w-6 " />
              </span>
              <p>1.2K people have just made a donation</p>
            </div>
            <div className="cursor-pointer hover:text-purple-800 flex gap-x-4 items-center">
              <span className="px-2 py-2  rounded-full bg-slate-200">
                <LifebuoyIcon className="h-6 w-6 " />
              </span>
              <p>1.2K people have just made a donation</p>
            </div>
            <div className="cursor-pointer hover:text-purple-800 flex gap-x-4 items-center">
              <span className="px-2 py-2  rounded-full bg-slate-200">
                <LifebuoyIcon className="h-6 w-6 " />
              </span>
              <div>
                <p>Anonymous</p>
                <div className="flex items-center gap-x-4">
                  <span className="text-lg font-medium">133,36</span>
                  <span>Recent Donation</span>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <button className="w-full py-2  rounded-xl border-[1px] border-gray-700 hover:bg-slate-100">
                See All
              </button>
              <button className="flex items-center space-x-1 w-full py-2 rounded-xl border-[1px] border-gray-700 hover:bg-slate-100 ">
                <StarIcon className="h-5 w-5 " />
                <span> See Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
