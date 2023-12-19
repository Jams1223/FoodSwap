import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  EditIcon,
  LeftIcon,
  LocationIcon,
  ProfileIcon,
  RightArrowBlackIcon,
  StarIcon,
} from "../helper/Icons";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      <section className="container p-4 sm:p-6 lg:ml-6 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-md">
        <div className="w-full">
          <div className="flex items-center justify-between  mb-5 sm:mb-10">
            <div className="flex items-center justify-start">
              <button
                onClick={() => router.back()}
                className="lg:hidden cursor-pointer"
              >
                <LeftIcon />
              </button>
              <h1 className="text-lightblack font-semibold sm:text-lg text-md  ml-4 lg:ml-0   text-center">
                Profile
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center my-5 sm:my-8">
            <div className="w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] rounded-full  relative">
              <Image
                width={180}
                alt="Profile"
                height={180}
                src="/assets/images/team7.png"
                className="object-cover rounded-full h-full w-full"
              />
              <div className="absolute flex justify-center items-center cursor-pointer right-2 -bottom-1 sm:bottom-3 w-9 h-9 shadow-lg rounded-full bg-white">
                <EditIcon />
              </div>
            </div>
            <p className="mt-4 text-center text-black text-[24px]   font-bold">
              Jhon Doe
            </p>
            <p className=" text-center text-black sm:text-[18px] text-sm ">
              Lorem ipsum dolor sit.
            </p>
          </div>

          <div className="my-5  border-t-2 border-gray py-3">
            <Link
              href="/account/profile?tab=edit"
              className="flex items-center justify-between cursor-pointer my-1 sm:my-2"
            >
              <div className="flex items-center justify-start">
                <span className="mr-2 cursor-pointer w-[26px] flex justify-center">
                  <ProfileIcon />
                </span>
                <p className=" text-lightblack cursor-pointer    sm:text-md ">
                  Edit Profile
                </p>
              </div>
              <div>
                <RightArrowBlackIcon />
              </div>
            </Link>
            <Link
              href="/account/profile?tab=address"
              className="flex items-center justify-between cursor-pointer my-1 sm:my-2   "
            >
              <div className="flex items-center justify-start">
                <span className="mr-2 cursor-pointer w-[26px] flex justify-center">
                  <LocationIcon />
                </span>
                <p className=" text-lightblack cursor-pointer    sm:text-md ">
                  Address
                </p>
              </div>
              <div>
                <RightArrowBlackIcon />
              </div>
            </Link>
            <Link
              href="/account/profile?tab=settings"
              className="flex items-center justify-between cursor-pointer my-1 sm:my-2   "
            >
              <div className="flex items-center justify-start">
                <span className="mr-2 cursor-pointer w-[26px] flex justify-center">
                  <StarIcon />
                </span>
                <p className=" text-lightblack cursor-pointer    sm:text-md ">
                  Notification Settings
                </p>
              </div>
              <div>
                <RightArrowBlackIcon />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
