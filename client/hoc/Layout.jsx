import React from "react";
import AppBottomNav from "../components/common/AppBottomNav";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <AppBottomNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
