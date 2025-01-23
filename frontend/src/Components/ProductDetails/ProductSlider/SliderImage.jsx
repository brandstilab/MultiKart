import { ProductDetailTopSlider } from "@/Data/SliderSetting";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";

const SliderImage = ({ productState }) => {
  const { t } = useTranslation("common");
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const currentImages = productState?.selectedVariation?.variation_galleries ? productState?.selectedVariation?.variation_galleries : productState?.product?.product_galleries;
  return (
    <Row>
      <Col xl="12">
        <div className="slider-3-product product-wrapper position-relative mb-4">
          <Slider {...ProductDetailTopSlider}>
            {currentImages?.map((image, i) => (
              <div key={i}>
                <div className="product-slider-image">
                  {videType.includes(image.mime_type) ? (
                    <video className="w-100 " controls>
                      <source src={image ? image?.original_url : ""} type={image?.mime_type}></source>
                    </video>
                  ) : audioType.includes(image?.mime_type) ? (
                    <div className="slider-main-img">
                      <audio controls>
                        <source src={image ? image.original_url : ""} type={image.mime_type}></source>
                      </audio>
                    </div>
                  ) : (
                    <Image src={image?.original_url} alt={image?.name} className="img-fluid" height={443} width={443} />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Col>
    </Row>
  );
};

export default SliderImage;
