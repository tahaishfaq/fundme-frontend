import React from "react";

const Featured = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto pt-8 pb-20">
      <h1 className="font-medium text-4xl py-10">Featured topics</h1>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="group cursor-pointer rounded-2xl bg-gray-100 overflow-hidden relative">
          <span className="absolute left-4 px-2 py-1 rounded-3xl bg-gray-200 top-3">
            How to
          </span>
          <div className="h-60 bg-green-500 flex justify-center items-center ">
            <h1 className="text-white text-4xl font-bold">gofundme</h1>
          </div>
          <div className="pl-2">
            <h1 className="font-medium text-2xl py-5 ">
              How to fundraise to evacuate civilians from Gaza
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              ullam dolorum minus, repudiandae facilis perferendis beatae
              doloremque assumenda eius, facere in eveniet quibusdam dignissimos
            </p>

            <div className="py-6">
              <button className="py-1 px-3 rounded-lg group-hover:bg-white ">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/*--------------------  image section --------------------*/}

        <div className="group cursor-pointer rounded-2xl bg-gray-100 overflow-hidden relative">
          <span className="absolute left-4 px-2 py-1 rounded-3xl bg-gray-200 top-3">
            Charity fundraising
          </span>
          <div className="h-60 bg-green-500 flex justify-center items-center ">
            <img
              src="https://www.greetingsisland.com/wp-content/uploads/2019/09/cover-mock-up-566x376.png"
              alt=""
              className="object-cover h-60 w-full"
            />
          </div>
          <div className="pl-2">
            <h1 className="font-medium text-2xl py-5 ">
              How to fundraise to evacuate civilians from Gaza
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              ullam dolorum minus, repudiandae facilis perferendis beatae
              doloremque assumenda eius, facere in eveniet quibusdam dignissimos
            </p>

            <div className="py-6">
              <button className="py-1 px-3 rounded-lg group-hover:bg-white ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
