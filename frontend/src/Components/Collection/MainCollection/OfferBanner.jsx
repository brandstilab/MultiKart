import ProductIdsContext from "@/Context/ProductIdsContext";
import RatioImage from "@/Utils/RatioImage";
import Link from "next/link";
import { useContext } from "react";

const OfferBanner = ({ classes = {}, imgUrl, ratioImage, customRatioClass = "", elem }) => {
  const { filteredProduct } = useContext(ProductIdsContext);
  const redirectToProduct = (productId) => {
    const product = filteredProduct.find((elem) => elem?.id == productId);
    return "product/" + product?.slug;
  };
  return (
    <div className={`${classes?.customClass ? classes?.customClass : ""}`}>
      {elem?.redirect_link?.link_type === "external_url" ? (
        <Link href={elem?.redirect_link?.link || "/"} target="_blank">
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : "home-contain hover-effect"}`}>{ratioImage ? <RatioImage src={imgUrl} className={`bg-img ${customRatioClass}`} alt="banner" /> : <img src={imgUrl} className={`img-fluid ${customRatioClass}`} alt="banner" />}</div>
        </Link>
      ) : elem?.redirect_link?.link_type === "collection" ? (
        <Link href={`/collections?category=${elem?.redirect_link?.link}` || "/"}>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : "home-contain hover-effect"}`}>{ratioImage ? <RatioImage src={imgUrl} className={`bg-img ${customRatioClass}`} alt="banner" /> : <img src={imgUrl} className={`img-fluid ${customRatioClass}`} alt="banner" />}</div>
        </Link>
      ) : elem?.redirect_link?.link_type === "product" ? (
        <Link href={`/${redirectToProduct(elem?.redirect_link?.link)}` || "/"}>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : "home-contain hover-effect"}`}>{ratioImage ? <RatioImage src={imgUrl} className={`bg-img ${customRatioClass}`} alt="banner" /> : <img src={imgUrl} className={`img-fluid ${customRatioClass}`} alt="banner" />}</div>
        </Link>
      ) : (
        <div className={`${classes?.customHoverClass ? classes?.customHoverClass : "home-contain hover-effect"}`}>{ratioImage ? <RatioImage src={imgUrl} className={`bg-img ${customRatioClass}`} alt="banner" /> : <img src={imgUrl} className={`img-fluid ${customRatioClass}`} alt="banner" />}</div>
      )}
    </div>
  );
};

export default OfferBanner;
