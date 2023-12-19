import React from "react";
import { LeftArrowIcon } from "../helper/Svg";

const Seasonal = () => {
  const seasonaldata = [
    {
      name: "October-February",
    },
    {
      name: "July-May",
    },
    {
      name: "November-February",
    },
    {
      name: "August-October",
    },
    {
      name: "All year long",
    },
    {
      name: "June-September",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between border-b  border-gray mt-6 mb-4 pb-3">
        <h4 className="text-lightblack font-bold text-md">Seasonal</h4>
        <LeftArrowIcon />
      </div>
      <div className="bg-white mt-8 ff_lato">
        {seasonaldata.map((item, index) => (
          <div key={index} className="mt-4 flex items-center">
            <input
              type="radio"
              name="Seasonal"
              id={item.name}
              className="w-[20px] h-[20px] bg-[#CACACA] rounded-md"
            />{" "}
            <label
              className="ml-4 mb-0 text-base cursor-pointer font-normal text-lightblack"
              htmlFor={item.name}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Seasonal;
