import React from "react";
import WelcomeToNolorn from "../components/aboutus/WelcomeToNolorn";
import WhatweProvide from "../components/aboutus/WhatweProvide";
import MeetOurExpertTeam from "../components/aboutus/MeetOurExpertTeam";
import WeAreInNumbers from "../components/aboutus/WeAreInNumbers";
import PageBanner from "../components/common/PageBanner";
import PageSEO from "../components/common/PageSEO";
import SignUpNewsletter from "../components/common/SignUpNewsletter";
import ProductsWithDelivery from "../components/home/ProductsWithDelivery";
import Layout from "../hoc/Layout";

const AboutUs = () => {
  return (
    <>
      <PageSEO title="About Us" />
      <Layout>
        <PageBanner heading="About Us" page="About Us" />
        <WelcomeToNolorn />
        <WhatweProvide />
        <WeAreInNumbers />
        <MeetOurExpertTeam />
        <ProductsWithDelivery />
        <SignUpNewsletter />
      </Layout>
    </>
  );
};

export default AboutUs;
