"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { homeBannerSettings } from "@/Data/SliderSetting";
import Slider from "react-slick";

const HomeBanner = ({ data = {}, wrapperClass = {}, classes = {}, ...props }) => {
  const { parentDivClass, sliderClass } = classes;
  const { banners } = data;
  const { image_url } = data;
  return (
    <WrapperComponent noRowCol={true} classes={wrapperClass}>
      <div className={parentDivClass ? parentDivClass : "slide-1 home-slider"}>
        {banners ? (
          <Slider {...homeBannerSettings} className={sliderClass ? sliderClass : ""}>
            {banners?.map((item, index) => (
              <div key={index}>
                <div className="home">
                  <img src={item.image_url} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="home text-start">
            <img src={image_url} alt="" />
          </div>
        )}
      </div>
    </WrapperComponent>
  );
};

export default HomeBanner;
