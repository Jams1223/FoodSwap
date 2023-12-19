import Image from "next/image";
import React, { useState } from "react";
import { popularProducts } from "../helper/Helper";
import { HeartIcon, LikeHeartIcon } from "../helper/Icons";
import ItemAddBtn from "./ItemAddBtn";

function PopulerProductCard() {
    const [like, setLike] = useState(false);
    return (
        <>
            <div className="container flex flex-wrap xl:justify-between justify-center">
                {" "}
                {popularProducts.map((item, index) => (
                    <div
                        className="border-[0.5px] w-[265px] z-50 border-gray bg-white rounded-[18px] relative overflow-hidden hover-shadow transition-all duration-300 my-4 xl:mx-0 mx-4"
                        key={index}
                    >
                        <div className=" bg-[#67BCEE] z-[10] left-[-33px] top-[12px] absolute rotate-[314deg] w-[121.26px] flex justify-center items-center ">
                            <p className=" h-[36px] py-1 w-full text-center   text-white text-sm font-normal">{item.banertype}</p>
                        </div>
                        <div className="p-[12px] relative">
                            <div onClick={() => setLike((prevLike) => !prevLike)} className="absolute right-[9px] top-[10px] cursor-pointer ">
                                {like ? <HeartIcon /> : <LikeHeartIcon />}
                            </div>
                            <Image src={item.productimg} width={246} height={220} alt="populer product img" />
                        </div>
                        <div className="px-[20px] py-[18px] pt-[20px]">
                            <p className="font-normal text-xs text-lightblack">Category</p>
                            <p className="font-bold text-md text-lightblack mt-[12px]">{item.title}</p>
                            <div className="flex items-center my-3">
                                <Image src={item.ratingimg} width={128} height={24} alt="populer product img" />
                                <p className="text-xs text-lightblack ff_lato  ml-2">{item.ratingvalue}</p>
                            </div>
                            <p className="text-xs text-lightblack ff_lato "> {item.quantitycheck}</p>
                            <div className="mt-3 flex items-end ">
                                <div className="flex">
                                    <p className="text-sm text-lightblack  ff_lato "> {item.newPrice}</p>
                                    <p className="text-sm text-lightblack ml-3  ff_lato ">
                                        {" "}
                                        <del>{item.newPrice}</del>
                                    </p>
                                </div>
                                <ItemAddBtn />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PopulerProductCard;
