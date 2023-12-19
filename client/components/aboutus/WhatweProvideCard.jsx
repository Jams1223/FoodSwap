import Image from "next/image";
import React from "react";

const WhatweProvideCard = ({ obj }) => {
  return (
    <>
      <article className="mb-24 w-full sm:w-[340px] lg:w-[370px] h-[272px] border-primary text-center rounded-lg border-[0.5px] p-6 flex flex-col items-center justify-between hover:shadow-md hover:shadow-primary group transition-all duration-200 ease-in">
        <span className="-mt-20 mx-auto">
          <span className=" transition-all duration-200 ease-in group-hover:shadow-what-weprovide-card bg-white border-primary mx-auto w-[108px] h-[108px] flex items-center justify-center rounded-full border-[0.5px] ">
            <Image
              src={obj.imageURL}
              width={60}
              height={60}
              alt="Whate we provide img"
            />
          </span>
        </span>
        <div>
          {" "}
          <h4 className="text-lightblack font-bold text-md ">{obj.heading}</h4>
          <p className="text-lightblack text-xs ff_lato my-4">
            {obj.description}
          </p>
          <button className="bg-perfectwhite w-[116px] h-11 rounded-[4px] text-primary font-bold hover:bg-primary hover:text-perfectwhite  transition-all duration-200 ease-in">
            Read more
          </button>
        </div>
      </article>
    </>
  );
};

export default WhatweProvideCard;
