import React from "react";
import { productsWithDeliverylist } from "../helper/Helper";
import { DotsIcon } from "../helper/Icons";

const ProductsWithDelivery = () => {
  return (
    <div>
      <div className="container mx-auto  mt-[60px] md:mt-[100px]">
        <h2 className="font-semibold text-md2 sm:text-lg md:text-xxl text-lightblack max-w-[902px] mx-auto text-center leading-[35px] sm:leading-[40px] md:leading-[52px]">
          <span className="text-primary">FoodSwap</span>:{" "}
          <b>A Social Food Sharing Platform</b>
        </h2>
        <p className="font-normal text-sm mt-[20px] sm:mt-[40px] text-lightblack ff_lato leading-[19px]">
          What does the application do?{" "}
          <span className="font-bold text-primary">FoodSwap</span> is a web
          application that allows users to share their homemade meals and
          culinary creations with others in their local community. Users can
          create profiles, list the dishes they&apos;ve prepared, and connect
          with others to share their own meals.
        </p>
        <p className="font-normal text-sm  text-lightblack ff_lato mt-[6px] sm:mt-[12px] leading-[19px]">
          What is the motivation for the application? Aim is to foster a sense
          of community and culinary creativity with people who love cooking and
          sharing their creations.
        </p>
        <h4 className="text-md font-bold text-lightblack mt-[20px] sm:mt-[40px] ">
          Assortment
        </h4>
        <p className="font-normal text-sm  text-lightblack ff_lato mb-[6px] sm:mb-[12px] mt-[10px] sm:mt-[20px] leading-[19px]">
          Who would use the application? FoodSwap is designed for food
          enthusiasts, amateur chefs, busy professionals, and anyone who enjoys
          homemade meals but may not always have the time to cook. It also
          benefits those who want to reduce food waste and connect with their
          neighbors through food sharing. It can also be used as a cheaper
          alternative for food.
        </p>

        {productsWithDeliverylist.map((item, index) => (
          <div key={index} className="flex items-center mt-[8px]">
            <span className="mr-[9px]">
              <DotsIcon />
            </span>
            <p className="font-normal ff_lato text-xs text-lightblack">
              {item.title}
            </p>
          </div>
        ))}
        <p className="font-normal text-sm  text-lightblack ff_lato mb-[6px] sm:mb-[12px] mt-[10px] sm:mt-[20px] leading-[19px]">
          Is there a need or want in the market it fulfills? Since the pandemic
          there has been an especially growing interest in homemade and locally
          sourced food. Many people are looking for ways to connect with their
          neighbors, share their culinary skills, and reduce food waste.
        </p>
      </div>
    </div>
  );
};

export default ProductsWithDelivery;
