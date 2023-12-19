import React from "react";
import ReactStars from "react-rating-stars-component";
import ItemAddBtn from "../common/ItemAddBtn";
import Timer from "./Timer";

const HotPromotionListItem = ({ obj }) => {
  return (
    <>
      <div>
        <div className="relative lg:mr-4 flex flex-col items-center ">
          <img
            src={obj.imageURL}
            alt="img "
            className="w-100 min-h-[370px] rounded-[8px] sm:min-h-[470px] object-cover"
          />
          <div className="absolute sm:w-[450px] w-[90%] flex flex-col bottom-8 ">
            <Timer />
            <div className="bg-white sm:p-5 p-3 rounded-[8px]">
              <p className="sm:text-md text-base text-lightblack font-bold  ">
                Craving chinese food? Find local chinese food now!
              </p>
              <div className="flex items-center my-1 sm:my-4">
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />

                <p className="text-xs text-lightblack ff_lato  ml-2">4</p>
              </div>
              <p className="text-xs text-lightblack ff_lato ">
                Burgers, Mexican, Pizza&apos;s
              </p>
              <div className="mt-3 flex items-end justify-between ">
                <div className="flex">
                  <p className="text-sm text-lightblack  ff_lato "> $30.00</p>
                  <p className="text-sm text-lightblack ml-3  ff_lato ">
                    <del>$30.00</del>
                  </p>
                </div>
                <ItemAddBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotPromotionListItem;
