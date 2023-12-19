import React from "react";
import { vegetablesCategories } from "../helper/Helper";
import VegetablesCard from "./VegetablesCard";

function Vegetables() {
  return (
    <>
      <div className="container mx-auto mt-[50px] sm:mt-[70px] z-0 relative">
        <div className="flex flex-wrap justify-center xl:justify-between">
          {vegetablesCategories.map((item, index) => (
            <VegetablesCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Vegetables;
