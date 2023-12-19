import React from "react";
import Slider from "react-slick";
import { shopCatData } from "../helper/Helper";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";
import ShopCatCard from "./ShopCatCard";
import ShopCategories from "./ShopCategories";

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
function ShopByCat() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-8 sm:my-16 ">
      <div className="mb-14 sm:mb-0 ">
        <h1 className="md:text-xxl text-md2 sm:text-lg text-primary font-semibold    ">
          <span className="text-lightblack  ">Shop </span> by Categories
        </h1>
      </div>
      <div className="my-6">
        <Slider {...settings}>
          {shopCatData.map((item, index) => (
            <ShopCatCard item={item} key={index} />
          ))}
        </Slider>
      </div>
      <ShopCategories />
    </div>
  );
}

export default ShopByCat;
