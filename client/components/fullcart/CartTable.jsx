import React from "react";
import Tablebtn from "./Tablebtn";
import TableData from "./TableData";

function CartTable() {
  return (
    <>
      <div className="overflow-x-scroll remove-scrlloer w-full md:w-auto">
        <div className="xl:w-[770px] lg:w-[684px] md:w-[740px] min-w-[340px]  w-[100%]   ">
          <table className="  text-left w-full  ">
            <thead>
              <tr className="border-b ">
                <th className="sm:text-md text-sm pb-1  font-bold text-lightblack sm:px-3  ">
                  Product
                </th>
                <th className="sm:text-md text-sm  pb-1  font-bold text-lightblack sm:px-3 ">
                  Price
                </th>
                <th className="sm:text-md text-sm pb-1   font-bold text-lightblack sm:px-3 ">
                  Quantity
                </th>
                <th className="sm:text-md text-sm  pb-1   font-bold text-lightblack sm:px-3 ">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <TableData />
            </tbody>
          </table>
          <div className="  ">
            <Tablebtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTable;
