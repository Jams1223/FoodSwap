import React from "react";
import { LeftWhiteIcon } from "../helper/Icons";

function EmptyCart() {
  return (
    <>
      <div className="mb-[150px] container flex flex-col text-center ">
        <h1 className="md:text-3xl text-xl font-bold text-black">
          {" "}
          Shopping Cart Is Empty
        </h1>
        <p className="text-sm text-lightblack ff_lato mb-8 mt-3">
          Go to shop and add to cart products you’d like to buy.
        </p>
        <div className="flex  justify-center">
          <button className="text-white text-xs font-bold flex justify-center items-center rounded bg-primary transition-all duration-300 hover:bg-opacity-80 py-[13px] px-5  ">
            <span className="mr-3">
              {" "}
              <LeftWhiteIcon />
            </span>
            Return to shop
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
