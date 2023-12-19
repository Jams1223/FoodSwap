import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewsListItem = ({ item }) => {
  return (
    <>
      <div className=" review_card border-b-[0.5px]  border-gray mt-[10px] sm:mt-[20px] ">
        <div className=" p-[9px] sm:p-[18px]    flex flex-col sm:flex-row">
          <div className=" flex flex-col items-center">
            <div className="rounded-[50%] bg-perfectwhite w-[80px]">
              <Image
                src={item.img}
                width={80}
                height={80}
                alt="product reviews img"
              />
            </div>
            <p className="ff_montserrat mt-[8px] sm:mt-[12px] font-semibold text-base leading-[21px]">
              {item.name}
            </p>
          </div>
          <div className="sm:ml-[32px]">
            <p className=" font-normal text-xs text-lightblack ff_montserrat ">
              {item.time}
            </p>
            <p className=" font-normal mt-[8px] sm:mt-[12px] text-xs sm:text-sm text-lightblack ff_lato leading-[19px]">
              {item.desc}
            </p>
            <div className="flex items-center">
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />

              <p className="text-xs text-lightblack ff_lato  ml-2">
                ({4}.7) Review
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsListItem;
