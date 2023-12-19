import React from "react";

const MenuDropDown = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start  w-36  py-2 bg-white shadow rounded-lg absolute  z-40 top-[45px] left-0">
        <div className="flex flex-col space-y-2 items-start justify-start w-full">
          {data &&
            data.map((item, index) => (
              <div
                className=" w-full px-4 py-1 bg-white hover:bg-lightSky cursor-pointer"
                key={index}
              >
                <p className="flex-1 text-sm font-medium text-black">{item}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MenuDropDown;
