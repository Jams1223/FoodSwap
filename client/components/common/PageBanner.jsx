import React from "react";
import { GreyNextIcon, HomeIcon } from "../helper/Icons";

const PageBanner = ({ heading, page }) => {
  return (
    <>
      <div className="sm:h-[270px] h-[150px] flex flex-col justify-center">
        <div className="container">
          <h1 className="md:text-3xl text-xl text-lightblack font-bold ">
            {heading}
          </h1>
          <div className="flex items-center my-5">
            <div className="flex items-center cursor-pointer">
              <span>
                <HomeIcon />
              </span>
              <p className="text-primary ff_lato text-sm ml-1 "> Home</p>
            </div>
            <div className="mx-3">
              <GreyNextIcon />
            </div>
            <p className="text-lightblack ff_lato text-sm ml-1 cursor-pointer    ">
              {page}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
