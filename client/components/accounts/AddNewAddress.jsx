import React from "react";
import ContactMap from "../contactus/ContactMap";
import { LeftIcon } from "../helper/Icons";

const AddNewAddress = () => {
    return (
        <>
            <section className="container p-4 sm:p-6 lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-md">
                <div className="lg:ml-5 flex justify-between items-center mb-6">
                    <span className="lg:hidden cursor-pointer">
                        <LeftIcon />
                    </span>
                    <h2 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0">Add New Address</h2>
                </div>{" "}
                <iframe
                    className="w-full h-[300px] sm:h-[400px] rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.750558170947!2d151.09382485563026!3d-33.87838107156328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12badc97f1d661%3A0x5017d681632aea0!2sBurwood%20NSW%202134%2C%20Australia!5e0!3m2!1sen!2sin!4v1672247296659!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="mt-4">
                    <h2 className="text-lightblack font-semibold sm:text-lg text-md mb-4">Address Details</h2>
                    <label className="text-base text-lightblack font-normal" htmlFor="Name Address">
                        Name Address
                    </label>
                    <input
                        required
                        type="email"
                        className="my-3 w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none"
                    />
                    <label className="text-base text-lightblack font-normal" htmlFor="Address Details">
                        Address Details
                    </label>
                    <input
                        required
                        type="email"
                        className="my-3 w-full px-6 py-2 ff_lato text-xs text-lightblack border-[#F2F0F0] border-[1px] rounded outline-none"
                    />

                    <label htmlFor="privacy" className="text-lightblack text-xs ff_lato flex items-center cursor-pointer">
                        <input className="w-5 h-6 mr-2" type="checkbox" id="privacy" />
                        <span>Make this as the default address</span>
                    </label>

                    <button
                        type="submit"
                        className="mt-6 h-12 px-5 py-3 w-full text-sm text-white flex items-center justify-center font-bold bg-primary transition-all duration-300  hover:bg-opacity-80  rounded-full"
                    >
                        Add
                    </button>
                </div>
            </section>
        </>
    );
};

export default AddNewAddress;
