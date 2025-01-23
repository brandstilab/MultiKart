import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./Widgets/CartButton";
import ImageVariant from "./Widgets/ImageVariant";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";
import ProductHoverButton from "./Widgets/ProductHoverButton";

const ProductBox11 = ({ productState, setProductState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <>
      <div className={`basic-product theme-product-10 ${productState?.selectedVariation ? (productState?.selectedVariation.stock_status === "out_of_stock" || !productState?.selectedVariation.status ? "sold-out" : "") : productState?.product?.stock_status === "out_of_stock" ? "sold-out" : ""}`}>
        <div className="img-wrapper">
          <ImageVariant thumbnail={productState.selectedVariation?.variation_image ? productState.selectedVariation.variation_image : productState.product?.product_thumbnail} gallery_images={productState.product?.product_galleries} product={productState.product} width={750} height={750} />
          <CartButton productState={productState} selectedVariation={productState.selectedVariation} text="Add to cart" classes="addto-cart-bottom" />
          <div className="cart-info">
            <ProductHoverButton productstate={productState} />
          </div>
        </div>
        <div className="product-detail">
          {productState?.product?.brand && (
            <Link href={`/brand/${productState?.product?.brand.name}`} className="product-title">{productState?.product?.brand.name}</Link>
          )}

          <Link href={`/product/${productState?.product?.slug}`} className="product-title">
            <h6>{productState?.selectedVariation ? productState?.selectedVariation.name : productState?.product?.name}</h6>
          </Link>

          <h4 className="price">
            {productState?.selectedVariation ? convertCurrency(productState?.selectedVariation.sale_price) : convertCurrency(productState?.product?.sale_price)}
            {productState?.selectedVariation ? (
              productState?.selectedVariation.discount ? (
                <>
                  {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                  <span className="discounted-price">
                    {productState?.selectedVariation.discount}% {t("Off")}
                  </span>
                </>
              ) : null
            ) : productState?.product?.discount ? (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                <span className="discounted-price">
                  {productState?.product?.discount}% {t("Off")}
                </span>
              </>
            ) : null}
          </h4>

          <ProductBoxVariantAttribute productBox11={true} productState={productState} setProductState={setProductState} showVariableType={["dropdown"]} />
        </div>
      </div>
    </>
  );
};

export default ProductBox11;
