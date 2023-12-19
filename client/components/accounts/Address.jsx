import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { EditIcon, LeftIcon, LocationIcon } from "../helper/Icons";

const Address = () => {
  const router = useRouter();

  return (
    <>
      <section className="container p-4 sm:p-6 lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-md">
        <div className="mb-5 sm:mb-10 lg:ml-5 flex items-center justify-between">
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => router.back()}
          >
            <LeftIcon />
          </span>
          <h2 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0">
            Address
          </h2>
        </div>

        <div>
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />{" "}
          <button
            type="submit"
            className="mt-6 h-12 px-5 py-3 w-full text-sm text-white flex items-center justify-center font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded-full"
          >
            Add New Address
          </button>
        </div>
      </section>
    </>
  );
};

export default Address;

export const AddressCard = () => {
  return (
    <article className="bg-white flex items-start justify-between my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      <div className="flex items-start">
        <span className="bg-lightSky rounded-full min-w-[40px] w-10 h-10 flex items-center justify-center">
          <LocationIcon />
        </span>
        <div className="mx-2 sm:mx-4">
          <h3 className="font-bold text-base">Home</h3>
          <p className="font-normal">644, Sunbroon Park, PC 56999</p>
        </div>
      </div>
      <Link
        href="/account/profile?tab=add-new-address"
        className="bg-lightSky rounded-full min-w-[40px] w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        <EditIcon />
      </Link>
    </article>
  );
};
