import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./Widgets/CartButton";
import WishlistButton from "./Widgets/HoverButton/WishlistButton";
import ProductBoxVariantAttribute from "./Widgets/ProductBoxVariantAttributes";
import ProductHoverButton from "./Widgets/ProductHoverButton";
import ProductRatingBox from "./Widgets/ProductRatingBox";

const ProductBox9 = ({ productState, setProductState }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  return (
    <>
      <div className={`basic-product theme-product-8 ${productState?.product?.stock_status === "out-of-stock" ? "sold-out" : ""}`}>
        <div className="img-wrapper">
          <Link href={`/product/${productState?.product?.slug}`} className="img-fluid lazyload bg-img bg-top">
            <img  src={productState?.selectedVariation?.variation_image ? productState?.selectedVariation.variation_image.original_url : productState?.product?.product_thumbnail?.original_url} className="img-fluid bg-img" alt="product-image" />
          </Link>
          <div className="cart-info">
            <WishlistButton productstate={productState?.product} />
            <ProductHoverButton productstate={productState.product} actionsToHide={"wishlist"} />
          </div>
          {productState?.product?.product_galleries?.length > 0 && (
            <ul className="general-variant thumbnail">
              <ProductBoxVariantAttribute productState={productState} setProductState={setProductState} showVariableType={["image"]} onSelectVariant={productState?.selectedVariant} />
            </ul>
          )}
        </div>
        <div className="product-detail">
          <Link href={`/product/${productState?.product?.slug}`} className="product-title">
            {productState?.product?.name}
          </Link>
          <h4 className="price">
            {convertCurrency(productState?.product?.sale_price)}{" "}
            {productState?.product?.discount && (
              <>
                {productState?.selectedVariation?.price != productState?.selectedVariation?.sale_price || (productState?.product?.price != productState?.product?.sale_price && <del>{convertCurrency(productState?.product?.price)}</del>)}
                <span className="discounted-price">
                  {productState?.product?.discount}% {t("Off")}
                </span>
              </>
            )}
          </h4>
          <div className="rating-w-count mb-0">
            <div className="rating">
              <ProductRatingBox ratingCount={productState?.rating_count} />
            </div>
            <span>({productState?.product?.reviews_count})</span>
          </div>
          <CartButton productState={productState} selectedVariation={productState.selectedVariation} classes="add-round-btn" />
        </div>
      </div>
    </>
  );
};

export default ProductBox9;
