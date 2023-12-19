import PageSEO from "../../components/common/PageSEO";
import BackToPageSignUp from "../../components/product/BackToPageSignUp";
import ProductDescriptionReviews from "../../components/product/ProductDescriptionReviews";
import ProductViewDetail from "../../components/product/ProductViewDetail";
import PromotionalGoods from "../../components/product/PromotionalGoods";
import RelatedProducts from "../../components/product/RelatedProducts";
import Layout from "../../hoc/Layout";

const ProductDetailsPage = () => {
  return (
    <>
      <PageSEO title="Product" />
      <Layout>
        <ProductViewDetail />
        <ProductDescriptionReviews />
        <RelatedProducts />
        <PromotionalGoods />
        <BackToPageSignUp />
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
