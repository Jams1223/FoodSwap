import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="dot1 bg-white rounded-full m-2"></div>
        <div className="dot2 bg-white rounded-full m-2"></div>
        <div className="dot3 bg-white rounded-full m-2"></div>
      </div>
    </>
  );
};

export default Loader;
