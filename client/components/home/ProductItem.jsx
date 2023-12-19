import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductItem = ({ item }) => {
  return (
    <>
      <div className="w-full mt-[15px] sm:mt-[30px] flex items-center justify-center sm:justify-start sm:items-start ">
        <div className="border-[1px] mr-4 border-gray rounded-[8px] max-w-[110px] ease-in duration-300 transition-all hover-shadow p-2 h-24 flex items-center">
          <Image
            className="rounded-lg object-contain"
            src={item.img}
            width={100}
            height={100}
            alt="top selling img"
          />
        </div>
        <div>
          <h4 className="font-bold text-lightblack text-xs mb-0">
            {item.title}
          </h4>
          <div className="flex items-center h-7">
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
          <p className="font-normal text-xs text-lightblack">{item.text}</p>
          <h4 className="font-bold text-xs text-lightblack ">{item.price} </h4>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
