import { ModifyString } from "@/Utils/CustomFunctions/ModifyString";
import { useTranslation } from "react-i18next";

const ProductInformation = ({ productState }) => {
  const { t } = useTranslation("common");
  return (
    <div className="bordered-box">
      <h4 className="sub-title">{t("ProductInformation")}</h4>

      <ul className="shipping-info">
        <li>
          {t("SKU")} : {productState?.selectedVariation?.sku ?? productState?.product?.sku}
        </li>

        {productState?.selectedVariation?.unit ? (
          <li>
            {t("Unit")} : {productState?.selectedVariation?.unit ?? productState?.product?.unit}
          </li>
        ) : null}
        {productState?.product?.weight ? (
          <li>
            {t("Weight")} : {productState?.product?.weight} {ModifyString("gms")}
          </li>
        ) : null}
        <li>
          {t("StockStatus")} :{productState?.selectedVariation?.stock_status ? ModifyString(productState?.selectedVariation?.stock_status, false, "_") : ModifyString(productState?.product?.stock_status, false, "_")}
        </li>
        <li>
          {t("Quantity")} : {productState?.selectedVariation?.quantity ?? productState?.product?.quantity} Items Left
        </li>
      </ul>
    </div>
  );
};

export default ProductInformation;
