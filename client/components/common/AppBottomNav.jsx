import React, { useState } from "react";
import { FourDotIcon, HamburgerMenu, PhoneIcon } from "../helper/Svg";
import BrowseAllCatogorySelect from "./BrowseAllCatogorySelect";
import NavbarMenu from "./NavbarMenu";
import SidebarForMenu from "./SidebarForMenu";
import SocailMediaIcons from "./SocailMediaIcons";

const AppBottomNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="container flex items-center justify-between py-4">
        <div className="bg-primary rounded-[4px] p-3 hidden  lg:flex items-center">
          <span className="mr-3">
            <FourDotIcon />
          </span>
          <span className="text-white font-bold mr-3">Browse</span>

          <div className="w-[140px]">
            <BrowseAllCatogorySelect />
          </div>
        </div>

        <NavbarMenu />
        <div className="flex items-center ">
          <SocailMediaIcons />

          <div className="flex items-center border-l border-[#939393] ml-2 pl-2 sm:ml-4 sm:pl-4">
            <a>
              <PhoneIcon />
            </a>

            <div className="flex flex-col ml-2">
              <a
                className="text-lightblack text-sm sm:text-base ff_lato"
                href="tel:+(406) 555-0120"
              >
                (406) 555-0120
              </a>
              <a className="text-lightblack text-[10px] ff_lato">
                Mon - Fri: 9:00-20:00
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <span
            className="cursor-pointer lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <HamburgerMenu />
          </span>
        </div>
      </div>

      <SidebarForMenu
        setSidebarOpen={setSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );
};

export default AppBottomNav;
