import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";

const WelcomeToNolorn = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const slideData = [
    {
      src: "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
      alt: "Delicious fast food items like burgers and fries",
    },
    {
      src: "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
      alt: "Delicious fast food items like burgers and fries",
    },
    {
      src: "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
      alt: "Delicious fast food items like burgers and fries",
    },
    {
      src: "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
      alt: "Delicious fast food items like burgers and fries",
    },
    {
      src: "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
      alt: "Delicious fast food items like burgers and fries",
    },
    {
      src: "https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg",
      alt: "Delicious fast food items like burgers and fries",
    },
  ];
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-between mb-10 lg:mb-20">
        <div className="w-full lg:w-[49%] sm:my-4">
          <div className="relative products-details-slider">
            <Slider
              className="product-details-main-slider"
              autoplay={false}
              asNavFor={nav2}
              arrows={false}
              ref={(slider1) => setNav1(slider1)}
            >
              {slideData.map((slide, index) => (
                <MainSliderItem key={index} {...slide} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full lg:w-[49%] sm:my-4">
          <h2 className="text-lightblack font-semibold text-lg sm:text-xxl mt-6 sm:mb-4 sm:-mt-4">
            Welcome to FoodSwap
          </h2>
          <p className="text-lightblack text-sm mb-2">
            Our Journey Food Swap began with a simple idea: to bring the joy of
            authentic, home-cooked meals to every table. Founded in 2021 by a
            group of food enthusiasts, we&apos;ve built a community around the
            love for quality ingredients, delicious flavors, and the magic that
            happens when people come together to share a meal.
          </p>
          <p className="text-lightblack text-sm mb-5">
            Our Mission At Food Swap, we believe that food is more than just
            nourishment—it&apos;s a language that transcends borders and
            cultures. Our mission is to empower home chefs and local farmers,
            providing a platform where they can showcase their culinary
            creations and fresh produce. We&apos;re committed to sustainability,
            reducing food waste, and creating a positive impact on our
            environment.
          </p>

          <Slider
            className="product-details-asnav-slider "
            arrows={false}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            autoplay={false}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            responsive={[
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 3,
                },
              },
            ]}
          >
            {slideData.map((slide, index) => (
              <NavSliderItem key={index} {...slide} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default WelcomeToNolorn;

export const NavSliderItem = () => {
  return (
    <>
      <div className="mx-2">
        <Image
          width={170}
          height={170}
          className="rounded-lg"
          alt="slider-img"
          src="https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg"
        />
      </div>
    </>
  );
};
export const MainSliderItem = () => {
  return (
    <>
      <Image
        className="object-cover rounded-lg"
        width={570}
        height={605}
        alt="slider-img"
        src="https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg"
      />
    </>
  );
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-btns slider-right flex flex-col justify-center items-center right-0 md:top-[-75px] top-[-60px] "
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
      className="slider-btns slider-left flex flex-col justify-center items-center right-[50px] md:top-[-75px] top-[-60px]"
      onClick={onClick}
    >
      <span>
        <RightArrowIcon />
      </span>
    </div>
  );
}
