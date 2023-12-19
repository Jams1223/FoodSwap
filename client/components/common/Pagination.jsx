import Link from "next/link";
import { PagingArrowIcon } from "../helper/Icons";
import React from "react";

const Pagination = () => {
  return (
    <>
      <ul className="mt-3 sm:mt-5 max-w-[307px] flex justify-between w-full">
        <Link href="#">
          <li className="font-bold text-xs text-white flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-spacegrey rounded-[50%]">
            1
          </li>
        </Link>
        <Link href="#">
          <li className="font-bold text-xs text-lightblack flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-whisperblue rounded-[50%]">
            2
          </li>
        </Link>
        <Link href="#">
          <li className="font-bold text-xs text-lightblack flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-whisperblue rounded-[50%]">
            3
          </li>
        </Link>
        <Link href="#">
          <li className="font-bold text-xs text-lightblack flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-[50%]">
            ...
          </li>
        </Link>
        <Link href="#">
          <li className="font-bold text-xs text-lightblack flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-whisperblue rounded-[50%]">
            8
          </li>
        </Link>
        <Link href="#">
          <li className="font-bold text-xs text-white flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-spacegrey rounded-[50%]">
            <PagingArrowIcon />
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Pagination;
