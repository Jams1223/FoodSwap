import React from "react";
import ShopNowBtn from "./ShopNowBtn";

const VegetablesCard = ({ item }) => {
  return (
    <div
      className={`bg-[${item.color}] overflow-hidden mt-[30px] after:absolute after:bg-primary/20 after:w-full after:h-full after:top-0 after:left-0 after:rounded-md sm:mr-2 md:mr-[30px] xl:mr-0 w-full sm:w-[300px] lg:w-[370px] rounded-[8px] z-50 relative pb-[25px] sm:pb-[30px] pl-[20px] sm:pl-4 bg-white  fruit-card-hover  border-[0.5px] border-[#939393] min-h-[232px]`}
    >
      <div className="z-[-1] absolute right-0 top-0">
        <img className="z-[0]" src={item.img} alt="shop categories img" />
      </div>
      <p className="font-bold max-w-[200px] pt-4 text-md text-lightblack  leading-[25px] relative z-10">
        {item.title}
      </p>
      <div className="mt-4 relative z-10">
        <ShopNowBtn />
      </div>
    </div>
  );
};

export default VegetablesCard;
