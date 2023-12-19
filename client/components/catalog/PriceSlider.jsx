import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { LeftArrowIcon } from "../helper/Svg";

const PriceSlider = () => {
  const [minValue, set_minValue] = useState(20);
  const [maxValue, set_maxValue] = useState(80);
  const onSliderChangeHandler = (e) => {
    set_minValue(e[0]);
    set_maxValue(e[1]);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b  border-gray mt-10 mb-4 pb-3">
        <h4 className="text-lightblack font-bold text-md">Fill by price</h4>
        <LeftArrowIcon />
      </div>
      <div className="flex flex-col ff_lato">
        <Slider
          range={true}
          allowCross={false}
          value={[minValue, maxValue]}
          defaultValue={[minValue, maxValue]}
          className="slider-range"
          onChange={onSliderChangeHandler}
        />
        <div className="flex mt-5 justify-between">
          <input
            value={minValue}
            placeholder="Min."
            onChange={(e) => set_minValue(e.target.value)}
            className="max-w-[calc(50%-3px)] text-lightblack text-xs px-6 py-2 h-[42px] border-[#F2F0F0] border-[1px] rounded-[4px] outline-none"
            type="text"
          />
          <input
            value={maxValue}
            placeholder="Max."
            onChange={(e) => set_maxValue(e.target.value)}
            className="max-w-[calc(50%-3px)] text-lightblack text-xs px-6 py-2 h-[42px] border-[#F2F0F0] border-[1px] rounded-[4px] outline-none"
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
