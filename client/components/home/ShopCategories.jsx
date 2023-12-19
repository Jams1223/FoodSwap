import React from "react";
import { shopCategories } from "../helper/Helper";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopCategories = () => {
  return (
    <>
      <div className="container mx-auto mt-[30px] sm:mt-[70px] z-0 relative">
        <div className="flex flex-wrap justify-center xl:justify-between">
          {shopCategories.map((item, index) => (
            <ShopByCategoryCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategories;
