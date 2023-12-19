import { useRouter } from "next/router";
import React from "react";
import { DotsIcon, LeftIcon } from "../helper/Icons";

const Payment = () => {
  const router = useRouter();
  return (
    <>
      <section className="container p-4 sm:p-6  lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)]  rounded-md flex flex-col justify-between   ">
        <div className="w-full">
          <div className="flex items-center justify-between   mb-5 sm:mb-10">
            <div className="flex items-center">
              <span
                className="lg:hidden cursor-pointer"
                onClick={() => router.back()}
              >
                <LeftIcon />
              </span>
              <h1 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0   text-center">
                Payment
              </h1>
            </div>
            <div className="flex justify-center items-center  gap-x-[3px] w-[40px] h-[40px] border border-black rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-gray ml-auto ">
              <DotsIcon />
              <DotsIcon />
              <DotsIcon />
            </div>
          </div>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] ">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-center">
                <span className="mr-3">
                  <img src="/assets/images/paypal.png" alt="paypal" />
                </span>
                <span className="text-black sm:text-md text-sm font-semibold ">
                  PayPal
                </span>
              </div>
              <span className="text-black sm:text-md text-sm font-semibold ml-auto ">
                Connected
              </span>
            </div>
          </div>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] ">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-center">
                <span className="mr-3">
                  <img src="/assets/images/mastercard.png" alt="mastercard" />
                </span>
                <div className="flex items-end">
                  <span className="text-black sm:text-md text-sm font-semibold ">
                    ************
                  </span>
                  <span className="text-black sm:text-md text-sm font-semibold ">
                    2476
                  </span>
                </div>
              </div>
              <span className="text-black sm:text-md text-sm font-semibold ml-auto ">
                Connected
              </span>
            </div>
          </div>
        </div>
        <div className="flex my-3  mt-14   rounded-[40px]   shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-black bg-opacity-80 transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-gray  hover:bg-opacity-100">
          <button className="text-white sm:text-md text-sm font-bold  w-full py-4">
            Add New Card
          </button>
        </div>
      </section>
    </>
  );
};

export default Payment;
