import React from "react";

const ProductRatingBox = ({ ratingCount }) => {
  const clampedRatingCount = Math.min(Math.max(ratingCount, 0), 5);

  const allFilled = clampedRatingCount === 5;
  const allEmpty = clampedRatingCount === 0;

  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <i key={index} className={allFilled ? "ri-star-fill fill" : allEmpty ? "ri-star-line" : index < clampedRatingCount ? "ri-star-fill fill" : "ri-star-line"} />
        ))}
    </>
  );
};

export default ProductRatingBox;
