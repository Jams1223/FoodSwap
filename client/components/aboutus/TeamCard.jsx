import React from "react";
import {
  FacebookWhiteIcon,
  InstgramWhiteIcon,
  TwitterWhiteIcon,
} from "../helper/Icons";

function TeamCard({ item }) {
  return (
    <>
      <div className="rounded-lg  sm:w-[265px] w-[44%]       hover-overlay relative  flex flex-col justify-end duration-300 transition-all ease-in-out m-2 xl:my-3 md:my-5 my-3">
        <div>
          <img src={item.img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute  w-full   mb-10  duration-300 transition-all team-info  opacity-0 z-20 ">
          <p className="text-md font-bold text-white text-center ">
            {item.name}
          </p>
          <p className="text-xs ff_lato font-bold text-white text-center my-1 ">
            {item.rank}
          </p>
          <div className="flex items-center justify-center mt-4 ">
            <span className="mx-1 cursor-pointer  ">
              <FacebookWhiteIcon />
            </span>
            <span className="mx-1 cursor-pointer  ">
              <InstgramWhiteIcon />
            </span>
            <span className="mx-1 cursor-pointer  ">
              <FacebookWhiteIcon />
            </span>
            <span className="mx-1 cursor-pointer  ">
              <TwitterWhiteIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
