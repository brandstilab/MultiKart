import React from "react";

const SellerSkeleton = () => {
  return (
    <div className="seller-grid-box seller-grid-box-1 skeleton-seller">
      <div className="grid-image">
        <div className="vendor-text"></div>
        <div className="contain-name">
          <div>
            <h3></h3>
          </div>
          <div className="product-label"></div>
        </div>
      </div>
      <div className="grid-contain">
        <div className="seller-contact-details">
          <div className="seller-contact"></div>
          <div className="seller-contact mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SellerSkeleton;
