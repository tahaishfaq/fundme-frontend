import React from "react";
import Discover from "../Discover/Discover";
import Featured from "../Featured /Featured";
import Covered from "../Covered/Covered";
import Role from "../Role/Role";
import Group from "../../images/Group 469461.png";
import { PlayIcon } from "@heroicons/react/24/outline";
import TrustBuilder from "../TrustBuilder/TrustBuilder";
import HowItWorks from "../HowItWorks/HowItWorks";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Discover />
      <Featured />
      <Covered />
      <div className="max-w-6xl mx-auto py-32">
        <div className="flex items-center justify-between py-6">
          <h1 className="md:text-3xl text-2xl font-medium">
            How GoFundMe works
          </h1>
          <button className="flex items-center space-x-1 px-6 text-nowrap py-2 rounded-xl border-[1px] border-gray-700 hover:bg-slate-100 ">
            Learn More
          </button>
        </div>
        <div className="relative overflow-hidden  rounded-lg w-full">
          <video
            controls
            poster={Group}
            className="w-full h-[500px] object-cover"
          >
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="button py-1 px-3 rounded-lg hover:bg-inherit">
            <PlayIcon className="h-6 w-6" />
            Paly 1 min video
          </div>
        </div>
      </div>
      <TrustBuilder />
      <Role />
    </>
  );
};

export default Home;
