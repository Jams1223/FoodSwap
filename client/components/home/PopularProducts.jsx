import React, { useEffect, useState } from "react";

import PopularCardsList from "../common/PopularCardsList";
import { catalogproductsdata, popularProductsCategory } from "../helper/Helper";

const PopularProducts = () => {
  const [productarray, setProductArray] = useState(catalogproductsdata);
  const [selectedProduct, setSelectedProduct] = useState("All");

  const filterProducts = () => {
    if (selectedProduct === "All") {
      return setProductArray(catalogproductsdata);
    }
    const filterData = catalogproductsdata?.filter(
      (obj) => obj.slug === selectedProduct
    );
    setProductArray(filterData);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedProduct]);

  return (
    <>
      <div className="container py-3 sm:py-6">
        <div className="flex items-center flex-wrap justify-between">
          <h1 className="md:text-xxl text-md2 sm:text-lg text-primary font-semibold">
            <span className="text-lightblack">Popular </span> Products
          </h1>
          <ul className="list-none flex items-center md:ml-2 pl-0 flex-wrap">
            {popularProductsCategory.map((list, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSelectedProduct(list.category)}
                  className={`md:text-md text-sm p-2 relative transition-all duration-150 ease-in font-bold cursor-pointer 
                  ${
                    selectedProduct === list.category
                      ? "text-primary"
                      : "text-lightblack"
                  }`}
                >
                  {list.category}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <PopularCardsList productarray={productarray} />
    </>
  );
};

export default PopularProducts;
