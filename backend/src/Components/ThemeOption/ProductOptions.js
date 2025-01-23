import React from "react";
import { RiEyeLine, RiHeartLine, RiRefreshLine, RiStarSFill } from "react-icons/ri";

export const ProductOption = () => {
  return (
    <ul className="product-option">
      <li>
        <a>
          <RiEyeLine />
        </a>
      </li>
      <li>
        <a>
          <RiRefreshLine />
        </a>
      </li>
      <li>
        <a className="notifi-wishlist">
          <RiHeartLine />
        </a>
      </li>
    </ul>
  );
};

export const ProductRating = ({ratingClassName}) => {
  return (
    <div className={`product-rating ${ratingClassName?ratingClassName:""}`}>
      <ul className="price">
        <li>
          <RiStarSFill />
        </li>
        <li>
          <RiStarSFill />
        </li>
        <li>
          <RiStarSFill />
        </li>
        <li>
          <RiStarSFill />
        </li>
        <li>
          <RiStarSFill />
        </li>
      </ul>
      <h6 className="theme-color"> In Stock </h6>
    </div>
  );
};
