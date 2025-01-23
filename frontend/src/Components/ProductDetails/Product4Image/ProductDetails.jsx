import { useContext } from "react";
import ProductBox1Rating from "@/Components/Widgets/ProductBox/ProductBox1/ProductBox1Rating";
import SettingContext from "@/Context/SettingContext";
import { useTranslation } from "react-i18next";

const ProductDetails = ({ productState }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  return (
    <>
      <h2 className="name">{productState?.selectedVariation?.name ?? productState?.product?.name}</h2>
      <div className="price-rating">
        <h3 className="theme-color price">
          {productState?.selectedVariation?.sale_price ? convertCurrency(productState?.selectedVariation?.sale_price) : convertCurrency(productState?.product?.sale_price)}
          {productState?.selectedVariation?.discount || productState?.product?.discount ? <del className="text-content">{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.price) : convertCurrency(productState?.product?.price)}</del> : null}
          {productState?.selectedVariation?.discount || productState?.product?.discount ? <del className="text-content">{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.price) : convertCurrency(productState?.product?.price)}</del> : null}{" "}
          {productState?.selectedVariation?.discount || productState?.product?.discount ? (
            <span className="offer-top">
              {productState?.selectedVariation ? productState?.selectedVariation?.discount : productState?.product?.discount}% {t("Off")}
            </span>
          ) : null}
        </h3>
        <div className="product-rating custom-rate">
          <ProductBox1Rating totalRating={productState?.selectedVariation?.rating_count ?? productState?.product?.rating_count} />
          <span className="review">
            {productState?.selectedVariation?.reviews_count || productState?.product?.reviews_count || 0} {t("Review")}
          </span>
        </div>
      </div>
      <div className="product-contain">
        <p>{productState?.selectedVariation?.short_description ?? productState?.product?.short_description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
