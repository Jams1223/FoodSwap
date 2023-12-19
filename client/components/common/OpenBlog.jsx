import React from "react";

function OpenBlog() {
  return (
    <div style={{ backgroundImage: `url("/assets/images/recips.png")` }}>
      <div className="py-7 mb-[120px] ml-4">
        {" "}
        <span className="bg-primary px-3 py-1 rounded-2xl text-white text-[12px] font-semibold ">
          {" "}
          Dinner tips
        </span>{" "}
      </div>
      <div className="relative blog-post-bg md:max-w-[496px]  rounded-b-lg flex flex-col h-[206px] white-bg-gradient ">
        <div className="absolute px-6 left-0 bottom-6 ">
          <p className="text-white font-semibold text-md   ">
            {" "}
            Our chef tips for a great and tasty dinner ready in 20 minutes
          </p>
          <div className="flex items-center mt-4">
            <div className="user-dp bg-white rounded-full h-[32px] w-[32px] cursor-pointer"></div>
            <p className="text-white text-[12px] mx-2 ff_open_sans"> Author</p>
            <p className="text-white text-[12px] mx-2 ff_open_sans ps-2">
              {" "}
              17. 6. 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenBlog;
