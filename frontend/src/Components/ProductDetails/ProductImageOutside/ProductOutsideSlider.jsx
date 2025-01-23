import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiHeadphoneLine, RiVideoLine } from "react-icons/ri";
import Slider from "react-slick";

const OutsideImageSlider = ({ productState, sliderRef2, nav1, setNav2 }) => {
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const currentVariation = productState?.selectedVariation?.variation_galleries?.length ? productState?.selectedVariation?.variation_galleries : productState?.product?.product_galleries;

  useEffect(() => {
    setNav2(sliderRef2);
  }, []);

  let outsideThumbnail = {
    infinite: false,
    // slidesToScroll: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="image-outside-thumbnail">
      <Slider {...outsideThumbnail} className="slider-nav no-arrow" asNavFor={nav1} ref={(slider) => (sliderRef2 = slider)} infinite={false} slidesToScroll={false} slidesToShow={productState.product?.product_galleries?.length <= 3 ? productState.product?.product_galleries?.length : 4} focusOnSelect={true}>
        {currentVariation?.map((image, i) => (
          <div key={i} className="slider-image">
            {videType.includes(image.mime_type) ? (
              <span>
                <RiVideoLine size={100} />
              </span>
            ) : audioType.includes(image?.mime_type) ? (
              <span>
                <RiHeadphoneLine size={100} />
              </span>
            ) : (
              <Image src={image?.original_url} alt={image?.name} className="img-fluid" height={130} width={130} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OutsideImageSlider;
