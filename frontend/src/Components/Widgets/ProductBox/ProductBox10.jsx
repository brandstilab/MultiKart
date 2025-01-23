import SettingContext from "@/Context/SettingContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiDiscountPercentFill, RiStarFill } from "react-icons/ri";
import CartButton from "./Widgets/CartButton";
import WishlistButton from "./Widgets/HoverButton/WishlistButton";
import ProductHoverButton from "./Widgets/ProductHoverButton";
import { useRouter } from "next/navigation";

const ProductBox10 = ({ productState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <div className="basic-product theme-product-9">
        <div className="img-wrapper overflow-visible">
          {productState?.product?.is_trending || productState?.product?.is_sale_enable || productState?.product?.is_featured ? <div className={`product-tag ribbon-outer ${productState?.product?.is_sale_enable ? "sale-tag" : productState?.product?.is_featured ? "featured-tag" : productState?.product?.is_trending ? "trending-tag" : ""}`}>{productState?.product?.is_sale_enable ? "sale" : productState?.product?.is_featured ? "featured" : productState?.product?.is_trending ? "trending" : ""}</div> : null}

          {productState?.product?.is_sale_enable ? <div className={`ribbon-outer ${productState?.product?.is_featured ? "level2" : ""}`}>{"on_sale"}</div> : null}

          <a onClick={() => router?.push(`/product/${productState?.product?.slug}`)} className="img-fluid lazyload bg-img bg-top">
            <img src={productState?.product?.product_thumbnail?.original_url} className="img-fluid bg-img" alt="product-image" />
          </a>

          <div className="cart-info">
            <WishlistButton productstate={productState?.product} classes="wishlist-icon" />
            <ProductHoverButton productstate={productState.product} actionsToHide={"wishlist"}>
              <CartButton productState={productState} selectedVariation={productState.selectedVariation} />
            </ProductHoverButton>
          </div>
        </div>

        <div className="product-detail">
          {productState?.product?.brand ? (
            <a onClick={() => router.push(`/brand/${productState?.product?.brand.name}`)}>
              <h6>{productState?.product?.brand.name}</h6>
            </a>
          ) : null}

          <a onClick={() => router.push(`/product/${productState?.product?.slug}`)} className="product-title">
            {productState?.product?.name}
          </a>

          <div className="bottom-details">
            <div className="rating-label">
              <div>
                <span>{productState?.product?.rating_count ? productState?.product?.rating_count : 0}</span>
                <RiStarFill />
              </div>
              <span>({productState?.product?.reviews_count} Reviews)</span>
            </div>

            <div className="price-vertical">
              {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
              <h4>{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation.sale_price) : convertCurrency(productState?.product?.sale_price)}</h4>
            </div>
          </div>

          {productState?.product?.discount ? (
            <div className="discount-value">
              <span className="offer-icon me-2">
                <RiDiscountPercentFill />
              </span>
              {t("SaveUpto")} {productState?.product?.discount}% {t("Off")}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductBox10;
