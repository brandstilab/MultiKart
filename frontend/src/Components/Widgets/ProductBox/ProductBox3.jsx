import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./Widgets/CartButton";
import CompareButton from "./Widgets/HoverButton/CompareButton";
import QuickViewButton from "./Widgets/HoverButton/QuickViewButton";
import WishlistButton from "./Widgets/HoverButton/WishlistButton";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";
import ProductRatingBox from "./Widgets/ProductRatingBox";

const ProductBox3 = ({ productState, setProductState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <>
      <div className={`basic-product theme-product-2 ${productState?.product?.stock_status === "out_of_stock" ? "sold-out" : ""}`}>
        <div className="product-detail mt-0">
          <Link className="product-title" href={`/product/${productState?.product?.slug}`}>
            {productState?.selectedVariation ? productState?.selectedVariation.name : productState?.product?.name}
          </Link>
          <div className="rating">
            <ProductRatingBox ratingCount={productState?.rating_count} />
          </div>
          {productState?.product?.unit && (
            <ul className="details">
              <li>{productState?.product?.unit}</li>
            </ul>
          )}
          <div className="add-wish">
            <WishlistButton productstate={productState?.product} />
          </div>
        </div>
        <div className="img-wrapper">
          <Link href={`/product/${productState?.product?.slug}`}>
            <img src={productState?.selectedVariation?.variation_image ? productState?.selectedVariation.variation_image.original_url : productState?.product?.product_thumbnail?.original_url} className="img-fluid" alt={productState?.product?.name} />
          </Link>
          <div className="quick-view-part">
            <QuickViewButton productstate={productState} />
          </div>
        </div>
        <div className="bottom-detail">
          <div>
            <div className="color-panel color-lg">
              <ProductBoxVariantAttribute productState={productState} setProductState={setProductState} showVariableType={["color"]} />
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
        <ul className="cart-detail">
          <li>
            <CartButton productState={productState} selectedVariation={productState.selectedVariation} text="Add to cart" />
          </li>
          <li>
            <CompareButton productstate={productState?.product} text="Compare" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductBox3;
