import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./Widgets/CartButton";
import WishlistButton from "./Widgets/HoverButton/WishlistButton";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";
import ProductHoverButton from "./Widgets/ProductHoverButton";
import ProductRatingBox from "./Widgets/ProductRatingBox";

const ProductBox5 = ({ productState, setProductState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <>
      <div className={`basic-product theme-product-4 ${productState?.product?.stock_status === "out_of_stock" ? "sold-out" : ""}`}>
        <div className="img-wrapper">
          <Link href={`/product/${productState?.product?.slug}`}>
            <img src={productState?.selectedVariation?.variation_image ? productState?.selectedVariation.variation_image.original_url : productState?.product?.product_thumbnail.original_url} className="img-fluid bg-img" alt={productState?.product?.name} />
          </Link>
          <ul className="trending-label">
            {productState?.product?.stock_status === "out_of_stock" ? <li className="out_of_stock">{t("SoldOut")}</li> : null}
            {productState?.product?.is_sale_enable ? <li>{t("Sale")}</li> : null}
            {productState?.product?.is_featured ? <li>{t("Featured")}</li> : null}
            {productState?.product?.is_trending ? <li>{t("Trending")}</li> : null}
          </ul>

          <div className="color-panel coverflow">
            <ProductBoxVariantAttribute productState={productState} setProductState={setProductState} showVariableType={["color"]} />
          </div>

          <div className="cart-info">
            <WishlistButton productstate={productState?.product} classes="wishlist-icon" />
            <CartButton productState={productState} selectedVariation={productState.selectedVariation} />
            <ProductHoverButton productstate={productState.product} actionsToHide={"wishlist"} />
          </div>
        </div>

        <div className="product-detail">
          <a className="product-title mb-2" onClick={() => router.push(`/product/${productState?.product?.slug}`)}>
            {productState?.selectedVariation ? productState?.selectedVariation.name : productState?.product?.name}
          </a>

          <div className="rating-w-count">
            <div className="rating">
              <ProductRatingBox ratingCount={productState?.rating_count} />
            </div>
            <span>({productState?.product?.reviews_count})</span>
          </div>

          <h4 className="price">
            {productState?.selectedVariation ? convertCurrency(productState?.selectedVariation.sale_price) : convertCurrency(productState?.product?.sale_price)}{" "}
            {productState?.selectedVariation ? (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                <span className="discounted-price">
                  {productState?.selectedVariation.discount}% {t("Off")}
                </span>
              </>
            ) : (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                <span className="discounted-price">
                  {productState?.product?.discount}% {t("Off")}
                </span>
              </>
            )}
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProductBox5;
