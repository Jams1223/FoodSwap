import React from "react";
import PageSEO from "../components/common/PageSEO";
import FullCart from "../components/fullcart/Fullcart";
import Layout from "../hoc/Layout";
import EmptyCart from "../components/fullcart/EmptyCart";

function fullcart() {
  return (
    <>
      <>
        <PageSEO title="Shopping Cart" />
        <Layout>
          <FullCart />
          <EmptyCart />
        </Layout>
      </>
    </>
  );
}

export default fullcart;
