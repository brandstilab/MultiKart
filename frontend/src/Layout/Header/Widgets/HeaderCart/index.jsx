import CartContext from "@/Context/CartContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { RiShoppingCartLine } from "react-icons/ri";
import HeaderCartData from "./HeaderCartData";

const HeaderCart = () => {
  const { themeOption, cartCanvas, setCartCanvas } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");
  const { cartProducts } = useContext(CartContext);
  const cartStyle = useMemo(() => {
    return themeOption?.general?.cart_style ? themeOption?.general?.cart_style : "cart_sidebar";
  });
  return (
    <>
      <RiShoppingCartLine onClick={() => setCartCanvas(true)} />
      {cartProducts?.length > 0 && <span className="cart_qty_cls ">{cartProducts?.length}</span>}
      <HeaderCartData />
    </>
  );
};

export default HeaderCart;
