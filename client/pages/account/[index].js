import { useRouter } from "next/router";
import React from "react";
import AccountSideBar from "../../components/accounts/AccountSideBar";
import Address from "../../components/accounts/Address";
import EditProfile from "../../components/accounts/EditProfile";
import Notifications from "../../components/accounts/Notifications";
import NotificationsSetting from "../../components/accounts/NotificationsSetting";
import Payment from "../../components/accounts/Payment";
import Profile from "../../components/accounts/Profile";
import WishList from "../../components/accounts/WishList";
import PageSEO from "../../components/common/PageSEO";
import Layout from "../../hoc/Layout";

const AccountPage = () => {
  const router = useRouter();
  return (
    <>
      <PageSEO title="Account" />
      <Layout>
        <div className="container lg:flex my-6 sm:my-10">
          <AccountSideBar />
          {router.asPath === "/account/profile" && <Profile />}
          {router.asPath === "/account/wishlist" && <WishList />}
          {router.asPath === "/account/notification" && <Notifications />}
          {router.asPath === "/account/payment" && <Payment />}
          {router.query.tab === "settings" && <NotificationsSetting />}
          {router.query.tab === "edit" && <EditProfile />}
          {router.query.tab === "address" && <Address />}
        </div>
      </Layout>
    </>
  );
};

export default AccountPage;
