import Image from "next/image";
import React, { useState } from "react";

const NewProducts = ({ item }) => {
  const [rating, setRating] = useState(4);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      {" "}
      <div className="w-full mt-[15px] sm:mt-[30px] flex items-center sm:items-start ">
        <div>
          <div className="border-[1px] mr-8  sm:mr-5 border-gray rounded-[8px] max-w-[130px] sm:max-w-[170px] max-h-[153px] duration-300 transition-all hover-shadow">
            <Image
              className="rounded-[8px] "
              src={item.img}
              width={170}
              height={153}
              alt="top selling img"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lightblack sm:text-md  text-sm">
            {item.title}
          </h4>
          <div className="flex items-center ">
            <p className="text-xs text-lightblack ff_lato  ml-2">{rating}</p>
          </div>
          <p className="font-normal text-xs text-lightblack sm:mt-2">
            {item.text}
          </p>
          <h4 className="font-bold text-md text-lightblack ">
            {item.price}{" "}
            <del className="font-normal text-sm text-lightblack   ff_lato">
              {item.delPrice}
            </del>
          </h4>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
