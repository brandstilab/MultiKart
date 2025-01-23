import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ProductRating from "../ProductRating";
import CartButton from "./Widgets/CartButton";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";
import ProductHoverButton from "./Widgets/ProductHoverButton";

const ProductBox12 = ({ productState, setProductState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <div className="basic-product theme-product-11">
        <div className="img-wrapper">
          <Link href={`/product/${productState?.product?.slug}`}>
            <img src={productState?.selectedVariation?.variation_image ? productState?.selectedVariation.variation_image.original_url : productState?.product?.product_thumbnail?.original_url} className="img-fluid" alt={productState?.product?.name} />
          </Link>
          <div className="cart-info">
            <ProductHoverButton productstate={productState?.product} />
          </div>
          {productState?.product?.is_trending || productState?.product?.is_sale_enable || productState?.product?.is_featured ? <label className="trending-label-product11 ">{productState?.product?.is_sale_enable ? "Sale" : productState?.product?.is_featured ? "Featured" : productState?.product?.is_trending ? "Trending" : ""}</label> : null}
        </div>
        <div className="product-detail">
          {productState?.product?.brand && (
            <Link href={`/brand/${productState?.product?.brand?.slug}`} className="product-title">
              {productState?.product?.brand?.name}
            </Link>
          )}
          <h6>{productState?.product?.name}</h6>
          <h4 className="price">
            {productState?.selectedVariation ? convertCurrency(Number(productState?.selectedVariation.sale_price).toFixed(2)) : convertCurrency(Number(productState?.product?.sale_price))}
            {productState?.selectedVariation
              ? productState?.selectedVariation.discount
              : productState?.product?.discount && (
                  <>
                    {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                    <span className="discounted-price">
                      {productState?.selectedVariation ? productState?.selectedVariation.discount : productState?.product?.discount}% {t("Off")}
                    </span>
                  </>
                )}
          </h4>
          <div className="rating-w-count mb-0 mt-2">
            <ProductRating totalRating={productState?.product?.rating_count || 0} />
            <span>({productState?.product?.reviews_count})</span>
          </div>
        </div>
        <div className="abs-product">
          <div className="product-detail mt-0">
            {productState?.product?.brand && (
              <Link href={`/brand/${productState?.product?.brand.slug}`} className="product-title mb-2">
                {productState?.product?.brand.name}
              </Link>
            )}
            <h4 className="price">
              {productState?.selectedVariation ? convertCurrency(Number(productState?.selectedVariation.sale_price).toFixed(2)) : convertCurrency(Number(productState?.product?.sale_price).toFixed(2))}
              {productState?.selectedVariation
                ? productState?.selectedVariation.discount
                : productState?.product?.discount && (
                    <>
                      {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                      <span className="discounted-price">
                        {productState?.selectedVariation ? productState?.selectedVariation.discount : productState?.product?.discount}% {t("Off")}
                      </span>
                    </>
                  )}
            </h4>
          </div>
          <ProductBoxVariantAttribute productState={productState} setProductState={setProductState} showVariableType={["color", "rectangle", "circle", "radio", "dropdown", "image"]} />
          <CartButton productState={productState} selectedVariation={productState?.selectedVariation} text="Add To Cart" iconClass="" classes="add-cart-btn" />
        </div>
      </div>
    </>
  );
};

export default ProductBox12;
