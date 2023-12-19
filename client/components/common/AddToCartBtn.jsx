import Link from "next/link";
import React from "react";
import { WhiteCartIcon } from "../helper/Icons";

function AddToCartBtn() {
  return (
    <>
      <Link href={"/cart"}>
        <button className="py-3 flex justify-center w-full text-white text-xs font-bold items-center bg-primary transition-all duration-300 click_btn hover_btn_start rounded ">
          <span className="mr-2">
            <WhiteCartIcon />{" "}
          </span>
          Add To Cart
        </button>
      </Link>
    </>
  );
}

export default AddToCartBtn;
