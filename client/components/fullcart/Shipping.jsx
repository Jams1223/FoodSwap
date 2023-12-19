import React from "react";
import AllCategoriesSelect from "../common/AllCategoriesSelect";

function Shipping() {
  const categories = [{ name: "Select Country" }, { name: "S" }, { name: "F" }];
  return (
    <div>
      <p className="text-md font-bold text-lightblack"> Calculate Shipping</p>
      <p className="text-lightblack text-xs my-2 ">
        {" "}
        Flat rate: <span className="text-lightblack "> 5%</span>{" "}
      </p>
      <div className="my-5 w-full border-[0.5px] rounded border-gray py-[13px] px-5">
        <div className="w-full   border-[#939393] mr-4 text-xs  font-bold">
          <AllCategoriesSelect categories={categories} font="font-bold" />
        </div>
      </div>
      <div className="flex items-center pt-2 justify-between ">
        <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
          <input
            type="text"
            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
            placeholder="State / Country"
          />
        </div>
        <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
          <input
            type="number"
            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
            placeholder="Post Code / Zip"
          />
        </div>
      </div>
    </div>
  );
}

export default Shipping;
