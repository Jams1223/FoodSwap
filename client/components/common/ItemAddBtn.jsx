import Link from "next/link";
import React from "react";
import { CartIcon } from "../helper/Icons";

function ItemAddBtn() {
  return (
    <>
      <Link
        href={"/cart"}
        className="text-xs  font-bol text-white flex items-center  h-11 w-[103px] transition-all duration-300 hover:bg-opacity-70 bg-primary cursor-pointer justify-center ml-3 font-bold rounded"
      >
        <span className="mr-3">
          <CartIcon />
        </span>
        Add
      </Link>
    </>
  );
}

export default ItemAddBtn;
