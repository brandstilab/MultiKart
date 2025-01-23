import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import AddToCartButton from "./AddToCartButton";
import ProductWholesale from "./ProductWholesale";

const StickyCheckoutButtons = ({ productState, setProductState, extraOption, isDisplay = true }) => {
  const { t } = useTranslation("common");
  const { handleIncDec, isLoading } = useContext(CartContext);
  const { setCartCanvas } = useContext(ThemeOptionContext);
  const { convertCurrency } = useContext(SettingContext);

  const router = useRouter();
  const addToCart = () => {
    setCartCanvas(true);
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
  };
  const buyNow = () => {
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
    router.push(`/checkout`);
  };

  return (
    <>
      {productState?.product?.wholesales?.length ? (
        <>
          <ProductWholesale productState={productState} />
          <h4>
            {"Total Price:"} <span className="theme-color">{convertCurrency(productState?.totalPrice)}</span>
          </h4>
        </>
      ) : null}

      {isDisplay && (
        <div>
          <AddToCartButton productState={productState} isLoading={isLoading} addToCart={addToCart} buyNow={buyNow} extraOption={extraOption} />
        </div>
      )}
    </>
  );
};

export default StickyCheckoutButtons;
