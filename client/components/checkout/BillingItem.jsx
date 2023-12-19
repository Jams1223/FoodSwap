import React from "react";
import { tabledata } from "../helper/Helper";

function BillingItem() {
    return (
        <>
            <div className=" border-[0.5px] border-gray rounded-lg p-5  w-full ">
                {tabledata.map((item, index) => (
                    <div className="flex items-center py-4 border-b border-dashed border-gray justify-between" key={index}>
                        <div className="flex items-center">
                            <div className="w-[80px] h-[80px] rounded ">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="ml-3 sm:ml-5">
                                <p className="text-lightblack sm:text-md text-sm font-bold  "> {item.title}</p>{" "}
                                <p className="text-lightblack sm:text-sm text-xsm     ">Weight :{item.weight}</p>
                            </div>
                        </div>
                        <p className="ff_lato sm:text-sm text-xs text-lightblack px-3 "> {item.price}</p>
                    </div>
                ))}
                <div className="flex items-center py-4 border-b border-dashed border-gray justify-between">
                    <p className="sm:text-md text-sm font-bold text-lightblack   "> Subtotal :</p>
                    <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  "> $480.00</p>
                </div>
                <div className="flex items-center py-4 border-b border-dashed border-gray justify-between">
                    <p className="sm:text-md text-sm font-bold text-lightblack   "> Shipping : </p>
                    <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  "> Free </p>
                </div>
                <div className="flex items-center py-4 border-b  border-gray justify-between">
                    <p className="sm:text-md text-sm font-bold text-lightblack   "> Estimated Tax : </p>
                    <p className="text-right text-lightblack sm:text-sm text-xs ff_lato  "> $5.00 </p>
                </div>{" "}
                <div className="flex items-center py-4  justify-between">
                    <p className="sm:text-md text-sm font-bold text-lightblack   "> Total : </p>
                    <p className="sm:text-md text-sm font-bold text-right text-lightblack   "> $78.00 </p>
                </div>
            </div>
        </>
    );
}

export default BillingItem;
