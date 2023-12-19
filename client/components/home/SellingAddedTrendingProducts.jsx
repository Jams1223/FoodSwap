import React from "react";
import RecentlyAdded from "./RecentlyAdded";
import TopSelling from "./TopSelling";
import TrendingProducts from "./TrendingProducts";

const SellingAddedTrendingProducts = () => {
  return (
    <div>
      <div className="container mx-auto  mt-[60px] md:mt-[90px] px-3 xl:px-0">
        <div className="w-full flex justify-start  md:justify-between  flex-wrap">
          <TopSelling />
          <TrendingProducts />
          <RecentlyAdded />
        </div>
      </div>
    </div>
  );
};

export default SellingAddedTrendingProducts;
