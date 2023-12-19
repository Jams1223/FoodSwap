import React from "react";
import TeamCard from "./TeamCard";
import { ourteamdata } from "../helper/Helper";

function OurTeam() {
  return (
    <>
      <div className="container my-5 sm:my-10">
        <div className="text-center">
          <h1 className="md:text-xxl text-lg text-lightblack font-semibold   ">
            Our Team
          </h1>
          <p className="my-3 sm:my-5 text-lightblack max-w-[553px] mx-auto text-center ff_lato text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="py-1 sm:py-4 flex flex-wrap xl:justify-between justify-around">
          {ourteamdata.map((item, index) => (
            <TeamCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OurTeam;
