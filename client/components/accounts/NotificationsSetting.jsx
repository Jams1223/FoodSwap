import { useRouter } from "next/router";
import React from "react";
import { LeftIcon } from "../helper/Icons";

const NotificationsSetting = () => {
  const router = useRouter();
  return (
    <>
      <section className="container p-4 sm:p-6 lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-md">
        <div className="mb-5 sm:mb-10  flex items-center">
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => router.back()}
          >
            <LeftIcon />
          </span>
          <h2 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0">
            Notification settings
          </h2>
        </div>

        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">
            General Notification
          </h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">Sound</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">Vibrate</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">Special Offers</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">Promo & Discount</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">Payments</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">Cashback</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">App Updates</h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">
            New Service Available
          </h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-black text-base">
            New Tips Available
          </h4>

          <label class="switch-styled">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </section>
    </>
  );
};

export default NotificationsSetting;
