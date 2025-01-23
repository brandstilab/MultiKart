import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
// import { placeHolderImage } from '../../../../../../Data/CommonPath';
// import { viewModalSliderOption } from '../../../../../../Data/SliderSettingsData';
import { viewModalSliderOption } from "@/Data/SliderSetting";
import { RiVideoLine } from "react-icons/ri";

const LeftSideModal = ({ cloneVariation, productObj }) => {
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

  const currentVariation = cloneVariation?.selectedVariation?.variation_galleries?.length ? cloneVariation?.selectedVariation?.variation_galleries : cloneVariation?.product?.product_galleries;

  return (
    <Col lg="6">
      <div className="sticky-top-custom position-relative top-0">
        <div className="thumbnail-image-slider">
          <Row className="g-sm-4 g-3">
            <Col xs="12">
              <div className="view-image-slider">
                <Slider asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
                  {currentVariation?.map((item, i) => (
                    <div className="slider-image" key={i}>
                      {videType.includes(item.mime_type) ? (
                        <video className="w-100" controls>
                          <source src={item ? item?.original_url : ""} type={item?.mime_type}></source>
                        </video>
                      ) : audioType.includes(item?.mime_type) ? (
                        <div className="slider-main-img">
                          <audio controls>
                            <source src={item ? item.original_url : ""} type={item.mime_type}></source>
                          </audio>
                        </div>
                      ) : (
                        item?.original_url && <Image src={item ? item?.original_url : placeHolderImage} className="img-fluid" alt={cloneVariation?.product?.name} width={500} height={500} />
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>

            <Col xs="12">
              <div className="thumbnail-slider slider-nav no-arrow">
                <Slider {...viewModalSliderOption} adaptiveHeight={true} slidesToShow={currentVariation?.length < 3 ? currentVariation?.length : currentVariation?.length - 1} asNavFor={nav1} ref={(slider) => (slider2.current = slider)}>
                  {currentVariation?.map((item, i) => (
                    <div className="slider-image" key={i}>
                      {videType.includes(item.mime_type) ? (
                        <>
                          <div className="video-icon">
                            <RiVideoLine />
                          </div>
                          <video className="w-100 ">
                            <source src={item ? item?.original_url : ""} type={item?.mime_type}></source>
                          </video>
                        </>
                      ) : audioType.includes(item?.mime_type) ? (
                        <div className="slider-main-img">
                          <audio controls>
                            <source src={item ? item.original_url : ""} type={item.mime_type}></source>
                          </audio>
                        </div>
                      ) : (
                        item?.original_url && <Image src={item ? item?.original_url : placeHolderImage} className="img-fluid" alt={cloneVariation?.product?.name} width={500} height={500} />
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default LeftSideModal;
