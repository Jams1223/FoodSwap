import React from "react";
import WhatweProvideCard from "./WhatweProvideCard";
import { whatweprovidecarddata } from "../helper/Helper";

const WhatweProvide = () => {
  return (
    <>
      <section className="container pt-6 sm:pt-0">
        <h2 className="text-lightblack font-semibold text-lg sm:text-xxl text-center mb-28">
          What We Provide?
        </h2>

        <div className="flex flex-wrap  justify-center  sm:justify-around xl:justify-between items-center">
          {whatweprovidecarddata &&
            whatweprovidecarddata.map((obj, index) => (
              <WhatweProvideCard key={index} obj={obj} />
            ))}
        </div>
      </section>
    </>
  );
};

export default WhatweProvide;
