import React from "react";
import Slider from "react-slick";
import { heroSliderData } from "../helper/Helper";
import HomeHeroSliderItem from "./HomeHeroSliderItem";

function HeroSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const slicedarr = heroSliderData.slice(0, 2);
    return (
        <>
            <div className="my-6 w-full">
                <HomeHeroSliderItem />

                {/* <Slider {...settings} className="hero-slider">
                    {heroSliderData.map((item, index) => (
                        <HomeHeroSliderItem item={item} key={index} />
                    ))}
                </Slider> */}
            </div>
        </>
    );
}

export default HeroSlider;
