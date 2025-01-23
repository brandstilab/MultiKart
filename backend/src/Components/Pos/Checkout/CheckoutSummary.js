import React, { useContext, useEffect } from "react";
import { Card } from "reactstrap";
import SettingContext from "@/Helper/SettingContext";
import PlaceOrder from "./PlaceOrder";
import ApplyCoupon from "../ApplyCoupon";
import PointWallet from "../PointWallet";
import Loader from "@/Components/CommonComponent/Loader";
import { useTranslation } from "react-i18next";

const CheckoutSidebar = ({ addToCartData, values, setFieldValue, data, loading, mutate, userData, errorCoupon, appliedCoupon, setAppliedCoupon, storeCoupon, setStoreCoupon }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");

  // Checking point and wallet for particular user
  useEffect(() => {
    userData?.filter((elem) => {
      if (elem.id == values["consumer_id"]) {
        if (elem?.point) {
          setFieldValue("isPoint", elem?.point);
        } else {
          setFieldValue("isPoint", "");
        }
        if (elem?.wallet) {
          setFieldValue("isWallet", elem?.wallet);
        } else {
          setFieldValue("isWallet", "");
        }
      }
    });
  }, [values["consumer_id"]]);

  // Submitting data on Checkout
  useEffect(() => {
    if (values["billing_address_id"] && values["shipping_address_id"] && values["delivery_description"] && values["payment_method"]) {
      values["variation_id"] = "";
      // if (loading) {
        setStoreCoupon("");
        setFieldValue("coupon", "");
      // }
    }
    
  }, [values["billing_address_id"], values["shipping_address_id"], values["payment_method"], values["delivery_description"], values["points_amount"], values["wallet_balance"]]);
  return (
    <Card className="pos-detail-card">
      <div className="pos-loader">
        {loading && <Loader />}
        <ul className={`summary-total`}>
          <li>
            <h4>{t("Subtotal")}</h4>
            <h4 className="price">{data?.data?.total?.sub_total ? convertCurrency(data?.data?.total?.sub_total) : t(`Notcalculatedyet`)}</h4>
          </li>
          <li>
            <h4>{t("Shipping")}</h4>
            <h4 className="price">{data?.data?.total?.shipping_total >= 0 ? convertCurrency(data?.data?.total?.shipping_total) : t(`Notcalculatedyet`)}</h4>
          </li>
          <li>
            <h4>{t("Tax")}</h4>
            <h4 className="price">{data?.data?.total?.tax_total ? convertCurrency(data?.data?.total?.tax_total) : t(`Notcalculatedyet`)}</h4>
          </li>

          <PointWallet values={values} setFieldValue={setFieldValue} data={data} />
          {values["consumer_id"] && values["billing_address_id"] && values["shipping_address_id"] && values["payment_method"] && values["delivery_description"] && <ApplyCoupon errorCoupon={errorCoupon} values={values} setFieldValue={setFieldValue} data={data} storeCoupon={storeCoupon} setStoreCoupon={setStoreCoupon} mutate={mutate} isLoading={loading} appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} />}

          <li className="list-total">
            <h4>{t("Total")}</h4>
            <h4 className="price">{data?.data?.total?.total ? convertCurrency(data?.data?.total?.total) : t(`Notcalculatedyet`)}</h4>
          </li>
        </ul>
      </div>
      <PlaceOrder addToCartData={addToCartData} values={values} />
    </Card>
  );
};

export default CheckoutSidebar;
