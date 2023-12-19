import Link from "next/link";
import React from "react";
import { WhiteCartIcon } from "../helper/Icons";

function TotalBill() {
  return (
    <div className=" border-[0.5px] border-gray rounded-lg p-5  w-full">
      <div className="flex items-center py-4 border-b border-dashed border-gray justify-between">
        <p className="sm:text-md text-sm font-bold text-lightblack   ">
          Subtotal :
        </p>
        <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  ">
          $72.00
        </p>
      </div>
      <div className="flex items-center py-4 border-b border-dashed border-gray justify-between">
        <p className="sm:text-md text-sm font-bold text-lightblack   ">
          Discount :
        </p>
        <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  ">
          -$0.00
        </p>
      </div>
      <div className="flex items-center py-4 border-b border-dashed border-gray justify-between">
        <p className="sm:text-md text-sm font-bold text-lightblack   ">
          Shipping :
        </p>
        <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  ">
          Free
        </p>
      </div>
      <div className="flex items-center py-4 border-b-[2px] border-gray justify-between">
        <p className="sm:text-md text-sm font-bold text-lightblack   ">
          Estimated Tax :
        </p>
        <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  ">
          $5.00
        </p>
      </div>
      <div className="flex items-center py-4  justify-between">
        <p className="sm:text-md text-sm font-bold text-lightblack   ">
          Total :
        </p>
        <p className="sm:text-md text-sm font-bold text-right text-lightblack   ">
          $78.00
        </p>
      </div>
      <div>
        <Link href={"/checkout"}>
          <button className="flex items-center justify-center w-full text-white text-xs font-bold py-[13px] transition-all duration-300 click_btn hover_btn_start rounded bg-primary   ">
            <span className="mr-2">
              <WhiteCartIcon />
            </span>
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TotalBill;
