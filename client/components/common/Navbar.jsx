import Link from "next/link";
import React, { useState } from "react";
import { SearchIcon } from "../helper/Icons";
import {
  AccountIcon,
  CartIcon,
  FourDotIcon2,
  WishListIcon,
} from "../helper/Svg";
import AllCategoriesSelect from "./AllCategoriesSelect";

const Navbar = () => {
  const categories = [
    { name: "All recipes" },
    { name: "Burgers" },
    { name: "Drinks" },
    { name: "Indian Food" },
    { name: "Pizza's" },
    { name: "Mexican" },
  ];

  const [isShowSearch, setShowSearch] = useState(false);
  return (
    <>
      <nav className="container flex items-center justify-between py-2 sm:py-4 relative">
        {isShowSearch && (
          <div className="flex items-center justify-between absolute top-0 left-0 w-full bg-white shadow-sm py-4  px-3 z-30">
            <input
              className="w-full outline-none border border-gray h-[35px] px-3 py-1 rounded-sm"
              type="text"
              placeholder="Search..."
            />
            <span
              className="cursor-pointer absolute right-6 "
              onClick={() => setShowSearch(false)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M3.63992 2.27L7.49992 6.13L11.3399 2.29C11.4247 2.19972 11.5269 2.12749 11.6403 2.07766C11.7537 2.02783 11.8761 2.00141 11.9999 2C12.2651 2 12.5195 2.10536 12.707 2.29289C12.8946 2.48043 12.9999 2.73478 12.9999 3C13.0023 3.1226 12.9795 3.24439 12.9331 3.35788C12.8866 3.47138 12.8175 3.57419 12.7299 3.66L8.83992 7.5L12.7299 11.39C12.8947 11.5512 12.9914 11.7696 12.9999 12C12.9999 12.2652 12.8946 12.5196 12.707 12.7071C12.5195 12.8946 12.2651 13 11.9999 13C11.8725 13.0053 11.7453 12.984 11.6265 12.9375C11.5078 12.8911 11.3999 12.8204 11.3099 12.73L7.49992 8.87L3.64992 12.72C3.56542 12.8073 3.46448 12.8769 3.35292 12.925C3.24136 12.9731 3.12138 12.9986 2.99992 13C2.7347 13 2.48035 12.8946 2.29281 12.7071C2.10528 12.5196 1.99992 12.2652 1.99992 12C1.99759 11.8774 2.02033 11.7556 2.06676 11.6421C2.11319 11.5286 2.18233 11.4258 2.26992 11.34L6.15992 7.5L2.26992 3.61C2.1051 3.44876 2.00846 3.23041 1.99992 3C1.99992 2.73478 2.10528 2.48043 2.29281 2.29289C2.48035 2.10536 2.7347 2 2.99992 2C3.23992 2.003 3.46992 2.1 3.63992 2.27Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        )}

        <Link href="/" passHref className="text-lg sm:text-xxl font-semibold">
          Food Swap
        </Link>

        <div className="border-lightSky rounded-[4px] border-[1px] py-2 px-3 h-[44px] hidden xl:flex items-center">
          <div className="w-[140px] border-r border-[#939393] mr-4">
            <AllCategoriesSelect categories={categories} font="font-bold" />
          </div>
          <input
            className="w-100 outline-none"
            type="text"
            placeholder="Search..."
          />
          <span className="cursor-pointer">
            <SearchIcon />
          </span>
        </div>

        <div className="xl:hidden" onClick={() => setShowSearch(true)}>
          <SearchIcon />
        </div>

        <div className="hidden sm:flex shadow-dropdown rounded-[4px] bg-white w-[180px] items-center px-3 py-2 h-[44px]">
          <div className="mr-2 w-[18px] h-[18px]">
            <FourDotIcon2 />
          </div>

          <div className="w-[170px]">
            <AllCategoriesSelect categories={categories} font="font-bold" />
          </div>
        </div>

        <div className="flex items-center">
          <Link passHref href="/account/wishlist" className="flex items-center">
            <span className="relative mr-1">
              <WishListIcon />
              <span className="bg-primary flex items-center justify-center w-4 h-4 rounded-full absolute -right-1 -top-[6px] text-white text-[10px]">
                1
              </span>
            </span>

            <span className="text-lightblack hidden sm:inline-block">
              Wishlist{" "}
            </span>
          </Link>
          <Link passHref href="/cart" className="flex items-center mx-4">
            <span className="relative mr-1">
              <CartIcon />
              <span className="bg-primary flex items-center justify-center w-4 h-4 rounded-full absolute -right-1 -top-[6px] text-white text-[10px]">
                1
              </span>
            </span>

            <span className="text-lightblack  hidden sm:inline-block">
              Cart{" "}
            </span>
          </Link>
          <Link passHref href="/account/profile" className="flex items-center">
            <span className="mr-1">
              <AccountIcon />
            </span>

            <span className="text-lightblack  hidden sm:inline-block">
              Account{" "}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
