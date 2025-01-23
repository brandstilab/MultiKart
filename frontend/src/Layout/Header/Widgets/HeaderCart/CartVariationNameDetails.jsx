import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const CartVariationNameDetails = ({ cloneVariation }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  return (
    <div className="product-right product-page-details variation-title">
      <h2 className="main-title">
        <Link href={`/product/${cloneVariation?.product?.slug}`}> {cloneVariation?.variation?.name ?? cloneVariation?.product?.name} </Link>
      </h2>
      <h3 className="price-detail">
        {cloneVariation?.variation?.sale_price ? convertCurrency(cloneVariation?.variation?.sale_price) : convertCurrency(cloneVariation?.product?.sale_price)}
        <span>
          {cloneVariation?.variation?.discount ?? cloneVariation?.product?.discount}% {t("off")}
        </span>
      </h3>
    </div>
  );
};

export default CartVariationNameDetails;
