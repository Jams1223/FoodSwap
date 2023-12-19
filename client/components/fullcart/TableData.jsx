import React, { useState } from "react";
import { tabledata } from "../helper/Helper";
import { DeletIcon, DownArrowIcon, UpArrowIcon } from "../helper/Icons";

function TableData() {
  const [quantity, setQuantiy] = useState(1);
  function handleIncrease() {
    setQuantiy(quantity + 1);
  }

  function handleDecrease() {
    // IF QUANITY IS LESS THAN 1 DON'T CHANGE QUANTIY VALUE
    if (quantity > 1) {
      setQuantiy(quantity - 1);
    }
  }

  return (
    <>
      {tabledata.map((item, index) => (
        <tr
          key={index}
          className="sm:px-4 px-2   border-dashed border-[#939393] border-b-[1px] "
        >
          <td className="py-4 sm:py-6 sm:px-3 px-1 ">
            <div className="flex items-center">
              <div className="sm:w-[80px] border-[1px] border-gray rounded-[4px] sm:h-[80px] w-[60px] h-[60px] rounded ">
                <img src={item.img} alt="" />
              </div>
              <div className="ml-3 sm:ml-5">
                <p className="text-lightblack sm:text-md text-xs font-bold  ">
                  {item.title}
                </p>
                <p className="text-lightblack sm:text-sm text-[10px]  ">
                  Category :{item.category}
                </p>
                <p className="text-lightblack sm:text-sm text-[10px]     ">
                  Piece :{item.weight}
                </p>
              </div>
            </div>
          </td>
          <td className="ff_lato sm:text-sm text-[10px] text-lightblack sm:px-3 px-1 ">
            {item.price}
          </td>
          <td className="sm:px-3 px-1">
            <div className="flex items-center sm:py-[11px] py-[8px] mt-[10px] px-[10px] border-[0.5px] border-gray rounded-[4px] sm:w-[88px] w-[60px]  mr-[20px] justify-center">
              <p className="flex items-center font-bold text-[10px] sm:text-md text-lightblack  ">
                <span className="ml-1   ">{quantity}</span>
              </p>
              <div className="flex flex-col ml-[10px] w-[24px]">
                <span onClick={handleIncrease} className="cursor-pointer">
                  <UpArrowIcon />
                </span>
                <span
                  className="mt-[6px] cursor-pointer"
                  onClick={handleDecrease}
                >
                  <DownArrowIcon />
                </span>
              </div>
            </div>
          </td>
          <td className="ff_lato sm:text-sm text-[10px] text-lightblack sm:px-3 px-1">
            {item.price}
          </td>
          <td className="sm:px-3 px-1">
            <span className="cursor-pointer ">
              <DeletIcon />
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableData;
