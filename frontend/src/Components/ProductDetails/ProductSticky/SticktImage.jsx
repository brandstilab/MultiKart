import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const StickImage = ({ productState }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const slider1 = useRef();
  const slider2 = useRef();
  const { nav1, nav2 } = state;
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { t } = useTranslation("common");
  return (
    <div className="product-left-box">
      <div className="product-main-1">
        {productState?.product?.is_sale_enable ? (
          <div className="product-label-tag">
            <span>{t("SALE")}</span>
          </div>
        ) : productState?.product?.is_featured ? (
          <div className="product-label-tag warning-label-tag">
            <span>{t("Featured")}</span>
          </div>
        ) : null}
        <Row className="g-sm-4 g-2">
          {productState?.product?.product_galleries?.map((image, i) => (
            <Col xl={12} md={6} key={i}>
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
                  image?.original_url && <Image src={image?.original_url} alt={image?.name} className="img-fluid" height={579} width={579} />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default StickImage;
