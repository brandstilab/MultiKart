import React from "react";
import { Col, Row } from "reactstrap";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const ProductSliderBottom = ({ productState }) => {
  return (
    <Col lg="4">
      <Row>
        <Col xs="12" className="p-0">
          <div className="slider-nav">
            <Swiper navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }} slidesPerView={1} spaceBetween={10} className="main-slider swiper-horizontal">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              {productState?.product?.product_galleries?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img className="img-fluid" src={img.original_url} alt={`Image ${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
      </Row>
      <div className="product-slick">
        <Swiper slidesPerView={3} spaceBetween={1} watchSlidesProgress={true} className="swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" height={300}>
          {productState?.product?.product_galleries?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="slider-image">
                <img className="img-fluid" src={img.original_url} alt={`Image ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Col>
  );
};

export default ProductSliderBottom;
