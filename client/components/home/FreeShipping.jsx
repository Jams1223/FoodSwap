import Image from "next/image";
import React from "react";
import ShopNowBtn from "../common/ShopNowBtn";

function FreeShipping() {
  return (
    <>
      <div className="bg-primary relative z-50 pl-[30px] py-[30px] sm:py-[93px]  xl:py-[115px] rounded-[8px] ">
        <div className="absolute bottom-0 right-0 z-[-1] max-w-[230px] sm:max-w-[250px] lg:max-w-none">
          <Image
            className="z-[0]"
            src="/assets/images/burger.png"
            width={245}
            height={428}
            alt="Free shipping img"
          />
        </div>
        <h2 className="font-semibold text-lg  text-white max-w-[180px] sm:max-w-[238px] leading-[40px]  ">
          Free shipping on order over $100
        </h2>
        <div className="pt-[32px]">
          <ShopNowBtn />
        </div>
      </div>
    </>
  );
}

export default FreeShipping;
