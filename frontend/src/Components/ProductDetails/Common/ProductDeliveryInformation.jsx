import { useTranslation } from "react-i18next";
import { RiArrowLeftRightLine, RiTruckLine } from "react-icons/ri";

const ProductDeliveryInformation = ({ productState }) => {
  const { t } = useTranslation("common");
  return (
    <>
      {productState?.product?.estimated_delivery_text || (productState?.product?.return_policy_text && productState?.product?.is_return) ? (
        <div className="bordered-box">
          <h4 className="sub-title">{t("DeliveryDetails")}</h4>
          <ul className="product-offer">
            {productState?.product?.estimated_delivery_text ? (
              <li>
                <RiTruckLine /> {productState?.product?.estimated_delivery_text}
              </li>
            ) : null}
            {productState?.product?.return_policy_text ? (
              <li>
                <RiArrowLeftRightLine />
                {productState?.product?.return_policy_text}
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ProductDeliveryInformation;
