import Link from "next/link";
import React from "react";
import { RightIcon } from "../helper/Icons";

function GoToBlogBtn() {
    return (
        <>
            <Link
                href={"/blog&news"}
                passHref
                className=" text-white text- bg-primary py-[6px] px-3 text-[15px] font-bold flex items-center justify-center transition-all duration-300 click_btn hover_btn_start rounded-xl "
            >
                Go to Blog{" "}
                <span className="ml-2">
                    {" "}
                    <RightIcon />{" "}
                </span>
            </Link>
        </>
    );
}

export default GoToBlogBtn;
