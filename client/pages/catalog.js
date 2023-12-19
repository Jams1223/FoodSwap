import React, { useState } from "react";
import AllCardFilter from "../components/catalog/AllCardFilter";
import CatalogSidebar from "../components/catalog/CatalogSidebar";
import PageBanner from "../components/common/PageBanner";
import PageSEO from "../components/common/PageSEO";
import { catalogproductsdata } from "../components/helper/Helper";
import HotPermotion from "../components/home/HotPermotion";
import ProductCard from "../components/home/ProductCard";
import Layout from "../hoc/Layout";

function CatalogPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <PageSEO title="Catalog" />
      <Layout>
        <PageBanner heading="Vegetables" page="Catalog" />
        <AllCardFilter setSidebarOpen={setSidebarOpen} />
        <div className="container flex items-start justify-between">
          <CatalogSidebar
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="sm:ml-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catalogproductsdata &&
                catalogproductsdata.length > 0 &&
                catalogproductsdata.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
        <HotPermotion />
      </Layout>
    </>
  );
}

export default CatalogPage;
