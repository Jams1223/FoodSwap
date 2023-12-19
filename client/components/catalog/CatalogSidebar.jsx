import React from "react";
import { topSellingsdata } from "../helper/Helper";
import { LeftArrowIcon } from "../helper/Svg";
import CategoryCatalog from "./CategoryCatalog";
import Manufacturer from "./Manufacturer";
import PriceSlider from "./PriceSlider";
import Seasonal from "./Seasonal";
import ProductItem from "../home/ProductItem";
import ShopNowBtn from "../common/ShopNowBtn";
import Image from "next/image";

const CatalogSidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="z-10 fixed left-0 w-full h-full bg-black opacity-10 top-0 50 transition-all duration-300 ease-in"
        ></div>
      )}
      <aside
        className={`p-3 lg:p-0 fixed lg:static min-w-[270px] w-[270px] h-full lg:h-fit max-h-full overflow-auto z-[101]  transition-all duration-200 ease-in ${
          isSidebarOpen ? "left-0 top-0  bg-white" : "-left-[270px]"
        }`}
      >
        <CategoryCatalog />
        <PriceSlider />
        <Seasonal />
        <Manufacturer />
        <div className="flex items-center justify-between border-b  border-gray mt-6 mb-4 pb-3">
          <h4 className="text-lightblack font-bold text-md">
            Storage conditions
          </h4>
          <LeftArrowIcon />
        </div>
        <button className="w-full px-5 py-3 bg-perfectwhite rounded text-sm font-bold text-primary">
          Filter
        </button>
        <div className="flex items-center justify-between border-b  border-gray mt-6 mb-4 pb-3">
          <h4 className="text-lightblack font-bold text-md">New products</h4>
          <LeftArrowIcon />
        </div>
        {topSellingsdata.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
        <div className="bg-primary rounded-lg p-5  mt-10 h-[300px] relative">
          <div className="z-10 relative">
            <h2 className="font-bold text-lg  text-white max-w-[180px] sm:max-w-[238px] leading-10 mb-6">
              Get a <br /> <span>Discount 30%</span>
            </h2>
            <ShopNowBtn />
          </div>

          <div className="absolute bottom-0 right-0 max-w-[170px] z-0">
            <Image
              src="/assets/images/glasses.png"
              alt="New product"
              width={370}
              height={438}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default CatalogSidebar;
