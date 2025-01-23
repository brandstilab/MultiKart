import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./Widgets/CartButton";
import ProductHoverButton from "./Widgets/ProductHoverButton";
import ProductRatingBox from "./Widgets/ProductRatingBox";

const ProductBox7 = ({ productState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <div className={`basic-product theme-product-6 ${productState?.product?.stock_status === "out_of_stock" ? "sold-out" : ""}`}>
        <div className="img-wrapper">
          {productState?.product?.unit && <label className="unit-label">{productState?.product?.unit}</label>}

          <ul className="trending-label">
            {productState?.product?.stock_status === "out_of_stock" ? <li className="out_of_stock">{t("SoldOut")}</li> : null}
            {productState?.product?.is_sale_enable ? <li>{t("Sale")}</li> : null}
            {productState?.product?.is_featured ? <li>{t("Featured")}</li> : null}
            {productState?.product?.is_trending ? <li>{t("Trending")}</li> : null}
          </ul>

          <Link href={`/product/${productState?.product?.slug}`} className="img-fluid lazyload bg-img bg-top">
            <img src={productState?.product?.product_thumbnail?.original_url} className="img-fluid bg-img" alt="product-image" />
          </Link>
          <div className="cart-info">
            <ProductHoverButton productstate={productState.product} />
          </div>
        </div>
        <div className="product-detail">
          <Link href={`/product/${productState?.product?.slug}`} className="product-title">
            {productState?.product?.name}
          </Link>
          <div className="rating-w-count">
            <div className="rating">
              <ProductRatingBox ratingCount={productState?.rating_count} />
            </div>
            <span>({productState?.product?.reviews_count})</span>
          </div>
          <h4 className="price">
            {convertCurrency(productState?.product?.sale_price)}{" "}
            {productState?.product?.discount && (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                <span className="discounted-price">{productState?.product?.discount}% Off</span>
              </>
            )}
          </h4>
          <div className="addtocart_btn">
            <CartButton productState={productState} selectedVariation={productState.selectedVariation} quantity={true} classes="add-button add_cart" text="Add to cart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox7;
