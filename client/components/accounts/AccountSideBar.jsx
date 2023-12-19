import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import LogOutPopup from "./LogOutPopup";
import { useState } from "react";

const AccountSideBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside
        className={`mb-5 lg:mb-0 lg:h-screen max-h-full overflow-auto xl:overflow-visible z-[100] w-full py-2 lg:py-10 lg:max-w-[260px] shadow-[0_0_5px_rgba(0,0,0,0.2)]  rounded-md top-0 transition-all duration-200 ease-in`}
      >
        <ul className="flex items-end lg:block flex-wrap whitespace-nowrap">
          <li
            className={`mb-1 font-medium text-[14px] sm:text-base rounded-sm ${
              router.asPath === "/account/payment" ? "bg-lightSky" : ""
            }`}
          >
            <Link
              className="flex items-end p-2 sm:py-3 sm:px-5 w-full"
              href={"/account/payment"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 3C2.83696 3 2.20107 3.26339 1.73223 3.73223C1.26339 4.20107 1 4.83696 1 5.5V6H15V5.5C15 4.83696 14.7366 4.20107 14.2678 3.73223C13.7989 3.26339 13.163 3 12.5 3H3.5ZM15 7H1V10.5C1 11.163 1.26339 11.7989 1.73223 12.2678C2.20107 12.7366 2.83696 13 3.5 13H12.5C13.163 13 13.7989 12.7366 14.2678 12.2678C14.7366 11.7989 15 11.163 15 10.5V7ZM10.5 10H12.5C12.6326 10 12.7598 10.0527 12.8536 10.1464C12.9473 10.2402 13 10.3674 13 10.5C13 10.6326 12.9473 10.7598 12.8536 10.8536C12.7598 10.9473 12.6326 11 12.5 11H10.5C10.3674 11 10.2402 10.9473 10.1464 10.8536C10.0527 10.7598 10 10.6326 10 10.5C10 10.3674 10.0527 10.2402 10.1464 10.1464C10.2402 10.0527 10.3674 10 10.5 10Z"
                    fill={
                      router.asPath === "/account/payment" ? "white" : "#130017"
                    }
                  />
                </svg>
              </span>
              <span
                className={`${
                  router.asPath === "/account/payment"
                    ? "text-white"
                    : "text-black "
                }`}
              >
                Payment
              </span>
            </Link>
          </li>

          <li
            className={`mb-1 font-medium text-[14px] sm:text-base text-black rounded-sm ${
              router.asPath === "/account/notification" ? "bg-lightSky  " : ""
            }`}
          >
            <Link
              className="flex items-end p-2 sm:py-3 sm:px-5 w-full"
              href={"/account/notification"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_4)">
                    <path
                      d="M18 34.28C18.6299 34.2655 19.2345 34.0287 19.7066 33.6114C20.1788 33.1942 20.4881 32.6234 20.58 32H15.32C15.4145 32.6403 15.7383 33.2245 16.2313 33.6439C16.7243 34.0633 17.3528 34.2894 18 34.28Z"
                      fill={
                        router.asPath === "/account/notification"
                          ? "white"
                          : "#130017"
                      }
                    />
                    <path
                      d="M32.85 28.13L32.51 27.83C31.5454 26.9706 30.7011 25.985 30 24.9C29.2342 23.4025 28.7752 21.7672 28.65 20.09V15.15C28.6459 14.5499 28.5924 13.9513 28.49 13.36C26.7961 13.0118 25.2746 12.089 24.183 10.7478C23.0914 9.40654 22.4969 7.72929 22.5 5.99999V5.36999C21.4559 4.85618 20.3342 4.5183 19.18 4.36999V3.10999C19.18 2.75593 19.0393 2.41637 18.789 2.16601C18.5386 1.91565 18.1991 1.77499 17.845 1.77499C17.4909 1.77499 17.1514 1.91565 16.901 2.16601C16.6506 2.41637 16.51 2.75593 16.51 3.10999V4.41999C13.9257 4.78455 11.5606 6.07174 9.85121 8.04393C8.14186 10.0161 7.20372 12.5401 7.20999 15.15V20.09C7.08474 21.7672 6.62577 23.4025 5.85999 24.9C5.17087 25.9823 4.34018 26.9677 3.38999 27.83L3.04999 28.13V30.95H32.85V28.13Z"
                      fill={
                        router.asPath === "/account/notification"
                          ? "white"
                          : "#130017"
                      }
                    />
                    <path
                      d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"
                      fill={
                        router.asPath === "/account/notification"
                          ? "white"
                          : "#130017"
                      }
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span
                className={`${
                  router.asPath === "/account/notification"
                    ? "text-white"
                    : "text-black "
                }`}
              >
                Notification
              </span>
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-[14px] sm:text-base text-black rounded-sm ${
              router.asPath === "/cart" ? "bg-lightSky" : ""
            }`}
          >
            <Link
              className="flex items-end p-2 sm:py-3 sm:px-5 w-full"
              href={"/cart"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_11)">
                    <path
                      d="M9 20C9.26522 20 9.51957 20.1053 9.70711 20.2929C9.89465 20.4804 10 20.7348 10 21C10 21.2652 9.89465 21.5196 9.70711 21.7071C9.51957 21.8946 9.26522 22 9 22C8.73479 22 8.48043 21.8946 8.2929 21.7071C8.10536 21.5196 8 21.2652 8 21C8 20.7348 8.10536 20.4804 8.2929 20.2929C8.48043 20.1053 8.73479 20 9 20ZM16 20C16.2652 20 16.5196 20.1053 16.7071 20.2929C16.8946 20.4804 17 20.7348 17 21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21C15 20.7348 15.1054 20.4804 15.2929 20.2929C15.4804 20.1053 15.7348 20 16 20ZM2.2 2.89999C2.34609 2.70516 2.55825 2.57034 2.79668 2.52081C3.0351 2.47128 3.28341 2.51046 3.495 2.63099L3.6 2.70099L5.308 3.98099C5.59867 4.19908 5.82442 4.49225 5.961 4.82899L6.021 4.99999H18.867C19.1381 4.99992 19.4064 5.05497 19.6556 5.16179C19.9047 5.26862 20.1296 5.42499 20.3165 5.6214C20.5033 5.81781 20.6483 6.05016 20.7426 6.30434C20.8369 6.55852 20.8786 6.82922 20.865 7.09999L20.852 7.24799L20.395 10.903C20.2579 12.0029 19.7591 13.0261 18.9771 13.8117C18.1951 14.5973 17.1743 15.1008 16.075 15.243L15.849 15.266L8.536 15.876L8.796 17H17.5C17.7549 17.0003 18 17.0979 18.1854 17.2728C18.3707 17.4478 18.4822 17.6869 18.4972 17.9414C18.5121 18.1958 18.4293 18.4464 18.2657 18.6418C18.1021 18.8373 17.8701 18.9629 17.617 18.993L17.5 19H8.796C8.37161 19.0001 7.95819 18.8651 7.61555 18.6147C7.27291 18.3643 7.01881 18.0114 6.89 17.607L6.847 17.45L4.107 5.57999L2.4 4.29999C2.18783 4.14086 2.04756 3.90396 2.01005 3.64141C1.97255 3.37886 2.04087 3.11216 2.2 2.89999Z"
                      fill="#130017"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_11">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span
                className={`${
                  router.asPath === "/cart" ? "text-white" : "text-black "
                }`}
              >
                My Cart
              </span>
            </Link>
          </li>

          <li
            className={`mb-1 font-medium text-[14px] sm:text-base text-black rounded-sm ${
              router.asPath === "/account/profile" ? "bg-lightSky  " : ""
            }`}
          >
            <Link
              className="flex items-end  p-2 sm:py-3 sm:px-5"
              href={"/account/profile"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.61 8.34C16.68 8.34 17.54 9.2 17.54 10.27C17.54 11.34 16.68 12.2 15.61 12.2C14.54 12.2 13.68 11.34 13.68 10.27C13.67 9.2 14.54 8.34 15.61 8.34ZM9.61 6.76C10.91 6.76 11.97 7.82 11.97 9.12C11.97 10.42 10.91 11.48 9.61 11.48C8.31 11.48 7.25 10.42 7.25 9.12C7.25 7.81 8.3 6.76 9.61 6.76ZM9.61 15.89V19.64C7.21 18.89 5.31 17.04 4.47 14.68C5.52 13.56 8.14 12.99 9.61 12.99C10.14 12.99 10.81 13.07 11.51 13.21C9.87 14.08 9.61 15.23 9.61 15.89ZM12 20C11.73 20 11.47 19.99 11.21 19.96V15.89C11.21 14.47 14.15 13.76 15.61 13.76C16.68 13.76 18.53 14.15 19.45 14.91C18.28 17.88 15.39 20 12 20Z"
                    fill={
                      router.asPath === "/account/profile" ? "white" : "#130017"
                    }
                  />
                </svg>
              </span>

              <span
                className={`${
                  router.asPath === "/account/profile"
                    ? "text-white"
                    : "text-black "
                }`}
              >
                Profile
              </span>
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-[14px] sm:text-base text-black rounded-sm ${
              router.asPath === "/account/wishlist" ? "bg-lightSky  " : ""
            }`}
          >
            <Link
              className="flex items-end  p-2 sm:py-3 sm:px-5"
              href={"/account/wishlist"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill={
                      router.asPath === "/account/wishlist"
                        ? "white"
                        : "#130017"
                    }
                  />
                </svg>
              </span>

              <span
                className={`${
                  router.asPath === "/account/wishlist"
                    ? "text-white"
                    : "text-black "
                }`}
              >
                Wishlist
              </span>
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-[14px] sm:text-base text-black rounded-sm ${
              router.asPath === "/cart" ? "bg-lightSky  " : ""
            }`}
          >
            <span
              onClick={() => setOpen(true)}
              className="flex items-end p-2 sm:py-3 sm:px-5 w-full cursor-pointer"
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H12C12.7956 22 13.5587 21.6839 14.1213 21.1213C14.6839 20.5587 15 19.7956 15 19V5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7956 2 12 2H6ZM16.293 7.293C16.4805 7.10553 16.7348 7.00021 17 7.00021C17.2652 7.00021 17.5195 7.10553 17.707 7.293L21.707 11.293C21.8945 11.4805 21.9998 11.7348 21.9998 12C21.9998 12.2652 21.8945 12.5195 21.707 12.707L17.707 16.707C17.5184 16.8892 17.2658 16.99 17.0036 16.9877C16.7414 16.9854 16.4906 16.8802 16.3052 16.6948C16.1198 16.5094 16.0146 16.2586 16.0123 15.9964C16.01 15.7342 16.1108 15.4816 16.293 15.293L18.586 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H18.586L16.293 8.707C16.1055 8.51947 16.0002 8.26516 16.0002 8C16.0002 7.73484 16.1055 7.48053 16.293 7.293Z"
                    fill="black"
                  />
                </svg>
              </span>
              Logout
            </span>
          </li>
        </ul>
      </aside>

      <LogOutPopup open={open} setOpen={setOpen} />
    </>
  );
};

export default AccountSideBar;
