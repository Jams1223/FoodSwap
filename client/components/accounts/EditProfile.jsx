import { useRouter } from "next/router";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import AllCategoriesSelect from "../common/AllCategoriesSelect";
import { LeftIcon } from "../helper/Icons";
import CountryList from "./CountryList";

const EditProfile = () => {
  const router = useRouter();
  const [value, setValue] = useState();
  const gender = [{ name: "Male" }, { name: "Female" }, { name: "Others" }];

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
          <h2 className="text-black font-semibold sm:text-lg text-md  ml-4 lg:ml-0">
            Edit Profile
          </h2>
        </div>

        <div>
          <input
            required
            type="text"
            className="mb-3 w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none"
            placeholder="John Due"
          />
          <input
            required
            type="text"
            className="mb-3 w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none"
            placeholder="Ninyy"
          />
          <input
            required
            type="date"
            className="mb-3 w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none placeholder:text-lightblack"
            placeholder="12/22/99"
          />
          <input
            required
            type="email"
            className="mb-3 w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none"
            placeholder="andrew11022@gmail.com"
          />
          <div className="w-full mb-3">
            <PhoneInput
              className="w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none"
              id="Phone-country"
              defaultCountry="AU"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="mb-3 w-full border-[#F2F0F0] border-[1px] rounded px-6 py-2">
            <CountryList />
          </div>
          <div className="mb-3 w-full border-[#F2F0F0] border-[1px] rounded px-6 py-2">
            <AllCategoriesSelect categories={gender} font="font-normal" />
          </div>
          <button
            type="submit"
            className="mt-6 h-12 px-5 py-3 w-full text-sm text-white flex items-center justify-center font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded-full"
          >
            Update
          </button>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
