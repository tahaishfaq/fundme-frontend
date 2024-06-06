import React from "react";
import ShareSection from "./ShareSection";
import Rectangle from "../../images/Rectangle 7583.png";
import Stories from "./Stories";
import Group from "../../images/Group 469461.png";
import { PlayIcon } from "@heroicons/react/24/outline";

const HowItWorks = () => {
  return (
    <div className="py-10 ">
      <div className="pt-20 px-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold  py-8">How GoFundMe Works</h1>
        <p className="text-sm pb-8 text-center">
          GoFundMe is the best place to fundraise, whether you are an
          individual, group, or organisation.
        </p>
        <div>
          <button className="py-1 px-6 rounded-lg bg-green-500 hover:bg-green-700">
            Start a GoFundMe
          </button>
        </div>
      </div>
      {/*-------------- Video about How it Work------------------*/}
      <div className="">
        <div className="max-w-5xl mx-auto  relative top-52">
          <div className="relative overflow-hidden  rounded-lg w-full">
            <video
              controls
              poster={Group}
              className="w-full h-[400px] object-cover"
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
        <div className="h-72 bg-[#fbf8f6]"></div>
      </div>

      <ShareSection />
      {/*--------------------customer service  section ---------------*/}
      <div className="py-32 bg-[#fbf8f6] flex justify-center items-center gap-y-10 flex-col ">
        <p className="text-center mx-auto max-w-2xl px-6">
          “This website rocks! I raised close to £10,000 in less than 48 hours
          for my nephew’s medical needs, and your customer service was so prompt
          and helpful.”
        </p>
        <img
          src={Rectangle}
          alt=""
          className="h-16 w-16 rounded-full bg-gray-100"
        />
        <h3 className="text-xl font-medium">Monica S.</h3>
        <p className="text-gray-500">Raised £16,000 on GoFundMe</p>
      </div>
      {/*--------------------customer service  section ---------------*/}

      <div className="h-72 px-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold  py-8">Fast and safe</h1>
        <p className="text-sm pb-8 text-center">
          Millions trust GoFundMe as the #1 online fundraising expert. That’s
          why more people start fundraisers on GoFundMe than any other platform.
        </p>
        <div>
          <button className="py-1.5 px-6 rounded-lg text-green-600 hover:text-green-700 border-[1px] font-bold border-green-600">
            Learn more
          </button>
        </div>
      </div>
      {/*--------------------Success Stories  section ---------------*/}

      <div className="max-w-7xl mx-auto py-10 px-4">
        <div>
          <h1 className="py-7 text-3xl">Why choose GoFundMe?</h1>
          <ol className="space-y-3 list-disc px-4">
            <li>GoFundMe is the leading crowdfunding platform</li>
            <li>Easy tools to make a great fundraiser</li>
            <li>No fee to start fundraising</li>
            <li>No pressure to reach your fundraising goal</li>
          </ol>
        </div>
        <h1 className="py-10 lg:text-5xl ">
          How does GoFundMe work? Here is what to expect when fundraising:
        </h1>
        {/*---------------step 1   ---------------------------*/}
        <div>
          <h1 className="py-7 text-3xl">
            1. Follow the prompts to set up your fundraiser
          </h1>
          <ul className="py-8 list-disc px-4">
            <li>
              Click the ‘Start a GoFundMe’ button and answer a few questions to
              get started
            </li>
            <li>
              In your fundraiser description, share the reason you are
              fundraising in 1-3 paragraphs
            </li>
            <li>
              Set your fundraising goal, and remember you can always change it
              later
            </li>
          </ul>
          <p className="pb-8">
            Need more help writing your story? Watch our video on writing a
            compelling fundraiser story to get inspiration.
          </p>
        </div>
        {/*---------------step 2   ---------------------------*/}

        <div>
          <h1 className="py-7 text-3xl">2. Share your fundraiser</h1>
          <ul className="py-8 list-disc px-4">
            <li>
              Share your fundraiser link with your community through text
              messages and emails to start gaining momentum
            </li>
            <li>
              Continue to share your fundraiser to help reach your
              goals—consider posting on social media, sharing in-person with a
              printable poster, or writing a letter to people you know
            </li>
            <li>
              Add team members you know and trust to your fundraiser to help
              spread the word
            </li>
          </ul>
          <p>
            Want more tips on how to get greater support for your fundraiser?
            Check out our fundraiser awareness video.
          </p>
        </div>

        {/*---------------step 3   ---------------------------*/}

        <div>
          <h1 className="py-7 text-3xl">3. Post updates and thank donors</h1>
          <ul className="py-8 list-disc px-4">
            <li>
              Throughout your fundraising journey, you can post fundraiser
              updates to help increase donations and keep donors informed
            </li>

            <li>Easily thank donors within your fundraising dashboard</li>
          </ul>
          <p>
            Find more tips on our blog about how to ask for donations and how to
            write a donation thank-you letter.
          </p>
        </div>
        {/*---------------step 4   ---------------------------*/}

        <div>
          <h1 className="py-7 text-3xl">4. Set up bank transfers</h1>
          <ul className="py-8 list-disc px-4">
            <li>
              Add bank information to start receiving funds (you don’t need to
              hit your fundraising goal to receive your money)
            </li>
            <li>
              Continue to share your fundraiser to help reach your
              goals—consider posting on social media, sharing in-person with a
              printable poster, or writing a letter to people you know
            </li>
            <li>
              Add a beneficiary if you’re raising donations for someone else
            </li>
          </ul>
          <p>
            *One small transaction fee is automatically deducted per donation.
            For more help with GoFundMe and information about GoFundMe fees,
            visit our Pricing page.
          </p>
        </div>

        <div className=" mt-10">
          <button className=" bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded-xl">
            Start a GoFundMe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
