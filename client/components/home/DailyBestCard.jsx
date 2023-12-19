import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import AddToCartBtn from "../common/AddToCartBtn";
import { FillHeartIcon, HeartIcon } from "../helper/Icons";

const DailyBestCard = ({ items }) => {
  const checkValue = (type) => {
    if (type === "New") return "bg-primary";
    if (type === "Sale") return "bg-red";
    if (type === "Hot") return "bg-pink";
    if (type === "-5%") return "bg-pink";
  };

  const [isLike, setLike] = useState();

  return (
    <>
      <div className="border-[0.5px]  sm:w-[265px] z-50 border-gray bg-white rounded-[18px] relative overflow-hidden hover-shadow transition-all duration-300 my-4  sm:mx-4 mx-auto">
        <div
          onClick={() => setLike(!isLike)}
          className="absolute right-[9px] top-[10px] cursor-pointer "
        >
          {isLike ? <HeartIcon /> : <FillHeartIcon />}
        </div>
        {items.banertype && (
          <div
            className={`  ${checkValue(
              items.banertype
            )} z-[10] left-[-33px] top-[12px] absolute rotate-[314deg] w-[121.26px] flex justify-center items-center `}
          >
            <p className=" h-[36px] py-1 w-full text-center   text-white text-sm font-normal">
              {items.banertype}
            </p>
          </div>
        )}
        <Link
          className="p-[12px] max-w-[200px] sm:max-w-none mx-auto"
          href={"/product/123"}
          passHref
        >
          <img
            className="w-full object-cover"
            src={items.img}
            alt="Daily Best Card img"
          />
        </Link>
        <div className="px-[20px] py-[18px] pt-[20px]">
          <p className="font-normal text-xs text-lightblack">Category</p>
          <Link
            className="font-bold text-md text-lightblack mt-[6px] sm:mt-[12px]"
            href={"/product/123"}
            passHref
          >
            {items.productName}
          </Link>
          <div className="flex items-center my-1 sm:my-3">
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />

            <p className="text-xs text-lightblack ff_lato  ml-2">{4}</p>
          </div>
          <p className="text-xs text-lightblack ff_lato">Price per item</p>
          <div className="my-3  ">
            <div className="flex">
              <p className="text-sm text-lightblack  ff_lato ">
                {" "}
                {items.price}
              </p>
              <p className="text-sm text-lightblack ml-3  ff_lato ">
                <del>{items.delPrice}</del>
              </p>
            </div>
          </div>
          <div>
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyBestCard;
