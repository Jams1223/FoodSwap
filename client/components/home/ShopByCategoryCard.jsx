import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NextIcon } from "../helper/Icons";

const ShopByCategoryCard = ({ item }) => {
  return (
    <>
      <div
        className={`bg-[${item.color}] after:absolute after:bg-black/30 after:w-full after:h-full after:top-0 after:left-0 after:rounded-md mt-[10px] sm:mt-[30px]  sm:mr-2 md:mr-[30px] xl:mr-0 w-full sm:w-[300px] lg:w-[370px] rounded-[8px] z-50 relative pb-[20px] sm:pb-[30px] pl-[20px] sm:pl-[30px] fruit-card-hover  min-h-[232px] `}
      >
        <div className="z-[-1] absolute right-0 top-0">
          <Image
            className="z-[0]"
            src={item.img}
            width={300}
            height={230}
            alt="shop categories img"
          />
        </div>
        <p className="font-bold pt-[38px]  text-md text-white max-w-[238px] leading-[25px] relative z-10">
          {item.title}
        </p>
        <div className="mt-4 relative z-10">
          <Link href={"/catalog"}>
            <button className="bg-primary text-white text-xs font-bold  rounded transition-all duration-200 ease-in group click_btn hover_btn_start  py-3 px-5 flex items-center">
              Click to order!
              <span className="ml-4 group-hover:translate-x-1 transition-all duration-200 ease-in">
                <NextIcon />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopByCategoryCard;
