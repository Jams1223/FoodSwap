import { topSellingsdata } from "../helper/Helper";
import ProductItem from "./ProductItem";

const TopSelling = () => {
  return (
    <>
      <div className="w-full sm:mt-[20px] trending_card md:w-[350px] lg:w-[370px]">
        <h3 className="font-bold text-md sm:text-lg text-lightblack leading-[40px] text-center sm:text-start ">
          Top <span className="text-primary">dishes</span>
        </h3>
        <div className="w-full h-[1px] bg-gray mt-[10px] mb-[6px]"></div>
        {topSellingsdata.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default TopSelling;
