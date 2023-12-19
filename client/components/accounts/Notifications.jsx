import { useRouter } from "next/router";
import React from "react";
import { DotsIcon, LeftIcon, ProfileIcon, ShareIcon } from "../helper/Icons";

const Notifications = () => {
  const router = useRouter();
  return (
    <>
      <section className="container p-4 sm:p-6 lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)]  rounded-md flex flex-col justify-between   ">
        <div className="w-full">
          <div className="flex items-center justify-between mb-5 sm:mb-10">
            <div className="flex items-center">
              <span
                className="lg:hidden cursor-pointer"
                onClick={() => router.back()}
              >
                <LeftIcon />
              </span>
              <h2 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0   text-center">
                Notification
              </h2>
            </div>
            <div
              onClick={() => router.push("/account/notification?tab=settings")}
              className="flex justify-center items-center  gap-x-[3px] w-[40px] h-[40px] border border-black rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-gray ml-auto "
            >
              <DotsIcon />
              <DotsIcon />
              <DotsIcon />
            </div>
          </div>
          <p className="mt-5 text-black sm:text-md text-sm font-semibold">
            Today
          </p>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] ">
            <div className="flex items-center">
              <div className="mr-3 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white ">
                <ShareIcon />
              </div>
              <div className="ml-2">
                <p className="text-black sm:text-md text-sm font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur
                </p>{" "}
                <p className="text-lightblack   sm:text-sm text-xs  font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>{" "}
          <p className="mt-5 text-black sm:text-md text-sm font-semibold">
            Yesterday
          </p>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] ">
            <div className="flex items-center">
              <div className="mr-3 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white ">
                <ProfileIcon />
              </div>
              <div className="ml-2">
                <p className="text-black sm:text-md text-sm font-semibold ">
                  Lorem ipsum dolor sit amet.
                </p>{" "}
                <p className="text-lightblack   sm:text-sm text-xs  font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] ">
            <div className="flex items-center">
              <div className="mr-3 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white ">
                <ShareIcon />
              </div>
              <div className="ml-2">
                <p className="text-black sm:text-md text-sm font-semibold ">
                  Lorem ipsum dolor sit amet.
                </p>{" "}
                <p className="text-lightblack   sm:text-sm text-xs  font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>{" "}
          <p className="mt-5 text-black sm:text-md text-sm font-semibold">
            20 Dec. 2022
          </p>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] ">
            <div className="flex items-center">
              <div className="mr-3 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white ">
                <ShareIcon />
              </div>
              <div className="ml-2">
                <p className="text-black sm:text-md text-sm font-semibold ">
                  Lorem ipsum dolor sit amet.
                </p>{" "}
                <p className="text-lightblack   sm:text-sm text-xs  font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-3  p-3 sm:p-5 sm:rounded-xl rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)]">
            <div className="flex items-center">
              <div className="mr-3 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white ">
                <ShareIcon />
              </div>
              <div className="ml-2">
                <p className="text-black sm:text-md text-sm font-semibold ">
                  Lorem ipsum dolor sit amet.
                </p>{" "}
                <p className="text-lightblack   sm:text-sm text-xs  font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notifications;
