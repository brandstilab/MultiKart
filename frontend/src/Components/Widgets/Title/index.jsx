import React from "react";
import { RiFlashlightLine } from "react-icons/ri";

const TitleBox = ({ title, type, textWhite, space = true, classes }) => {
  return (
    <>
      {type === "basic" && (
        <div className={`title1 ${space ? "section-t-space" : ""}`}>
          {title?.tag && <h4>{title.tag}</h4>}
          <h4 className="skeleton-text-h4"></h4>
          <h2 className="title-inner1">{title.title}</h2>
          <h2 className="skeleton-text-h2"></h2>

          {title.description && (
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="product-para">
                    <p className="text-center">{title.description}</p>
                    <p className="skeleton-text-p">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {type === "gradient" && (
        <div className={`title1 ${space ? "section-t-space" : ""}`}>
          {title?.tag && <h4>{title.tag}</h4>}
          <h4 className="skeleton-text-h4"></h4>
          <h2 className="title-inner1 title-gradient">{title.title}</h2>
          <h2 className="skeleton-text-h2"></h2>

          {title.description && (
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="product-para">
                    <p className="text-center">{title.description}</p>
                    <p className="skeleton-text-p">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {type === "simple" && (
        <div className={`title1 wo-border section-t-space ${classes ? classes : ""}`}>
          {title.tag && <h4>{title.tag}</h4>}
          <h4 className="skeleton-text-h4"></h4>
          <h2 className="title-inner1 font-cormorant">{title.title}</h2>
          <h2 className="skeleton-text-h2"></h2>
          {title.description && (
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="product-para">
                    <p className="text-center">{title.description}</p>
                    <p className="skeleton-text-p">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {type === "classic" && (
        <div className="title2 text-start">
          <h2 className="title-inner2 p-0">{title.title}</h2>
          <h2 className="skeleton-text-h2 title-inner2 p-0"></h2>
        </div>
      )}

      {type === "standard" && (
        <div className="title2">
          {title.tag && <h4>{title.tag}</h4>}
          <h4 className="skeleton-text-h4"></h4>
          <h2 className="title-inner2">{title.title}</h2>
          <h2 className="skeleton-text-h2 mx-auto"></h2>
        </div>
      )}

      {type === "premium" && (
        <div className="title4">
          {title?.tag && <h4>{title.tag}</h4>}
          <h4 className="skeleton-text-h4"></h4>
          <h2 className="title-inner4">{title.title}</h2>
          <h2 className="skeleton-text-h2 title-inner4 mx-auto"></h2>
          <div className="line">
            <span></span>
          </div>
        </div>
      )}

      {type === "digital" && (
        <div className="title1 wo-border section-t-space">
          <h4>{title.tag}</h4>
          <h2 className="title-inner1 font-courgette">{title.title}</h2>
        </div>
      )}

      {type === "luxury" && (
        <div className="title3">
          <h4>{title.tag}</h4>
          <h4 className="skeleton-text-h4"></h4>
          <h2 className="title-inner3">{title.title}</h2>
          <h2 className="skeleton-text-h2 title-inner3 mx-auto"></h2>
          <div className="line"></div>
          {title.description && (
            <div className="about-text">
              <p>{title.description}</p>
              <p className="skeleton-text-p">
                <span></span>
                <span></span>
              </p>
            </div>
          )}
        </div>
      )}

      {type === "fraunces" && (
        <>
          <div className={`title6 ${space ? "section-t-space" : ""}`}>
            <h2 className={`font-fraunces ${textWhite ? "text-white" : ""}`}>{title.title}</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="product-para">
                  <p className={`text-center ${textWhite ? "text-white" : ""}`}>{title.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {type === "icon" && (
        <div className="title-basic">
          <h2 className="title font-fraunces">
            <RiFlashlightLine className="me-2" />
            {title.title}
          </h2>
          <h2 className="skeleton-text-h2 title font-fraunces"></h2>
        </div>
      )}

      {type === "vegetable" && (
        <div className="title8">
          <h2>{title.title}</h2>
          <p>{title.sub_title}</p>
        </div>
      )}

      {type === "jewellery" && (
        <>
          <div className={`title1 title5 ${space ? "section-t-space" : ""}`}>
            <h4>{title.tag}</h4>
            <h4 className="skeleton-text-h4"></h4>
            <h2 className="title-inner1">{title.title}</h2>
            <h2 className="skeleton-text-h2"></h2>
            <hr role="tournament6" />
          </div>
          {title.description && (
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="product-para">
                    <p className="text-center">{title.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {type === "borderless" && <h2 className="title-borderless">{title.title}</h2>}
    </>
  );
};

export default TitleBox;
