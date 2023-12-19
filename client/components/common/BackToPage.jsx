import Link from "next/link";
import React from "react";

const BackToPage = ({ link, title }) => {
  return (
    <>
      <Link href={link}>
        <button className="font-bold text-xs text-white bg-spacegrey h-[44px] w-[149px] rounded-[4px] flex justify-center items-center">
          {title}
        </button>
      </Link>
    </>
  );
};

export default BackToPage;
