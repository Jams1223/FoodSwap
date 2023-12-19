import React from "react";

const ProductDescription = () => {
  return (
    <div className="p-[10px] sm:p-[20px]">
      <h4 className="font-bold text-base sm:text-md text-lightblack leading-[25px]">
        How to choose a quality burger
      </h4>
      <p className="font-normal text-sm mt-2 text-lightblack leading-[19px]">
        The hallmarks of a gourmet burger are:
      </p>
      <ul className="list-disc pl-4">
        <li className="font-normal text-xs sm:text-sm text-lightblack leading-[19px]">
          A freshly baked bun, soft on the inside with a slight crunch on the
          outside
        </li>
        <li className="font-normal text-xs sm:text-sm text-lightblack leading-[19px]">
          High-quality beef, ground and seasoned to perfection
        </li>
        <li className="font-normal text-xs sm:text-sm text-lightblack leading-[19px]">
          Fresh, crisp lettuce and ripe tomatoes
        </li>
        <li className="font-normal text-xs sm:text-sm text-lightblack leading-[19px]">
          Premium cheese that melts over the patty
        </li>
        <li className="font-normal text-xs sm:text-sm text-lightblack leading-[19px]">
          Signature sauce that complements the burger
        </li>
      </ul>
      <div className="mt-[20px]">
        <h4 className="font-bold text-base sm:text-md text-lightblack">
          What makes our burgers special?
        </h4>
        <p className="font-normal text-xs sm:text-sm text-lightblack leading-[19px]">
          Our burgers are crafted with attention to every detail. The beef used
          in our patties is sourced from local farms, ensuring that each burger
          has the freshest taste possible. Our bakers deliver buns daily, and we
          prepare our secret sauce in-house for that unique flavor you won’t
          find anywhere else.
        </p>
      </div>
      <div>
        <p className="font-normal text-xs sm:text-sm text-lightblack mt-2 sm:mt-5 leading-[19px]">
          Not only do we prioritize flavor, but we also focus on the nutritional
          value. Each burger is balanced with the right amount of protein, fresh
          vegetables, and carbs, making it a satisfying meal that&apos;s as
          healthy as it is delicious.
        </p>
        <p className="font-normal text-sm mt-2 sm:mt-5 text-lightblack leading-[19px]">
          Don’t forget to customize your burger with our variety of toppings and
          options for those who prefer vegetarian or gluten-free choices.
          Everyone should be able to enjoy the perfect burger experience!
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
