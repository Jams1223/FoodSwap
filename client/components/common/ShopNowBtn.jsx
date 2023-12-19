import Link from "next/link";
import React from "react";
import { NextIcon } from "../helper/Icons";

function ShopNowBtn() {
  return (
    <>
      <Link href={"/catalog"}>
        {" "}
        <button className="bg-black click_btn hover_btn_start text-white text-xs font-bold  rounded transition-all duration-200 ease-in group py-3 px-5 flex items-center">
          {" "}
          Shop Now{" "}
          <span className="ml-4 group-hover:translate-x-1 transition-all duration-200 ease-in">
            <NextIcon />
          </span>
        </button>
      </Link>
    </>
  );
}

export default ShopNowBtn;
