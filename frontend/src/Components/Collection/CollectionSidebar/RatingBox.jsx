import { useState } from "react";
import { RiStarFill, RiStarLine } from "react-icons/ri";

const RatingBox = ({ classes = {}, totalRating, clickAble, setFieldValue, name }) => {
  const RatingStar = Array.from({ length: 5 }, (_, index) => index);
  const [rating, setRating] = useState(totalRating);
  const handleRate = (elem) => {
    setRating(elem);
    setFieldValue && name && setFieldValue(name, elem);
  };
  return (
    <>
      {clickAble ? (
        <div className={`product-rating ${classes?.customClass ? classes?.customClass : ""}`}>
          {RatingStar &&
            RatingStar.map((elem, index) => (
              <li key={elem} onClick={() => handleRate(index + 1)}>
                {index + 1 <= rating ? <RiStarFill color="orange" size="17" /> : <RiStarLine size="17" />}
              </li>
            ))}
        </div>
      ) : (
        <div className={`rating ${classes?.customClass ? classes?.customClass : ""}`}>{RatingStar && RatingStar.map((elem) => <span key={elem}>{elem + 1 <= totalRating ? <RiStarFill color="orange" size="17" /> : <RiStarLine size="17" />}</span>)}</div>
      )}
    </>
  );
};

export default RatingBox;
