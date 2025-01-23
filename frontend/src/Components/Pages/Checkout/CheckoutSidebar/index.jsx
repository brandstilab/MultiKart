import NoDataFound from "@/Components/Widgets/NoDataFound";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import { CheckoutAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import BillingSummary from "./BillingSummary";
import SidebarProduct from "./SidebarProduct";

const CheckoutSidebar = ({ values, setFieldValue, errors, addToCartData }) => {
  const [storeCoupon, setStoreCoupon] = useState("");
  const { cartProducts, isLoading: CartLoading, getCartLoading, cartTotal } = useContext(CartContext);
  const { t } = useTranslation("common");
  const [errorCoupon, setErrorCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const { settingData } = useContext(SettingContext);
  const access_token = Cookies.get("uat");
  const [resData, setResData] = useState({});

  const { isLoading } = useCreate(
    CheckoutAPI,
    false,
    false,
    true,
    (resDta) => {
      if (resDta?.status == 200 || resDta?.status == 201) {
        setResData(resDta);
        setErrorCoupon("");
        storeCoupon !== "" && setAppliedCoupon("applied");
      } else {
        setErrorCoupon(resDta?.response?.data?.message);
      }
    },
    false,
    setErrorCoupon,
    false,
    false,
    false,
    (resDta) => {
      setStoreCoupon("");
      setAppliedCoupon(null);
      setFieldValue("coupon", "");
      values["coupon"] = "";
    }
  );

  // Submitting data on Checkout
  useEffect(() => {
    if (settingData?.activation?.guest_checkout && !access_token) {
      if (values["delivery_description"] && values["payment_method"]) {
        values["products"] = cartProducts;
        // Put your logic here
      }
    } else {
      if (access_token && values["billing_address_id"] && values["shipping_address_id"] && values["delivery_description"] && values["payment_method"]) {
        // Put Your logic here
      }
    }
  }, [CartLoading, cartTotal, errors, values["points_amount"], values["wallet_balance"], values["billing_address_id"], values["delivery_description"], values["payment_method"], values["shipping_address_id"], values["delivery_interval"]]);

  return (
    <>
      <Col lg="5">
        {cartProducts?.length > 0 ? (
          <div className="checkout-right-box">
            <SidebarProduct values={values} setFieldValue={setFieldValue} />
            <BillingSummary values={values} errors={errors} setFieldValue={setFieldValue} data={resData} errorCoupon={errorCoupon} appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} storeCoupon={storeCoupon} setStoreCoupon={setStoreCoupon} isLoading={isLoading} addToCartData={addToCartData} />
          </div>
        ) : (
          <NoDataFound customClass="no-data-added" height={156} width={180} imageUrl={`/assets/svg/empty-items.svg`} title="EmptyCart" />
        )}
      </Col>
    </>
  );
};

export default CheckoutSidebar;
