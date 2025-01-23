import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ImageZoom from "react-image-zooom";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";

const MainImageSlider = ({ productState, nav2, sliderRef1, setNav1 }) => {
  const { t } = useTranslation("common");
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const currentVariation = productState?.selectedVariation?.variation_galleries?.length ? productState?.selectedVariation?.variation_galleries : productState?.product?.product_galleries;


  useEffect(() => {
    setNav1(sliderRef1);
  }, []);
  return (
    <div className="sticky-top-custom">
      <div className=" thumbnail-image-slider">
        <Row className="g-sm-4 g-3">
          <Col xs="12">
            <div className="product-slick position-relative">
              {productState?.product?.is_sale_enable || productState?.product?.is_trending || productState?.product?.is_featured ? (
                <ul className="product-detail-label">
                  {productState?.product.is_sale_enable ? <li className="soldout">{t("Sale")}</li> : ""}
                  {productState?.product.is_trending ? <li className="trending">{t("Trending")}</li> : ""}
                  {productState?.product.is_featured ? <li className="featured">{t("Featured")}</li> : ""}
                </ul>
              ) : null}

              <Slider adaptiveHeight={true} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)} prevArrow={<RiArrowLeftSLine />} nextArrow={<RiArrowRightSLine />}>
                {currentVariation?.map((image, i) => (
                  <div key={i}>
                    <div className="slider-image">
                      {videType.includes(image.mime_type) ? (
                        <video className="w-100" controls>
                          <source src={image ? image?.original_url : ""} type={image?.mime_type}></source>
                        </video>
                      ) : audioType.includes(image?.mime_type) ? (
                        <div className="slider-main-img">
                          <audio controls>
                            <source src={image ? image.original_url : ""} type={image.mime_type}></source>
                          </audio>
                        </div>
                      ) : (
                        <ImageZoom zoom="200" src={image?.original_url} alt={image?.name} className="img-fluid" height={670} width={670} />
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainImageSlider;
