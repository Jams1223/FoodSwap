import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

const ProductDescriptionReviews = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="container px-3 xl:px-0 mt-[30px] sm:mt-[60px] md:mt-[100px]">
      <div className="flex ">
        <button
          className={`md:text-md text-sm border-[0.5px] rounded-[8px_8px_0px_0px] flex justify-center items-center border-gray w-[154px] h-[45px]  relative transition-all duration-150 ease-in font-bold  ${
            activeTab === "All"
              ? "text-primary border_bottom"
              : "text-lightblack "
          }`}
          onClick={() => setActiveTab("All")}
        >
          Description
        </button>

        <button
          className={`md:text-md border-[0.5px] ml-[12px] rounded-[8px_8px_0px_0px] flex justify-center items-center border-gray w-[154px] h-[45px] text-sm     relative transition-all duration-150 ease-in font-bold  ${
            activeTab === "Milks" ? "text-primary" : "text-lightblack "
          }`}
          onClick={() => setActiveTab("Milks")}
        >
          <span>Reviews</span>
          <span className=" ml-[10px] p-[5px] rounded-[50%]  bg-perfectwhite font-normal ff_lato text-[10px]">
            12
          </span>
        </button>
      </div>
      <div className="border-[1px] border-gray rounded-[0px_0px_8px_8px]">
        {activeTab === "All" && <ProductDescription />}
        {activeTab === "Milks" && <ProductReviews />}
      </div>
    </div>
  );
};

export default ProductDescriptionReviews;
