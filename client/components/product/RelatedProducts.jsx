import React from "react";

import Slider from "react-slick";
import { relatedProductsData } from "../helper/Helper";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";
import DailyBestCard from "../home/DailyBestCard";

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
function RelatedProducts() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="md:my-16 my-16 sm:my-10 container">
      <div className="mb-14 sm:mb-0">
        <h1 className="md:text-xxl text-md2 sm:text-lg text-lightblack  font-semibold    ">
          Related
          <span className="text-primary  "> Products </span>
        </h1>
      </div>
      <div className="my-6">
        <div className="">
          <Slider {...settings}>
            {relatedProductsData.map((item, index) => (
              <DailyBestCard items={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
