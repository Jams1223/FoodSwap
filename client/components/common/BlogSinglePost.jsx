import Image from "next/image";
import React from "react";

function BlogSinglePost() {
  return (
    <div>
      <Image
        className="object-cover rounded-xl "
        src="/assets/images/recips2.png"
        width={296}
        height={180}
        alt="Blog Recipe"
      />
      <div className=" my-3 pt-4">
        {" "}
        <span className="bg-primary px-3 py-1 rounded-2xl text-white text-[12px] font-semibold ">
          {" "}
          Lorem, ipsum{" "}
        </span>{" "}
      </div>
      <p className="text-base text-lightblack font-semibold leading-[150%] pt-1  ">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, non!
      </p>
      <div className="flex items-center mt-4">
        <p className="text-primary text-[12px]   ff_open_sans"> Author</p>
        <p className="text-primary text-[12px]  ff_open_sans pl-4">
          {" "}
          17. 6. 2020
        </p>
      </div>
    </div>
  );
}

export default BlogSinglePost;
