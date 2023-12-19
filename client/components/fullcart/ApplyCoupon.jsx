import React from "react";
import { CuponIcon } from "../helper/Icons";

function ApplyCoupon() {
    return (
        <>
            {" "}
            <p className="text-md font-bold text-lightblack"> Apply Coupon</p>
            <p className="text-lightblack text-xs my-2 "> Using A Promo Code?</p>
            <div className="my-5 w-full border-[0.5px] rounded border-gray py-[13px] px-5">
                <div className="w-full   border-[#939393]">
                    <input type="text" className="outline-none   border-0 w-full text-lightblack   " placeholder="Enter coupon number" />
                </div>{" "}
            </div>
            <div className=" pt-2  ">
                <button className="w-full bg-lightblack text-white  text-xs font-bold flex items-center justify-center transition-all duration-300 hover:bg-opacity-80 py-[13px] rounded">
                    <span className="ml-3">
                        {" "}
                        <CuponIcon />{" "}
                    </span>{" "}
                    Apply
                </button>
            </div>
        </>
    );
}

export default ApplyCoupon;
