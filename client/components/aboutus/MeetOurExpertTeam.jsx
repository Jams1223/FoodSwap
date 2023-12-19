import Slider from "react-slick";
import React from "react";
import TeamCard from "../aboutus/TeamCard";
import { ourteamdata } from "../helper/Helper";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";

const MeetOurExpertTeam = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 0.5,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="container flex flex-col justify-between  lg:flex-row  pt-10 lg:pt-44">
        <div className="w-full lg:w-[49%]">
          <h3 className="text-primary text-xxl font-semibold mb-6">Our Team</h3>
          <h5 className="text-lightblack text-md font-bold mb-4">
            Meet Our Expert Team
          </h5>
          <p className="ff_lato text-lightblack text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="ff_lato text-lightblack text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="ff_lato text-lightblack text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
        </div>
        <div className="w-full lg:w-[49%] pt-16 ">
          <Slider {...settings}>
            {ourteamdata.map((item, index) => (
              <TeamCard item={item} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default MeetOurExpertTeam;

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
