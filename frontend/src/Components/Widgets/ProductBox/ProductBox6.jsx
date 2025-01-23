import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./Widgets/CartButton";
import ProductHoverButton from "./Widgets/ProductHoverButton";
import ProductRatingBox from "./Widgets/ProductRatingBox";
import OfferTimer from "@/Components/ProductDetails/Common/OfferTimer";

const ProductBox6 = ({ productState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <div className="basic-product theme-product-5">
        <div className="img-wrapper">
          {productState?.product?.sale_starts_at && productState?.product?.sale_expired_at && <div className="d-none d-sm-flex"><OfferTimer productState={productState} noHeading /></div>}
          <Link href={`/product/${productState?.product?.slug}`}>
            <img src={productState?.selectedVariation ? productState?.selectedVariation.variation_image.original_url : productState?.product?.product_thumbnail?.original_url} className="img-fluid bg-img" alt={productState?.product?.name} />
          </Link>
          <div className="cart-info">
            <CartButton productState={productState} selectedVariation={productState.selectedVariation} />
            <ProductHoverButton productstate={productState.product} />
          </div>
          {productState?.product?.is_trending || productState?.product?.is_sale_enable || productState?.product?.is_featured ? <label className="rotate-label">{productState?.product?.is_sale_enable ? "sale" : productState?.product?.is_featured ? "featured" : productState?.product?.is_trending ? "trending" : ""}</label> : null}
        </div>
        <div className="product-detail">
          <div className="brand-w-color">
            {productState?.product?.brand && (
              <Link className="product-title" href={`/brand/${productState?.product?.brand.slug}`}>
                {productState?.product?.brand.name}
              </Link>
            )}
            <div className="rating-w-count">
              <div className="rating">
                <ProductRatingBox ratingCount={productState?.rating_count} />
              </div>
              <span>({productState?.product?.reviews_count})</span>
            </div>
          </div>
          <h6>{productState?.product?.name}</h6>
          <h4 className="price">
            {productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.sale_price) : convertCurrency(productState?.product?.sale_price)}{" "}
            {productState?.selectedVariation ? (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || productState?.product?.price != productState?.product?.sale_price ? <del>{convertCurrency(productState?.selectedVariation?.price)}</del> : ""}
                <span className="discounted-price">
                  {productState?.selectedVariation?.discount} % {t("Off")}
                </span>
              </>
            ) : (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del> }
                <span className="discounted-price">
                  {productState?.product?.discount} % {t("Off")}
                </span>
              </>
            )}
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProductBox6;
