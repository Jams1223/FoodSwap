import Image from "next/image";
import React from "react";
// import { toToastItem } from "react-toastify/dist/utils";

function BlogSidebar({ item }) {
    return (
        <div>
            <div className="flex justify-between mb-5 sm:mb-10">
                <div className="sm:max-w-[225px] max-w-[205px]     ">
                    {" "}
                    <p className="text-lightblack font-medium  text-[15px] pt-2">{item.tital}</p>{" "}
                    <div className="flex items-center mt-4">
                        <p className="text-primary text-[12px]   ff_open_sans"> {item.name}</p>
                        <p className="text-primary text-[12px]  ff_open_sans pl-4">{item.date}</p>
                    </div>
                </div>
                <Image className="object-cover rounded-xl ml-3" src={item.img} width={96} height={96} alt="Blog" />
            </div>
        </div>
    );
}

export default BlogSidebar;
