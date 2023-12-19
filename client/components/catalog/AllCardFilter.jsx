import React from "react";
import AllCategoriesSelect from "../common/AllCategoriesSelect";
import { SearchIcon } from "../common/Navbar";
import SearchArticlesInput from "../common/SearchArticlesInput";
import { GreenNextIcon } from "../helper/Icons";
import { FilterIcon, HamburgerMenu } from "../helper/Svg";

function AllCardFilter({ setSidebarOpen }) {
  const sortbynprice = [
    { name: "10" },
    { name: "15" },
    { name: "20" },
    { name: "25" },
    { name: "30" },
    { name: "35" },
    { name: "40" },
    { name: "45" },
    { name: "50" },
  ];
  const sortbyfeatured = [
    { name: "Featured" },
    { name: "Featured" },
    { name: "Featured" },
    { name: "Featured" },
    { name: "Featured" },
    { name: "Featured" },
    { name: "Featured" },
    { name: "Featured" },
  ];
  return (
    <>
      <div className="container flex flex-col sm:flex-row justify-between mt-3 sm:mt-14 py-4 items-center">
        <SearchArticlesInput />
        <div className="flex justify-between items-center sm:my-2 flex-wrap w-full sm:w-fit">
          <div className="flex items-center sm:ml-2 border-[0.5px] border-primary p-2 sm:p-3 my-3  rounded">
            <FilterIcon />
            <span className="text-[13px] sm:text-xs font-bold text-primary ml-1">
              {" "}
              Sort By
            </span>
            <div className="ml-3 w-11 sm:w-[60px]">
              <AllCategoriesSelect categories={sortbynprice} font="font-bold" />
            </div>
          </div>
          <div className="flex items-center sm:ml-2 border-[0.5px] border-primary p-2 sm:p-3 my-3   rounded">
            <FilterIcon />
            <span className="text-[13px] sm:text-xs font-bold text-primary ml-1">
              {" "}
              Sort By
            </span>
            <div className="ml-3 w-[90px] sm:w-[120px]">
              <AllCategoriesSelect
                categories={sortbyfeatured}
                font="font-bold"
              />
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer flex justify-end lg:hidden w-full sm:w-fit"
          onClick={() => setSidebarOpen(true)}
        >
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
}

export default AllCardFilter;
