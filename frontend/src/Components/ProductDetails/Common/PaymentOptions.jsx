import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Image from "next/image";
import { useContext } from "react";
import { storageURL } from "@/Utils/Constants";
import { useTranslation } from "react-i18next";

const PaymentOptions = ({ productState }) => {
  const { themeOption } = useContext(ThemeOptionContext);

  const { t } = useTranslation("common");
  return (
    <>
      {themeOption?.product?.safe_checkout && productState?.product?.safe_checkout ? (
        <div className="paymnet-option">
          <div className="dashed-border-box">
            <h4 className="sub-title">{t("GuaranteedSafeCheckout")}</h4>
            {themeOption?.product?.safe_checkout_image && <Image src={storageURL + themeOption?.product?.safe_checkout_image} alt="Safe Checkout" className="img-fluid payment-img" height={33} width={301} />}
          </div>
        </div>
      ) : null}
      {themeOption?.product?.secure_checkout && productState?.product?.secure_checkout ? (
        <div className="dashed-border-box">
          <h4 className="sub-title">{t("SecureCheckout")}</h4>
          {themeOption?.product?.secure_checkout_image && <Image src={storageURL + themeOption?.product?.secure_checkout_image} alt="Secure Checkout" className="img-fluid security-img mt-1 " height={26} width={376} />}
        </div>
      ) : null}
    </>
  );
};

export default PaymentOptions;
