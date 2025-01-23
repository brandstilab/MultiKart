import SettingContext from "@/Context/SettingContext";
import { ImagePath } from "@/Utils/Constants";
import Link from "next/link";
import React, { useContext } from "react";
import ProductRating from "../ProductRating";
import CartButton from "./Widgets/CartButton";
import ImageVariant from "./Widgets/ImageVariant";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";

const ProductBoxHorizontal = ({ productState, style }) => {
  const { convertCurrency } = useContext(SettingContext);
  return (
    <>
      {style == "single_product" ? (
        <div className="deal-box">
          <div className="deal-image">
            <ImageVariant height={313} width={402} product={productState?.product} gallery_images={productState?.selectedVariation ? productState?.selectedVariation?.variation_image : productState?.product?.product_galleries} thumbnail={productState?.selectedVariation ? productState?.selectedVariation?.variation_image : productState?.product?.product_thumbnail} />
          </div>
          <div className="deal-content">
            {productState?.product?.brand && (
              <Link href={`/brand/${productState?.product?.brand.slug}`} className="product-title">
                <h5 className="gradient-text">{productState?.product?.brand?.name}</h5>
              </Link>
            )}
            <Link href={`/product/ ${productState?.product?.slug}`}>
              <h2>{productState?.selectedVariation ? productState?.selectedVariation?.name : productState?.product?.name}</h2>
            </Link>
            {productState?.product?.short_description && <p>{productState?.product?.short_description}</p>}
            <ProductBoxVariantAttribute productState={productState} showVariableType={["color", "rectangle", "circle", "radio", "dropdown", "image"]} />
            <CartButton classes="btn gradient-btn" text="Add To Cart" productState={productState} />
          </div>
        </div>
      ) : (
        <div className="media">
          {productState?.product?.product_thumbnail && (
            <Link href={`/product/${productState?.product?.slug}`}>
              <img className="img-fluid" src={productState?.product?.product_thumbnail?.original_url ? productState?.product?.product_thumbnail?.original_url : `${ImagePath}/placeholder.png`} alt="" />
            </Link>
          )}
          <div className="media-body align-self-center">
            <ProductRating totalRating={productState?.product?.rating_count} />
            <Link href={`/product/${productState?.product?.slug}`}>
              <h6>{productState?.product?.name}</h6>
            </Link>
            <h4>
              {productState?.product?.discount ? (
                <>
                  {convertCurrency(productState?.product?.sale_price)}
                  {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                </>
              ) : (
                convertCurrency(productState?.product?.price)
              )}
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductBoxHorizontal;
