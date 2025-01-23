import { Href } from "@/Utils/Constants";
import React from "react";

const ProductSkeleton = ({ style }) => {
  return (
    <>
      {style == "horizontal" ? (
        <div className="media skeleton-media">
          <div className="image-wrapper"></div>
          <div className="media-body align-self-center">
            <div className="rating"></div>
            <div className="name"></div>
            <div className="price"></div>
          </div>
        </div>
      ) : (
        <div className="basic-product skeleton-basic-product">
          <div className="img-wrapper">
            <div className="product-image-box"></div>
          </div>
          <div className="product-detail">
            <a className="product-title" href={Href}></a>
            <a href={Href}>
              <h6></h6>
            </a>
            <h4 className="price"></h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSkeleton;
