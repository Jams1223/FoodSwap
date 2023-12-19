import Link from "next/link";
import React from "react";

function FooterLinks({ item }) {
    return (
        <>
            <Link href={item.link}>
                <button className=" text-[12px] text-lightblack font-semibold py-1 px-[10px] bg-[#F2F0F0] rounded-xl transition-all duration-300 hover:bg-[#e6e3e3] sm:mr-4 mr-[10px] sm:my-3 my-[6px] ">
                    {item.name}
                </button>
            </Link>
        </>
    );
}

export default FooterLinks;
