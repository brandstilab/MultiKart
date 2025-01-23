"use client";
import CartContext from "@/Context/CartContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useContext } from "react";
import WrapperComponent from "../Widgets/WrapperComponent";
import CartButtons from "./CartButtons";
import ShowCartData from "./ShowCartData";

const CartContent = () => {
  const { cartProducts, getCartLoading } = useContext(CartContext);
  const { isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"Cart"} subNavigation={[{ name: "Cart" }]} />
      <WrapperComponent classes={{ sectionClass: "cart-section section-b-space", fluidClass: "container" }} noRowCol={true}>
        <ShowCartData />
        {cartProducts.length > 0 && <CartButtons />}
      </WrapperComponent>
    </>
  );
};

export default CartContent;
