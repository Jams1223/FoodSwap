import Image from "next/image";
import React, { useState } from "react";

const DailyNeedFrom = () => {
  const intialState = {
    email: "",
    phone: "",
  };

  const [subscribeFrom, setSubscribeFrom] = useState(intialState);

  function handleSubmitSubsribeForm(event) {
    event.preventDefault();
  }
  return (
    <div className="px-2">
      <div className="container mx-auto mt-[30px] sm:mt-[60px] md:mt-[100px]">
        <div className="  z-50 p-[20px] rounded-[8px] sm:p-[48px] relative">
          <div className="absolute left-0 top-0 z-[-1]  ">
            <Image
              className="object-contain min-h-[220px]"
              src="/assets/images/daliyneed-img-1.png"
              width={1170}
              height={430}
              alt="Daily need img"
            />
          </div>
          <h2 className="font-semibold text-md2 sm:text-lg md:text-xxl leading-[35px] sm:leading-[40px] md:leading-[52px] text-lightblack max-w-[559px]">
            Stay home & get your daily needs from our shop
          </h2>
          <p className="font-normal text-sm sm:text-base text-grey ff_lato mt-[12px] sm:mt-[22px]">
            Start You&apos;r Daily Shopping with{" "}
            <span className="text-primary">Nolor</span>{" "}
          </p>
          <div className=" mt-[12px] sm:mt-[32px]  ">
            <form onSubmit={handleSubmitSubsribeForm} className="flex flex-col">
              <input
                className="font-normal text-xs bg-white ff_lato text-grey outline-none h-[42px] py-[12px] pl-[10px] sm:pl-[26px] pr-[10px] w-full sm:w-[420px] rounded-[4px] "
                type="email"
                placeholder="Enter your email address"
                required
                onChange={(e) =>
                  setSubscribeFrom({
                    ...subscribeFrom,
                    email: e.target.value,
                  })
                }
              />
              <input
                className="font-normal mt-[12px] bg-white text-xs ff_lato text-grey outline-none h-[42px] py-[12px] pl-[10px] sm:pl-[26px] pr-[10px] w-full sm:w-[420px] rounded-[4px] "
                type="number"
                placeholder="Enter your phone number"
                required
                onChange={(e) =>
                  setSubscribeFrom({
                    ...subscribeFrom,
                    phone: e.target.value,
                  })
                }
              />
              <button
                type="submit"
                className="h-[44px] w-full sm:w-[420px] rounded-[4px]  btn_subscribe mt-[12px] text-white font-bold text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyNeedFrom;
