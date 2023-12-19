import React from "react";
import { GreenNextIcon, SearchIcon } from "../helper/Icons";

const SearchArticlesInput = () => {
    return (
        <>
            <div className="w-full sm:w-[270px] my-4">
                <div className=" flex items-center   px-4 border border-[#D4EEE2] py-[10px] rounded">
                    <span>
                        <SearchIcon />
                    </span>
                    <div className="w-full sm:w-fit flex items-center ">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="border-0 outline-none text-xs ff_lato placeholder:text-lightblack w-full sm:w-[170px] mx-2"
                            placeholder="Search..."
                        />
                        <span className="cursor-pointer ">
                            <GreenNextIcon />{" "}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchArticlesInput;
