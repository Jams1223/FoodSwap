import { DotsIcon, LeftIcon } from "../helper/Icons";
import React, { useState } from "react";
import { catalogproductsdata, popularProducts } from "../helper/Helper";
import { HeartIcon, LikeHeartIcon } from "../helper/Icons";
import ItemAddBtn from "../common/ItemAddBtn";
import Image from "next/image";
import ProductCard from "../home/ProductCard";
const WishList = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <section className="container p-4 sm:p-6  lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)]  rounded-md flex flex-col    ">
        <div className="flex items-center justify-between  mb-5 sm:mb-10">
          <div className="flex items-center justify-start">
            <span className="lg:hidden cursor-pointer">
              <LeftIcon />
            </span>
            <h1 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0   text-center">
              Wishlist
            </h1>
          </div>
          <div className="flex justify-center items-center  gap-x-[3px] w-[40px] h-[40px] border border-black rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-gray ml-auto ">
            <DotsIcon />
            <DotsIcon />
            <DotsIcon />
          </div>
        </div>
        <div className="pb-10">
          <div className="flex flex-nowrap overflow-auto w-full max-w-full">
            <button className="px-4 py-2 border-[1.5px] border-primary rounded-full mr-3 text-primary font-medium whitespace-nowrap transition-all duration-150 ease-in hover:bg-primary hover:text-white ">
              All receipe
            </button>
            <button className="px-4 py-2 border-[1.5px] border-primary rounded-full mr-3 text-primary font-medium whitespace-nowrap transition-all duration-150 ease-in hover:bg-primary hover:text-white ">
              Burger
            </button>
            <button className="px-4 py-2 border-[1.5px] border-primary rounded-full mr-3 text-primary font-medium whitespace-nowrap transition-all duration-150 ease-in hover:bg-primary hover:text-white ">
              Sandwich
            </button>
            <button className="px-4 py-2 border-[1.5px] border-primary rounded-full mr-3 text-primary font-medium whitespace-nowrap transition-all duration-150 ease-in hover:bg-primary hover:text-white ">
              Pizza
            </button>
            <button className="px-4 py-2 border-[1.5px] border-primary rounded-full mr-3 text-primary font-medium whitespace-nowrap transition-all duration-150 ease-in hover:bg-primary hover:text-white ">
              Mexican
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {catalogproductsdata &&
            catalogproductsdata.length > 0 &&
            catalogproductsdata.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
        </div>
      </section>
    </>
  );
};

export default WishList;
