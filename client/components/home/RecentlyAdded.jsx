import React from "react";
import { topSellingsdata } from "../helper/Helper";
import ProductItem from "./ProductItem";

const RecentlyAdded = () => {
  return (
    <>
      <div className="w-full mt-[20px] trending_card md:w-[350px] lg:w-[370px]">
        <h3 className="font-bold text-md sm:text-lg text-lightblack leading-[40px] text-center sm:text-start ">
          Recently <span className="text-primary">Added</span>
        </h3>
        <div className="w-full h-[1px] bg-gray mt-[10px] mb-[6px]"></div>
        {topSellingsdata.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default RecentlyAdded;
