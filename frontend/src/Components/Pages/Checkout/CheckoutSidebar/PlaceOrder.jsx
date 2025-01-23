import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const PlaceOrder = ({ values, addToCartData, errors }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { settingData } = useContext(SettingContext);
  const access_token = Cookies.get("uat");
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [getOrderNumber, setGetOrderNumber] = useState("");
  const [errorOrder, setErrorOrder] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (!access_token) {
      setDisable(Object.keys(errors).length > 0);
    } else {
      setDisable(!(values["billing_address_id"] && values["payment_method"]));
    }
  }, [access_token, values, errors]);

  const handleClick = () => {
    // router.push(`/account/order/details/1000`);
    //  Put your logic here
  };  
  return (
    <div className="text-end">
      {addToCartData?.is_digital_only ? (
        <Btn className="order-btn" onClick={handleClick} disabled={values["billing_address_id"] && values["payment_method"] ? false : true}>
          {t("PlaceOrder")}
        </Btn>
      ) : (
        <Btn className="order-btn" onClick={handleClick} disabled={disable}>
          {t("PlaceOrder")}
        </Btn>
      )}
    </div>
  );
};

export default PlaceOrder;
