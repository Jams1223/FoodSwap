import React from "react";
import AllCategoriesSelect from "./AllCategoriesSelect";
import SidebarForMenuList from "./SidebarForMenuList";

const SidebarForMenu = ({ isSidebarOpen, setSidebarOpen }) => {
  const groceryitems = [
    {
      heading: "Home",
      link: "/",
    },
    {
      heading: "About",
      link: "/about-us",
    },
    {
      heading: "Shop",
      link: "/catalog",
    },
    {
      heading: "Blog",
      link: "/blog&news",
    },
    {
      heading: "Our team",
      link: "/ourteam",
    },
    {
      heading: "Contact",
      link: "/contact",
    },
  ];

  const categories = [
    { name: "All recipes" },
    { name: "Burgers" },
    { name: "Drinks" },
    { name: "Indian Food" },
    { name: "Pizza's" },
    { name: "Mexican" },
  ];

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="z-10 fixed left-0 w-full h-full bg-black opacity-10 top-0 50 transition-all duration-300 ease-in"
        ></div>
      )}
      <div
        className={`h-screen max-h-full overflow-auto xl:overflow-visible z-[100] w-full p-3 max-w-[260px] fixed top-0 transition-all duration-200 ease-in  xl:hidden ${
          isSidebarOpen ? "left-0  bg-white" : "-left-[260px]"
        }`}
      >
        {groceryitems &&
          groceryitems.map((item, index) => (
            <SidebarForMenuList item={item} key={index} />
          ))}

        <div className="w-[230px]">
          <AllCategoriesSelect categories={categories} font="font-bold" />
        </div>
      </div>
    </>
  );
};

export default SidebarForMenu;
