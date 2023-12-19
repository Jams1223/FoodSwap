import Image from "next/image";
import React from "react";
import { LeftArrowIcon } from "../helper/Svg";

const CategoryCatalog = () => {
  const catalogocategory = [
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Burgers",
      item: 12,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Fried Chicken",
      item: 87,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Pizzas",
      item: 35,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Tacos",
      item: 63,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Hot Dogs",
      item: 27,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Sandwiches",
      item: 77,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Ice Cream",
      item: 44,
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzcs0YIKSsRqkt2IVRoef8TiKiuACfbpLbg&usqp=CAU",
      cateogryname: "Donuts",
      item: 45,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between border-b  border-gray mb-4 pb-3">
        <h4 className="text-lightblack font-bold text-md">Category</h4>
        <LeftArrowIcon />
      </div>
      {catalogocategory &&
        catalogocategory.map((obj, index) => (
          <div
            key={index}
            className="mb-3 ff_lato bg-white border rounded border-whisperblue p-2 flex  items-center justify-between transition-all duration-200 ease-in hover:shadow-categorycard cursor-pointer"
          >
            <div className="flex items-center ">
              <Image
                src={obj.icon}
                width={32}
                height={32}
                alt="cateegory img"
              />
              <p className="text-base text-lightblack ml-2">
                {obj.cateogryname}
              </p>
            </div>
            <span className="text-xsm text-lightblack bg-whisperblue rounded-full flex justify-center items-center w-6 h-6">
              {obj.item}
            </span>
          </div>
        ))}
    </>
  );
};

export default CategoryCatalog;
