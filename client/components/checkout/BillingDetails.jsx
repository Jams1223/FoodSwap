import Link from "next/link";
import React, { useState } from "react";

function BillingDetails() {
    const intialState = {
        name: "",
        surname: "",
        company: "",
        country: "",
        city: "",
        email: "",
        phone: "",
        zipCode: "",
    };

    const [billingDetailsFrom, setbillingDetailsFrom] = useState(intialState);

    function handleSubmitSubsribeForm(event) {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmitSubsribeForm}>
                <div className="flex items-center py-2 justify-between ">
                    <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
                        <input
                            type="text"
                            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                            placeholder="Name"
                            onChange={(e) =>
                                setbillingDetailsFrom({
                                    ...billingDetailsFrom,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
                        <input
                            type="text"
                            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                            placeholder="Surname"
                            onChange={(e) =>
                                setbillingDetailsFrom({
                                    ...billingDetailsFrom,
                                    surname: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="my-5 w-full border-[0.5px] rounded border-[#F2F0F0] py-[13px] px-5">
                    <input
                        type="text"
                        className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                        placeholder="Company"
                        onChange={(e) =>
                            setbillingDetailsFrom({
                                ...billingDetailsFrom,
                                company: e.target.value,
                            })
                        }
                    />{" "}
                </div>
                <div className="flex items-center py-2 justify-between ">
                    <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
                        <input
                            type="text"
                            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                            placeholder="Country*"
                            onChange={(e) =>
                                setbillingDetailsFrom({
                                    ...billingDetailsFrom,
                                    country: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
                        <input
                            type="text"
                            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                            placeholder="City*"
                            onChange={(e) =>
                                setbillingDetailsFrom({
                                    ...billingDetailsFrom,
                                    city: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="my-5 w-full border-[0.5px] rounded border-[#F2F0F0] py-[13px] px-5">
                    <input
                        type="email"
                        className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                        placeholder="E-mail*"
                        onChange={(e) =>
                            setbillingDetailsFrom({
                                ...billingDetailsFrom,
                                email: e.target.value,
                            })
                        }
                    />{" "}
                </div>{" "}
                <div className="flex items-center py-2 justify-between ">
                    <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
                        <input
                            type="number"
                            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                            placeholder="Phone Number*"
                            onChange={(e) =>
                                setbillingDetailsFrom({
                                    ...billingDetailsFrom,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[48%]    border-[0.5px] rounded border-[#F2F0F0] py-[13px] sm:px-5 px-3">
                        <input
                            type="number"
                            className="border-0 outline-none text-lightblack placeholder:text-lightblack ff_lato text-xs w-full"
                            placeholder="Zip Code*"
                            onChange={(e) =>
                                setbillingDetailsFrom({
                                    ...billingDetailsFrom,
                                    zipCode: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <Link href={"/completed"}>
                    {" "}
                    <button
                        type="submit"
                        className=" px-5  my-5  w-full py-[13px] text-white  font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded  "
                    >
                        Complete Order
                    </button>{" "}
                </Link>
            </form>
        </div>
    );
}

export default BillingDetails;
