import React from "react";
import Slider from "react-slick";
import { hotpromotionsdata } from "../helper/Helper";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";
import HotPromotionListItem from "./HotPromotionListItem";

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

function HotPermotion() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="md:my-16 sm:my-10 container">
      <div className="my-14 sm:my-0">
        <h1 className="md:text-xxl text-md2 sm:text-lg text-primary font-semibold    ">
          Hot
          <span className="text-lightblack  "> Promotions </span>
        </h1>
      </div>
      <div className="my-6 w-full">
        <Slider {...settings}>
          {hotpromotionsdata &&
            hotpromotionsdata.map((obj, index) => (
              <HotPromotionListItem key={index} obj={obj} />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default HotPermotion;
