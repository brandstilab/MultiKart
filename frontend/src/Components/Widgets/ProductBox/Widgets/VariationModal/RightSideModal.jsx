import ProductRating from "@/Components/Widgets/ProductRating";
import SettingContext from "@/Context/SettingContext";
import { Href } from "@/Utils/Constants";
import TextLimit from "@/Utils/CustomFunctions/TextLimit";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const RightVariationModal = ({ cloneVariation }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <>
      <h2 className="main-title">{cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.name : cloneVariation?.product?.name}</h2>
      <div className="product-rating">
        <ProductRating totalRating={cloneVariation?.product?.rating_count} />
        <span className="divider">|</span>
        <a href={Href}>
          {cloneVariation?.product?.reviews_count} {t("Reviews")}
        </a>
      </div>
      <div className="price-text">
        <h3>
          <span className="text-dark fw-normal">MRP:</span>
          {cloneVariation?.selectedVariation ? convertCurrency(cloneVariation?.selectedVariation?.sale_price) : convertCurrency(cloneVariation?.product?.sale_price)}
          {cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.discount : cloneVariation?.product?.discount ? <del>{cloneVariation?.selectedVariation ? convertCurrency(cloneVariation?.selectedVariation?.price) : convertCurrency(cloneVariation?.product?.price)}</del> : null}
          {cloneVariation?.selectedVariation ? (
            cloneVariation?.selectedVariation?.discount
          ) : cloneVariation?.product?.discount ? (
            <span className="discounted-price">
              {cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.discount : cloneVariation?.product?.discount}% {t("Off")}
            </span>
          ) : null}
        </h3>
        <span>{t("InclusiveAllTheText")} </span>
      </div>
      <TextLimit classes="description-text" value={cloneVariation?.product?.short_description} maxLength={200} tag={"p"} />
    </>
  );
};

export default RightVariationModal;
