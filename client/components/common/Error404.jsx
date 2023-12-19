import Link from "next/link";
import React from "react";
import { LeftWhiteIcon } from "../helper/Icons";

function Error404() {
    return (
        <div className="container sm:my-10 my-6">
            <div className="flex sm:flex-row flex-col items-center justify-between">
                <div className="sm:w-[435px] order-2 sm:order-1 pt-10 sm:pt-0 sm:text-left text-center ">
                    <h1 className="lg:text-3xl text-lg text-lightblack font-bold leading-[120%] ">
                        We Cannot <br /> <span className="text-primary "> Find This Page...</span>
                    </h1>
                    <p className="text-lightblack text-sm ff_lato my-4 pb-6"> Probably, this page has been deleted.</p>
                    <div className="mb-6 flex sm:justify-start justify-center  ">
                        <Link href={"/"}>
                            <button className=" px-5   py-[13px] text-white flex items-center justify-center font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded   ">
                                <LeftWhiteIcon />
                                <span className="ml-2">Back to Homepage</span>
                            </button>{" "}
                        </Link>
                    </div>
                </div>
                <div className="mt-8 order-1 sm:order-2">
                    <img src="/assets/images/error.png" alt="" className="w-full px-8 sm:px-0" />
                </div>
            </div>
        </div>
    );
}

export default Error404;
