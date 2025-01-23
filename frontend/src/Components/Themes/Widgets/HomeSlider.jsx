"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import { homeBannerSettings } from "@/Data/SliderSetting";
import { ImagePath, storageURL } from "@/Utils/Constants";
import Slider from "react-slick";

const HomeSlider = ({ bannerData, height, width, sliderClass }) => {
  const videoType = ["mp4", "webm", "ogg"];

  return (
    <>
      <div className="position-relative">
        {bannerData?.banners?.length > 1 ? (
          <Slider {...homeBannerSettings} className={sliderClass ? sliderClass : ""}>
            {bannerData?.banners?.map((banner, index) => {
              if (videoType.includes(banner && banner?.image_url && banner?.image_url?.substring(banner?.image_url?.lastIndexOf(".") + 1))) {
                return (
                  <div className="slider-contain" id="block" style={{ width: "100%", position: "relative" }} data-vide-bg="../assets/video/video.mp4" data-vide-options="position: 0% 50%">
                    <div style={{ position: "absolute", zIndex: -1, inset: "0px", overflow: "hidden", backgroundSize: "cover", backgroundColor: "transparent", backgroundRepeat: "no-repeat", backgroundPosition: "0% 50%", backgroundImage: "none" }}>
                      <video autoPlay loop muted style={{ margin: "auto", position: "absolute", zIndex: "-1", top: "50%", left: " 0%", transform: "translate(0%, -50%)", visibility: "visible", opacity: "1", width: "1907px", height: "auto" }}>
                        <source src={storageURL + banner?.image_url} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index}>{}
                    <ImageLink imgUrl={banner} placeholder={`${ImagePath}/banner.png`} link={banner} height={height} width={width} homeBanner={true} />
                  </div>
                );
              }
            })}
          </Slider>
        ) : videoType.includes((bannerData?.banners?.[0] || bannerData) && (bannerData?.banners?.[0]?.image_url || bannerData?.image_url) && (bannerData?.banners?.[0]?.image_url?.substring(bannerData?.banners?.[0]?.image_url?.lastIndexOf(".") + 1) || bannerData?.image_url?.substring(bannerData?.image_url?.lastIndexOf(".") + 1))) ? (
          <div className="slider-contain" id="block" data-vide-bg="../assets/video/video.mp4" data-vide-options="position: 0% 50%">
            <div style={{ position: "absolute", zIndex: -1, inset: "0px", overflow: "hidden", backgroundSize: "cover", backgroundColor: "transparent", backgroundRepeat: "no-repeat", backgroundPosition: "0% 50%", backgroundImage: "none" }}>
              <video autoPlay loop muted style={{ margin: "auto", position: "absolute", zIndex: "-1", top: "50%", left: " 0%", transform: "translate(0%, -50%)", visibility: "visible", opacity: "1", width: "1907px", height: "auto" }}>
                <source src={storageURL + bannerData?.banners?.[0]?.image_url || bannerData?.image_url} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          <ImageLink imgUrl={bannerData?.banners?.[0] || bannerData} placeholder={`${ImagePath}/banner.png`} height={height} width={width} />
        )}
        <div className="home-skeleton">
          <div className="skeleton-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-sm-8 col-11">
                  <p className="card-text placeholder-glow row g-lg-4 g-sm-3 g-2">
                    <span className="col-7">
                      <span className="placeholder"></span>
                    </span>
                    <span className="col-9">
                      <span className="placeholder"></span>
                    </span>
                    <span className="col-6">
                      <span className="placeholder"></span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
