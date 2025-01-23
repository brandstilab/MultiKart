import CartContext from "@/Context/CartContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiAddLine, RiDeleteBinLine, RiSubtractLine } from "react-icons/ri";
import { Input } from "reactstrap";

const CartButton = ({ productState, text, classes, iconClass = true, quantity = false, selectedVariation }) => {
  const { cartProducts, handleIncDec } = useContext(CartContext);
  const { cartCanvas, setCartCanvas } = useContext(ThemeOptionContext);
  const [variationModal, setVariationModal] = useState("");
  const { t } = useTranslation("common");
  const [productQty, setProductQty] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const getSelectedVariant = useMemo(() => {
    return cartProducts.find((elem) => (elem?.variation_id ? elem?.variation_id == productState?.selectedVariation?.id : elem.product_id === productState?.product?.id));
  }, [cartProducts, productState]);

  useEffect(() => {
    setProductQty(0);
    const foundProduct = cartProducts.find((elem) => (elem?.variation_id ? elem?.variation_id == getSelectedVariant?.variation_id : elem?.product_id === productState?.product?.id));
    if (foundProduct) {
      if (foundProduct?.quantity || !isOpen) {
        setProductQty(foundProduct?.quantity);
        setIsOpen(true);
      }
    } else {
      if (productQty !== 0 || isOpen) {
        setProductQty(0);
        setIsOpen(false);
      }
    }
  }, [getSelectedVariant]);

  const externalProductLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      {!productState?.product?.is_external ? (
        <>
          {quantity ? (
            <>
              {productState?.product?.stock_status === "in_stock" ? (
                <button
                  id={`add-to-cart${productState?.product?.id}`}
                  className="add-button add_cart"
                  onClick={() => {
                    setCartCanvas(true);
                    handleIncDec(1, productState?.product, productQty, setProductQty, setIsOpen, getSelectedVariant ? getSelectedVariant : null);
                  }}
                >
                  {text}
                </button>
              ) : (
                <button id={`add-to-cart${productState?.product?.id}`} className="add-button add_cart" disabled>
                  {t("OutOfStock")}
                </button>
              )}

              {productQty > 0 && (
                <div className={`qty-box ${isOpen && productQty >= 1 ? "open" : ""}`}>
                  <div className="input-group">
                    <Btn
                      type="button"
                      className="btn quantity-left-minus"
                      onClick={() => {
                        setCartCanvas(true);
                        handleIncDec(-1, productState?.product, productQty, setProductQty, setIsOpen, getSelectedVariant ? getSelectedVariant : null);
                      }}
                    >
                      {productQty > 1 ? <RiSubtractLine /> : <RiDeleteBinLine />}
                    </Btn>
                    <Input className="form-control input-number qty-input" type="text" name="quantity" value={productQty} readOnly />
                    <Btn
                      type="button"
                      className="btn quantity-right-plus"
                      onClick={() => {
                        setCartCanvas(true);
                        handleIncDec(1, productState?.product, productQty, setProductQty, setIsOpen, getSelectedVariant ? getSelectedVariant : null);
                      }}
                    >
                      <RiAddLine />
                    </Btn>
                  </div>
                </div>
              )}
            </>
          ) : productState?.product?.stock_status == "in_stock" ? (
            <Btn
              color="transparent"
              id={`add-to-cart'+${productState?.product?.id}`}
              className={`${classes ? classes : ""}  ${productQty > 0 ? "active" : ""}`}
              iconClass={iconClass ? iconClass : <RiAddLine />}
              onClick={() => {
                productState?.product?.external_url ? window.open(productState?.product?.external_url, "_blank") : setCartCanvas(true);
                handleIncDec(1, productState?.product, productQty, setProductQty, setIsOpen, productState);
                productState?.product?.type === "classified" ? setVariationModal(productState?.product?.id) : setCartCanvas(!cartCanvas);
              }}
            >
              <i className="ri-shopping-cart-line"></i>
              <span> {!(productQty > 0) ? text : "Added"}</span>
            </Btn>
          ) : (
            <Btn id={`out-of-stock'+${productState?.product?.id}`} className={classes ? classes : ""} disabled={true} iconClass={iconClass ? iconClass : <RiAddLine />}>
              {text ? "Out of stock" : ""}
            </Btn>
          )}
        </>
      ) : (
        <Btn id={`add-to-cart${productState?.product?.id}`} className={`btn btn-add-cart addcart-button ${classes ? classes : ""}`} onClick={() => externalProductLink(productState?.product?.external_url)}>
          {productState?.product?.external_button_text ? productState?.product?.external_button_text : "BuyNow"}
        </Btn>
      )}
    </>
  );
};

export default CartButton;
