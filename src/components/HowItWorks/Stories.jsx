import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doordash from "../../images/doordash-cj-zQaOOMtY-unsplash.jpg";
import doordashPdBg from "../../images/doordash-ePdBgYsfmRc-unsplash.jpg";
import doordash2 from "../../images/doordash-GlSMQq7kUF0-unsplash.jpg";
const Stories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      id: 1,
      imgSrc: doordash,
      Description:
        "Fundraiser Simon Harris has raised more than £63k for families who are in need of baby formula. He was inspired after news reports told of parents struggling during the cost of living crisis with the rising costs of formula, with many going to extreme measures to feed their babies – including going hungry themselves. So Simon wanted to do something to help, so he started this GoFundMe. He’s been delivering mini-grants to people who get in touch to say they need help but also to charities on board too.&nbsp;",
    },
    {
      id: 2,
      imgSrc: doordash2,
      Description:
        "As an organisation that depends on support from its readers, their fundraiser has so far raised more than £1.7 million – with donations continuing to come in.  ",
      Description1:
        "Thanks to nearly 30,000 donations from 90 countries around the world, the Kyiv Independent has been able to continue reporting during unimaginable times. ",
      Description2:
        "Launched one day after Russia’s invasion of Ukraine, the Kyiv Independent’s fundraiser was created to make sure their vital journalism could go on.&nbsp;",
    },
    {
      id: 3,
      imgSrc: doordashPdBg,
      Description:
        "As an organisation that depends on support from its readers, their fundraiser has so far raised more than £1.7 million – with donations continuing to come in.  ",
      Description1:
        "Thanks to nearly 30,000 donations from 90 countries around the world, the Kyiv Independent has been able to continue reporting during unimaginable times. ",
      Description2:
        "Launched one day after Russia’s invasion of Ukraine, the Kyiv Independent’s fundraiser was created to make sure their vital journalism could go on.&nbsp;",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium py-6 px-10">Success stories</h1>
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="px-6">
                <div className="grid lg:grid-cols-2  gap-6">
                  <div>
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="space-y-6 pb-6 text-xl font-normal text-gray-600">
                    <p>{item.Description}</p>
                    <p>{item.Description1}</p>
                    <p>{item.Description2}</p>
                    <div>
                      <button className=" bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded-xl">
                        Start a GoFundMe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Stories;
