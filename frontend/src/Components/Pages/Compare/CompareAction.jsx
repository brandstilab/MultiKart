import CartContext from "@/Context/CartContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const CompareAction = ({ product }) => {
  const { t } = useTranslation("common");
  const { setCartCanvas } = useContext(ThemeOptionContext);
  const { handleIncDec } = useContext(CartContext);

  const addToCart = () => {
    setCartCanvas(true);
    handleIncDec(1, product);
  };
  return (
    <div className="btn-part">
      <Btn className=" btn-solid" onClick={addToCart}>
        {t("AddToCart")}
      </Btn>
    </div>
  );
};

export default CompareAction;
