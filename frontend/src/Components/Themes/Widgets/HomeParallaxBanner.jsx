import Btn from "@/Elements/Buttons/Btn";
import { storageURL } from "@/Utils/Constants";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const HomeParallaxBanner = ({ banners, text_right, classes }) => {
  return (
    <div className={`full-banner parallax text-center bg-size ${text_right ? "p-right" : "p-left"} ${classes ? classes : ""}`} style={{ backgroundImage: `url(${storageURL + banners?.image_url})` }}>
      <img src={storageURL + banners?.image_url} alt="" className="bg-img" />
      <Container>
        <Row>
          <Col>
            <div className="banner-contain">
              <h2>{banners?.main_title}</h2>
              <h3>{banners?.title}</h3>
              <h4>{banners?.sub_title}</h4>
              {banners?.button_text && <Btn className="btn-solid">{banners?.button_text}</Btn>}
            </div>
          </Col>
        </Row>
      </Container>
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
  );
};

export default HomeParallaxBanner;
