import PageSEO from "../components/common/PageSEO";
import Vegetables from "../components/common/Vegetables";
import DailyBestSale from "../components/home/DailyBestSale";
import Hero from "../components/home/Hero";
import HotPermotion from "../components/home/HotPermotion";
import PopularProducts from "../components/home/PopularProducts";
import ProductsWithDelivery from "../components/home/ProductsWithDelivery";
import SellingAddedTrendingProducts from "../components/home/SellingAddedTrendingProducts";
import ShopByCat from "../components/home/ShopByCat";
import Layout from "../hoc/Layout";

export default function Home() {
  return (
    <>
      <PageSEO title="Home" />
      <Layout>
        <Hero />
        <ShopByCat />
        <PopularProducts />
        <DailyBestSale />
        <HotPermotion />
        <Vegetables />
        <SellingAddedTrendingProducts />
        <ProductsWithDelivery />
      </Layout>
    </>
  );
}
