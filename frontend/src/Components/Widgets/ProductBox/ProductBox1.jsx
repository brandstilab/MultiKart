import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiStarSFill } from "react-icons/ri";
import CartButton from "./Widgets/CartButton";
import ImageVariant from "./Widgets/ImageVariant";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";
import ProductHoverButton from "./Widgets/ProductHoverButton";

const ProductBox1 = ({ productState, setProductState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");

  return (
    <div className={`basic-product ${productState?.product?.stock_status === "out_of_stock" ? "sold-out" : ""}`}>
      <div className="img-wrapper">
        <ImageVariant thumbnail={productState?.selectedVariation?.variation_image ? productState?.selectedVariation?.variation_image : productState?.product?.product_thumbnail} gallery_images={productState?.product?.product_galleries} product={productState?.product} width={750} height={750} />

        <div className="rating-label">
          <RiStarSFill />
          <span>{productState?.product?.reviews_count}</span>
        </div>

        <div className="cart-info">
          <CartButton classes={"addto-cart-bottom"} productState={productState} selectedVariation={productState?.selectedVariation} text="Add to Cart" />
          <ProductHoverButton productstate={productState?.product} />
        </div>

        <ul className="trending-label">
          {productState?.product?.stock_status === "out_of_stock" ? <li className="out_of_stock">{t("SoldOut")}</li> : null}
          {productState?.product?.is_sale_enable ? <li>{t("Sale")}</li> : null}
          {productState?.product?.is_featured ? <li>{t("Featured")}</li> : null}
          {productState?.product?.is_trending ? <li>{t("Trending")}</li> : null}
        </ul>
      </div>

      <div className="product-detail">
        {productState?.product?.brand && (
          <Link className="product-title" href={`/brand/${productState?.product?.brand.slug}`}>
            {productState?.product?.brand?.name}
          </Link>
        )}

        <Link href={`/product/${productState?.product?.slug}`}>
          <h6>{productState?.selectedVariation ? productState?.selectedVariation?.name : productState?.product?.name}</h6>
        </Link>

        <h4 className="price">
          {productState?.selectedVariation ? convertCurrency(Number(productState?.selectedVariation.sale_price).toFixed(2)) : convertCurrency(Number(productState?.product?.sale_price).toFixed(2))}
          {productState?.selectedVariation ? (
            <>
              {/* <del>{convertCurrency(Number(productState?.selectedVariation?.price).toFixed(2))}</del> */}
              {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
              <span className="discounted-price">
                {productState?.selectedVariation?.discount}% {t("Off")}
              </span>
            </>
          ) : (
            <>
              {/* <del>{convertCurrency(Number(productState?.product?.price).toFixed(2))}</del> */}
              {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
              <span className="discounted-price">
                {productState?.product?.discount}% {t("Off")}
              </span>
            </>
          )}
        </h4>

        <ProductBoxVariantAttribute setProductState={setProductState} productState={productState} showVariableType={["color", "rectangle", "circle", "radio", "dropdown", "image"]} />
      </div>
    </div>
  );
};

export default ProductBox1;
