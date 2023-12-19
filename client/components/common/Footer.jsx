import Link from "next/link";
import React from "react";
import { footerlinksdata } from "../helper/Helper";
import { CallIcon, EmailIcon, LocationIcon, WatchIcon } from "../helper/Icons";
import FooterLinks from "./FooterLinks";

import SocailMediaIcons from "./SocailMediaIcons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="container mx-auto   sm:mt-[67px] xl:px-0 px-3 pt-[20px] sm:pt-[60px]">
        <div className="flex justify-between flex-wrap">
          <div className="md:w-[30%] sm:w-[40%] ">
            <Link href="/" passHref className="text-xxl font-semibold">
              Food Swap
            </Link>
            <div className="mt-[20px] sm:mt-[37px] w-[130px] flex justify-between items-center">
              <SocailMediaIcons />
            </div>
            <div className="mt-[15px] sm:mt-[30px]">
              <Link href="tel:(684)555-0102" className="flex items-center">
                <span className="mr-[10px]">
                  <CallIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-lightblack">
                  (684) 555-0102
                </p>
              </Link>
            </div>
            <div className=" mt-[15px] sm:mt-[25px]">
              <Link href="mailto:name@email.com " className="flex items-center">
                <span className="mr-[10px]">
                  <EmailIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-lightblack">
                  name@email.com
                </p>
              </Link>
            </div>
            <div className=" mt-[15px] sm:mt-[25px] flex items-center">
              <span className="mr-[10px]">
                <LocationIcon />
              </span>
              <p className="ff_lato font-normal text-xs text-lightblack">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>
            <div className=" mt-[15px] sm:mt-[25px] flex items-center">
              <span className="mr-[10px]">
                <WatchIcon />
              </span>
              <p className="ff_lato font-normal text-xs text-lightblack">
                10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-[70%] sm:w-[60%] ">
            <div className="flex justify-between flex-wrap ">
              <div className="flex justify-between w-full md:w-[23%]  sm:w-[50%]  mt-5 md:mt-0">
                <div className="">
                  <h4 className="font-semibold text-base ff_poppins    text-lightblack ">
                    Connections
                  </h4>
                  <ul>
                    <Link href="/about-us">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        About Us
                      </li>
                    </Link>
                    <Link href="/">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Service
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Case Studies
                      </li>
                    </Link>
                    <Link href="/blog&news">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Blog
                      </li>
                    </Link>
                    <Link href="/contact">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between w-full md:w-[23%] sm:w-[50%]  mt-5 md:mt-0">
                <div className="">
                  <h4 className="font-semibold text-base ff_poppins    text-lightblack ">
                    Earnings
                  </h4>
                  <ul>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Become an Affiliate
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Advertise your product
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Sell on Market
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between w-full sm:w-[23%]  mt-5 md:mt-0">
                <div className="">
                  <h4 className="font-semibold text-base ff_poppins    text-lightblack ">
                    Account
                  </h4>
                  <ul>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Become an Affiliate
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Advertise your product
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="  text-xs ff_open_sans mt-[10px] duration-300 transition-all hover:text-primary   text-lightblack ">
                        Sell on Market
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 ">
              <p className=" text-base font-semibold text-primary  ">
                Product tags
              </p>
              <div className="flex flex-wrap">
                {footerlinksdata.map((item, index) => (
                  <FooterLinks item={item} key={index} />
                ))}
              </div>
            </div>
            <div className="w-full   mt-2  h-[1px] bg-gray"></div>{" "}
            <div className="my-7">
              <div className=" flex justify-between items-center flex-wrap">
                <p className="font-normal mr-2 sm:-mr-0 mt-[10px] text-xs ff_lato text-lightblack  py-3">
                  Copyright © {year}{" "}
                  <span className="text-primary">Food Swap</span>. All Right
                  Reserved.
                </p>
                <div className="flex items-center mt-[10px]  mr-2 sm:-mr-0  py-3">
                  <Link
                    href="tel:(684)555-0102"
                    className="flex group items-center"
                  >
                    <span className="mr-[10px]">
                      <CallIcon />
                    </span>
                    <p className="ff_lato font-normal  group-hover:text-primary text-xs text-lightblack">
                      (684) 555-0102
                    </p>
                  </Link>
                  <Link
                    href="tel:(684)555-0102"
                    className="flex group items-center ml-[24px]"
                  >
                    <span className="mr-[10px]">
                      <CallIcon />
                    </span>
                    <p className="ff_lato font-normal  group-hover:text-primary text-xs text-lightblack">
                      (684) 555-0102
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
