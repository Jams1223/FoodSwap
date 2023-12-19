import React from "react";
import Pagination from "../common/Pagination";
import { reviewsdata } from "../helper/Helper";
import ReviewForm from "./ReviewForm";
import ReviewsListItem from "./ReviewsListItem";

const ProductReviews = () => {
  return (
    <div className="p-[10px] sm:p-[20px]">
      <div className="flex justify-between flex-wrap">
        <div className="lg:max-w-[500px] xl:max-w-[650px] w-full">
          <h2 className="text-lightblack font-bold text-base sm:text-md ">
            Customer questions & answers
          </h2>
          <div>
            {reviewsdata.map((item, index) => (
              <ReviewsListItem key={index} item={item} />
            ))}
          </div>
          <Pagination />
        </div>
        <div className="lg:max-w-[400px] mt-5 lg:mt-0 xl:max-w-[450px] md:ml-[10px] w-full">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
