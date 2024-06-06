import React, { useState } from "react";
import Rectangle from "../../images/Rectangle 7575.png";
import {
  ChevronRightIcon,
  HeartIcon,
  CalendarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Line } from "rc-progress";
import himiway from "../../images/himiway-bikes-_vUw3CqigHk-unsplash.jpg";
import emmasimpson from "../../images/emma-simpson-mNGaaLeWEp0-unsplash.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Question from "./Question";
import martins from "../../images/martins-zemlickis-NPFu4GfFZ7E-unsplash.jpg";
import {} from "@heroicons/react/24/outline";

const HowToStart = () => {
  const [show, setShow] = useState(false);
  const QuestionAns = [
    {
      id: 1,
      que: "How does the charity receive the money I raise?",
      answer:
        "Funds raised on a charity fundraiser through GoFundMe will be processed through our payment partner, PayPal Giving Fund, who will deliver the funds directly to the charity on your behalf. As the fundraiser organiser, you do not need to do anything to transfer funds to the charity! Gift Aid is also delivered and processed for free.",
    },
    {
      id: 2,
      que: "What details should I include in a charity fundraiser?",
      answer:
        "In your fundraiser description, we recommend adding a note about why the charity is important to you. If you are fundraising for the charity as part of an event or moment, include the date to help donors know when they should donate by. ",
    },
    {
      id: 3,
      que: "Can I raise my goal if I the financial needs increase?",
      answer:
        "Yes, you can raise (or lower) your fundraising goal at any time. ",
    },
    {
      id: 4,
      que: "I’m running a marathon, as part of my experience can I use GoFundMe to fundraise for a charity?",
      answer:
        "Yes, hundreds of people have used GoFundMe to fundraise for a charity as part of their marathon or other endurance race. Whether the race you are competing in has a fundraising program or not, you can use your miles for a great cause by raising money for your favourite charity. ",
    },
    {
      id: 5,
      que: "How much of the money I raise does the charity keep?",
      answer:
        "There is no fee to start a charity fundraiser on GoFundMe. One small transaction fee of 1.9% + £0.20 is automatically deducted from each donation of a verified charity fundraiser. For more information, visit the GoFundMe pricing page.",
    },
    {
      id: 6,
      que: "Can I raise money on GoFundMe for a charity in memory of my loved one?",
      answer:
        "Yes, you can fundraise for a charity you care about by selecting “Charity” when prompted to select who you are fundraising for in your GoFundMe setup.",
    },
    {
      id: 7,
      que: "I work for a charity, can I start a GoFundMe?",
      answer:
        "Yes, if you are fundraising as part of a team, you can add team members to help you run the fundraiser after the fundraiser is set up. Visit this tips article for advice on using team members to help your GoFundMe reach its goal.",
    },
  ];

  const cardData = [
    {
      id: 1,
      image: Rectangle,
      des: "Our tools help create your fundraiser",
      detail:
        "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser details and set your goal, which can be changed anytime.",
      share: "Share Your Why",
    },
    {
      id: 2,
      image: Rectangle,

      des: "Share your fundraiser link to reach donors",
      detail:
        "Once live, share your fundraiser link with friends and family to start gaining momentum. You’ll also find helpful resources for running your fundraiser in your GoFundMe dashboard.",
      share: "Use events or moments ",
    },
    {
      id: 3,
      image: Rectangle,

      des: "Securely receive the funds you raise",
      detail:
        "Add your bank information to securely start receiving funds or invite your intended recipient to add theirs. You don’t need to reach your fundraising goal to receive your money.",
      share: "Thank and update doners ",
    },
  ];
  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto ">
        <ul className="flex flex-wrap justify-center gap-y-6 lg:justify-between items-center cursor-pointer">
          <li className="px-4 py-1.5 rounded-full bg-black text-white hover:bg-slate-900">
            <a href="#"> How to start</a>
          </li>
          <li className="px-4 py-1.5 rounded-full hover:bg-slate-100">Tips</li>
          <li className="px-4 py-1.5 rounded-full hover:bg-slate-100">
            Examples
          </li>
          <li className="px-4 py-1.5 rounded-full hover:bg-slate-100">
            Resources
          </li>
          <li className="px-4 py-1.5 rounded-full hover:bg-slate-100">
            Question
          </li>
          <li className="px-4 py-1.5 rounded-full hover:bg-slate-100">
            Why GoFundMe
          </li>
        </ul>
      </div>
      {/*------------------   Cards Section     -------------------*/}
      <h1 className="text-3xl md:text-5xl mt-20 font-semibold text-center ">
        How to start a GoFundMe
      </h1>
      <div className="max-w-7xl sm:px-20 mx-auto md:px-0 grid md:grid-cols-3 gap-4 py-20 lg:px-6">
        {cardData.map((item) => {
          return (
            <div key={item.id} className="p-8 bg-[#fbf8f6] rounded-3xl ">
              <span className="py-1 rounded-3xl px-2 bg-green-50 text-green-800">
                Step {item.id}
              </span>
              <div className="rounded-2xl">
                <img src={item.image} alt="" className="h-52 py-6 w-full" />
              </div>
              <div>
                <h1 className="py-6 text-3xl font-semibold">{item.des}</h1>
                <p className="text-2xl opacity-75 font-normal">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button className=" bg-green-700 hover:bg-green-800 py-3 px-6 text-white font-bold rounded-xl">
          Start a GoFundMe
        </button>
      </div>
      {/*------------------  Tips  Section     -------------------*/}

      <div className="py-10 max-w-6xl mx-auto px-2 flex ">
        <h1 className="text-2xl md:text-5xl leading-10  font-semibold">
          Tips for your charity fundraiser on GoFundMe
        </h1>
        <div className="gap-2 py-10">
          <button className="flex items-center space-x-1 px-6 text-nowrap py-2 rounded-xl border-[1px] border-gray-700 hover:bg-slate-100 ">
            Learn More
            <ChevronRightIcon className="h-6 w-6 " />
          </button>
        </div>
      </div>
      <div className="max-w-7xl pb-16 mb-7 pt-4 mx-auto gap-4 grid md:grid-cols-3">
        {cardData.map((item) => {
          return (
            <div key={item.id} className="p-8 rounded-3xl bg-[#fbf8f6]">
              <div>
                {item.id === 1 ? (
                  <QuestionMarkCircleIcon className="h-14 w-14" />
                ) : item.id === 2 ? (
                  <HeartIcon className="h-14 w-14 " />
                ) : (
                  <CalendarIcon className="h-14 w-14 " />
                )}
              </div>
              <h1 className="text-2xl font-normal py-4">{item.share}</h1>
              <p className="text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque vitae culpa ab aliquam ducimus, id perferendis,
                tempora harum nisi totam sapiente exercitationem nesciunt
                repellendus. Expedita reiciendis laudantium perspiciatis eius,
                repudiandae optio. Totam culpa odit facilis praesentium officiis
                magni repudiandae velit facere sapiente! Soluta, totam.
              </p>
            </div>
          );
        })}
      </div>

      {/*------------------  Example  Section     -------------------*/}
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl leading-10  font-semibold text-center">
            Examples of charity fundraisers on GoFundMe
          </h1>
          <div className="flex justify-center gap-x-4 py-10">
            <button
              onClick={(e) => setShow(false)}
              className={
                show
                  ? "py-1 px-4 rounded-full border-[1px] hover:bg-slate-100 "
                  : "py-1 px-4 rounded-full border-[1px] bg-black text-white"
              }
            >
              Running for good
            </button>
            <button
              onClick={(e) => setShow(true)}
              className={
                show
                  ? "py-1 px-4 rounded-full bg-black text-white"
                  : "py-1 px-4 rounded-full border-[1px] hover:bg-slate-100 "
              }
            >
              Biking for National Parks
            </button>
          </div>
        </div>
        {show ? (
          <div className="grid md:grid-cols-2 gap-y-6 py-10 lg:px-14">
            <div>
              <img
                src={himiway}
                alt=""
                className="h-[500px] w-full object-cover rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <h3 className="text-3xl font-normal py-4">
                  Biking for National Parks
                </h3>
                <p className="text-xl leading-8 pb-4">
                  Timothy has competed in RAGBRAI, an annual cycling event
                  across the state of Iowa, for the last 9 years. He decided to
                  use his experience to help support a cause he cares about- the
                  National Park Foundation! By starting a fundraiser, he raised
                  $1,000 to accompany his great accomplishment of riding… Read
                  more
                </p>
              </div>
              <div>
                <Line
                  percent={100}
                  strokeWidth={2}
                  trailWidth={2}
                  strokeColor="green"
                />
                <p className="py-4">$1,000.00 raised of $1,000.00 goal</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-y-6 py-10 lg:px-14">
            <div>
              <img
                src={emmasimpson}
                alt=""
                className="h-[500px] w-full object-cover rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <h3 className="text-3xl font-normal py-4">
                  Running miles for good
                </h3>
                <p className="text-xl leading-8 pb-4">
                  Marcus is running a mile a day for a month to spread awareness
                  and try raise money for mental health charity, Mind.
                </p>
              </div>
              <div>
                <Line
                  percent={100}
                  strokeWidth={2}
                  trailWidth={2}
                  strokeColor="green"
                />
                <p className="py-4">$1,000.00 raised of $1,000.00 goal</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*------------------------Resources Funding Section-------------------------*/}
      <div className="px-2 py-28 bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto ">
          <div className=" flex justify-between items-center ">
            <h1 className="text-xl md:text-4xl leading-10  font-semibold">
              Resources for charity fundraising
            </h1>
            <div className="gap-2 py-10">
              <button className="flex items-center space-x-1 px-6 text-nowrap py-2 rounded-xl border-[1px] border-gray-700 hover:bg-slate-100 ">
                Top Fundraising Tips
                <ChevronRightIcon className="h-6 w-6 " />
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="py-10 px-4 rounded-2xl border-[1px] hover:border-[1px] hover:duration-1000 cursor-pointer hover:border-black flex items-center justify-between font-semibold text-lg bg-white">
              <h1>How to find local charities</h1>
              <ArrowRightIcon className="h-6 w-6" />
            </div>
            <div className="py-10 px-4 rounded-2xl border-[1px] hover:border-[1px] hover:duration-1000 cursor-pointer hover:border-black flex items-center justify-between font-semibold text-lg bg-white">
              <h1>Charity gaming ideas</h1>
              <ArrowRightIcon className="h-6 w-6" />
            </div>
            <div className="py-10 px-4 rounded-2xl border-[1px] hover:border-[1px] hover:duration-1000 cursor-pointer hover:border-black flex items-center justify-between font-semibold text-lg bg-white">
              <h1>20 Fundraiser sharing tips to increase donations</h1>
              <ArrowRightIcon className="h-6 w-6" />
            </div>
          </div>

          {/*------------------------Questions about charity fundraising  Section-------------------------*/}

          <div className="px-2 flex justify-between items-center pt-20 pb-10 ">
            <h1 className="text-xl md:text-4xl leading-10  font-semibold">
              Questions about charity fundraising on GoFundMe
            </h1>
            <div className="gap-2 py-10">
              <button className="flex items-center space-x-1 px-6 text-nowrap py-2 rounded-xl border-[1px] border-gray-700 hover:bg-slate-100 ">
                More FAQs
                <ChevronRightIcon className="h-6 w-6 " />
              </button>
            </div>
          </div>
          {/*------------------------Questions AND ANSwer about charity fundraising  Section-------------------------*/}

          <div>
            {QuestionAns.map((item) => {
              const { id, que, answer } = item;
              return <Question answer={answer} question={que} key={id} />;
            })}
          </div>
        </div>
      </div>
      {/*------------------------ Why fundraise for a charity on GoFundMe?  Section-------------------------*/}

      <div className="max-w-7xl mx-auto py-28">
        <h1 className="text-center text-3xl md:text-5xl leading-10 pb-4j  font-semibold">
          Why fundraise for a charity on GoFundMe?
        </h1>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-5 py-10 lg:px-10">
          <div>
            <img
              src={martins}
              alt=""
              className="h-[400px] w-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-between px-6">
            <div>
              <p className="text-xl leading-8 pb-4">
                Did you know that fundraising for a charity can have an even
                bigger impact than a donation alone? That’s because your
                fundraiser can raise more than what you alone can give. As the
                world’s most trusted online fundraising platform, GoFundMe
                provides the tools and support needed to easily raise funds for
                your favourite charity. Whether your charity is creating medical
                breakthroughs, providing disaster relief, or serving your local
                community, starting a GoFundMe empowers you to help your chosen
                charity thrive.
              </p>
            </div>
            <div className="pt-4">
              <button className=" bg-green-700 hover:bg-green-800 py-3 px-6 text-white font-bold rounded-xl">
                Start a GoFundMe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
