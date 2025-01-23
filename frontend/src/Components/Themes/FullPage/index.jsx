import ImageLink from "@/Components/Widgets/ImageLink";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const FullPage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "full_page" });
  const [banners, setBanners] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    if (data?.home_banner?.banners?.length > 0) {
      const banners = Object.keys(data?.home_banner?.banners).map((item) => data?.home_banner?.banners[item]);
      setBanners(banners);
    }
  }, [data]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  const handleMouseWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    if (sliderRef.current) {
      if (delta > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };
  const settings = {
    vertical: true,
    autoplay: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  useEffect(() => {
    refetch();
  }, [isLoading]);

  if (isLoading && document.body) return <Loader />;

  return (
    <div className="home-slider fullpage full-slider overflow-hidden" onWheel={handleMouseWheel}>
      <div className="height-vh">
        {banners?.length > 0 && (
          <Slider {...settings} ref={sliderRef}>
            {banners?.map((item, index) => (
              <div key={index}>
                <ImageLink imgUrl={item} height={960} width={1850} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default FullPage;
