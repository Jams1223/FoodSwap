import Link from "next/link";
import React from "react";

const NavbarMenu = () => {
  return (
    <>
      <div className="hidden lg:flex space-x-2 xl:space-x-5 items-center ">
        <Link
          href={"/"}
          className="text-xs cursor-pointer font-bold text-lightblack py-3 mr-2"
        >
          Home
        </Link>
        <Link
          href={"/about-us"}
          passHref
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          About
        </Link>
        <Link
          href={"/catalog"}
          className="text-xs cursor-pointer font-bold text-lightblack py-3 mr-2"
        >
          Shop
        </Link>

        <Link
          href={"/about-us"}
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          Our team
        </Link>

        <Link
          href={"/about-us"}
          passHref
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default NavbarMenu;
