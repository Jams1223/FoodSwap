import React from "react";
import Slider from "react-slick";
import ShopNowBtn from "../common/ShopNowBtn";
import { dailyBestSellsData } from "../helper/Helper";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";
import DailyBestCard from "./DailyBestCard";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-btns slider-right flex flex-col justify-center items-center right-0 md:top-[-75px] sm:top-[-60px] top-[-40px] "
      onClick={onClick}
    >
      <span>
        <LeftArrowIcon />
      </span>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-btns slider-left flex flex-col justify-center items-center right-[50px] md:top-[-75px] sm:top-[-60px] top-[-40px]"
      onClick={onClick}
    >
      <span>
        <RightArrowIcon />
      </span>
    </div>
  );
}
function DailyBestSale() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="md:my-16 my-6 sm:my-10 container">
      <div className="mb-14 sm:mb-0">
        <h1 className="md:text-xxl text-md2 sm:text-lg text-primary font-semibold">
          Daily
          <span className="text-lightblack"> Best recipes </span>
        </h1>
      </div>
      <div className="my-6   sm:flex sm:justify-between">
        <div className="w-[265px] hidden sm:block  ">
          <div>
            <div className="relative h-full min-h-[460px]  w-[265px] z-50 border-gray bg-white rounded-[18px]   overflow-hidden hover-shadow transition-all duration-300 my-4   sm:mx-4 mx-auto">
              <img
                src="https://media.istockphoto.com/id/672973502/photo/checkout-server-serving-young-woman-customer-ordering-at-fast-food-restaurant.jpg?s=2048x2048&w=is&k=20&c=9wdfV5spoupfhV5a09yKSbPw7P7xDacEhKMHyF3IQ8I="
                alt="almonds"
                className="h-[460px] object-cover object-left"
              />
              <div className="absolute bottom-4 left-5 pb-4 ">
                <h1 className="text-xxl font-semibold text-white pb-8 leading-[110%] ">
                  A burst <br /> of energy
                </h1>
                <ShopNowBtn />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[calc(100%-293px)] lg:w-[calc(100%-343px)] sm:w-[calc(100%-333px)] ">
          <Slider {...settings}>
            {dailyBestSellsData.map((item, index) => (
              <DailyBestCard items={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default DailyBestSale;
