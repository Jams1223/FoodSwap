import Link from "next/link";
import React from "react";

function ShopCatCard({ item }) {
  return (
    <>
      <div>
        <Link href={item.link}>
          <div
            className={`sm:m-4 m-3 sm:w-[120px] w-[90px] sm:h-[115px] h-[90px]
            rounded-lg  transition-all duration-300 border border-primary hover:shadow-lg hover:bg-white ${item.color} flex flex-col justify-center items-center text-center   
          `}
          >
            <div>
              <img
                src={item.img}
                alt="img"
                className="mx-auto max-h-[80px] object-contain"
              />
              <p className="text-center text-[12px] leading-[15px] font-bold text-lightblack pt-2">
                {item.name}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ShopCatCard;
