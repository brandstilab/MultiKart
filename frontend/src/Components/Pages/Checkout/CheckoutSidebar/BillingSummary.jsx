import NoDataFound from "@/Components/Widgets/NoDataFound";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import Loader from "@/Layout/Loader";
import Cookies from "js-cookie";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ApplyCoupon from "./ApplyCoupon";
import PlaceOrder from "./PlaceOrder";
import PointWallet from "./PointWallet";

const BillingSummary = ({ data, values, setFieldValue, isLoading, mutate, storeCoupon, setStoreCoupon, errorCoupon, appliedCoupon, setAppliedCoupon, errors }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { cartProducts } = useContext(CartContext);
  const { t } = useTranslation("common");
  const access_token = Cookies.get("uat");

  return (
    <div className="checkout-details ">
      {cartProducts?.length > 0 ? (
        <div className="order-box">
          <div className="title-box">
            <h4>{t("BillingSummary")}</h4>
            <ApplyCoupon values={values} setFieldValue={setFieldValue} data={data} storeCoupon={storeCoupon} setStoreCoupon={setStoreCoupon} errorCoupon={errorCoupon} appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} mutate={mutate} isLoading={isLoading} />
          </div>
          <div>
            <div className="custom-box-loader">
              {isLoading && (
                <div className="box-loader">
                  <Loader />
                </div>
              )}
              <ul className="sub-total">
                <li>
                  {t("Subtotal")}
                  <span className="count">{convertCurrency("39.81")}</span>
                </li>
                <li>
                  {t("Shipping")}
                  <span className="count">{convertCurrency("0")}</span>
                </li>
                <li>
                  {t("Tax")}
                  <span className="count">{convertCurrency("1.99")}</span>
                </li>

                <PointWallet values={values} setFieldValue={setFieldValue} data={data} />
              </ul>
              <ul className="total">
                {appliedCoupon == "applied" && data?.data?.total?.coupon_total_discount ? (
                  <li className="list-total">
                    {t("YouSave")}
                    <span className="count">{data?.data?.total?.coupon_total_discount ? convertCurrency(data?.data?.total?.coupon_total_discount - data?.data?.total?.tax_total) : ""}</span>
                  </li>
                ) : null}
                <li className="list-total">
                  {t("Total")}
                  <span className="count">{convertCurrency("41.80")}</span>
                </li>
              </ul>
              <PlaceOrder values={values} errors={errors} />
            </div>
          </div>
        </div>
      ) : (
        <NoDataFound customClass="no-data-added" height={156} width={180} imageUrl={`/assets/svg/empty-items.svg`} title="EmptyCart" />
      )}
    </div>
  );
};

export default BillingSummary;
