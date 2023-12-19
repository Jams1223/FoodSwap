import React from "react";
import ProductCard from "../home/ProductCard";

function PopularCardsList({ productarray }) {
  return (
    <>
      <div className="container grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-5">
        {productarray && productarray.length > 0
          ? productarray.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : "No Results found!"}
      </div>
    </>
  );
}

export default PopularCardsList;
