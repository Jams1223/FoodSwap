import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { heroSliderData } from "../helper/Helper";

const HomeHeroSliderItem = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className=" bg-primary px-2 flex flex-col rounded-[8px] justify-center py-7 xl:py-12  sm:h-full">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="  sm:pl-4 pr-1 pt-4 md:py-6  ">
            <h1 className="md:text-3xl leading-[110%] text-white font-bold text-lg sm:text-xl max-w-[411px] ">
              Happy and healthy food
            </h1>
            <p className="text-base text-white ff_lato py-2 md:mt-[14px]">
              {" "}
              Up to 30% off your first order
            </p>
            <div className="my-6 flex sm:w-[420px] w-full border border-[#D4EEE2] rounded bg-white">
              <input
                type="email "
                className="outline-none border-0 py-[13px] px-[24px] bg-transparent   text-xs  text-lightblack placeholder:text-lightblack rounded w-[calc(100%-106px)] "
                placeholder="Enter your email"
              />
              <button className="w-[106px] bg-primary text-white font-xs font-bold rounded transition-all duration-300 hover:opacity-80 ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-[250px] md:w-[220px] xl:w-[250px] h-full mt-4 md:mt-10 md:pr-2">
            <Slider {...settings} className="">
              {heroSliderData.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  alt="hero img "
                  width={250}
                  height={250}
                  className="w-[20px] h-[290px]"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSliderItem;
