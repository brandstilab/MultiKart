import ProductAttribute from "@/Components/ProductDetails/Common/ProductAttribute/ProductAttribute";
import CustomModal from "@/Components/Widgets/CustomModal";
import CartContext from "@/Context/CartContext";
import Btn from "@/Elements/Buttons/Btn";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { Input, InputGroup } from "reactstrap";
import CartVariationNameDetails from "./CartVariationNameDetails";

const CartVariationModal = ({ modal, setModal, selectedVariation = {} }) => {
  const [cloneVariation, setCloneVariation] = useState();
  const { replaceCartLoader, replaceCart,isLoading } = useContext(CartContext);
  const { t } = useTranslation("common");

  const productInStock = cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.stock_status == "in_stock" : cloneVariation?.product?.stock_status == "in_stock";

  // Setting Selected Variation In Clone State
  useEffect(() => {
    setCloneVariation((prev) => {
      return { ...selectedVariation, attributeValues: [], selectedVariation: "", variantIds: [], productQty: selectedVariation?.quantity };
    });
  }, [selectedVariation, modal]);

  // Update Qty
  const updateQuantity = (qty) => {
    let tempQty = cloneVariation?.productQty;
    if (1 > tempQty + qty) return;
    tempQty = tempQty + qty;
    setCloneVariation((prev) => {
      return { ...prev, productQty: tempQty };
    });
    checkStockAvailable();
  };
  const checkStockAvailable = () => {
    if (cloneVariation?.selectedVariation) {
      setCloneVariation((prevState) => {
        const tempSelectedVariation = { ...prevState.selectedVariation };
        tempSelectedVariation.stock_status = tempSelectedVariation.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          selectedVariation: tempSelectedVariation,
        };
      });
    } else {
      setCloneVariation((prevState) => {
        const tempProduct = { ...prevState.product };
        tempProduct.stock_status = tempProduct.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          product: tempProduct,
        };
      });
    }
  };

  // Replace Cart
  const updateCart = (productObj) => {
    replaceCart(productObj?.productQty, productObj?.product, productObj, selectedVariation);
    // setTimeout(() => {
      !isLoading && setModal(false);
    // }, 0);
  };
  return (
    <CustomModal modal={modal ? true : false} setModal={setModal} classes={{ modalClass: "modal-md theme-modal-2 variation-modal", modalHeaderClass: "p-0" }}>
      <CartVariationNameDetails cloneVariation={cloneVariation} />
      {cloneVariation?.product && modal && <ProductAttribute productState={cloneVariation} setProductState={setCloneVariation} selectedVariation={selectedVariation} />}
      <div className="variation-qty-button">
        <div className="qty-section">
          <div className="qty-box">
            <InputGroup>
              <span className="input-group-prepend" onClick={() => updateQuantity(-1)}>
                <Btn className=" quantity-left-minus" id="quantity-left-minus" type="submit">
                  <RiSubtractLine />
                </Btn>
              </span>
              <Input className=" input-number qty-input" type="text" name="quantity" value={cloneVariation?.productQty} readOnly />

              <span className="input-group-prepend" onClick={() => updateQuantity(1)}>
                <Btn className="quantity-left-plus" id="quantity-left-plus" type="submit">
                  <RiAddLine />
                </Btn>
              </span>
            </InputGroup>
          </div>
        </div>
        <div className="product-buttons">
          <Btn className="btn-animation btn-solid hover-solid scroll-button" disabled={(cloneVariation?.selectedVariation && cloneVariation?.selectedVariation?.stock_status !== "in_stock") || (cloneVariation?.product?.stock_status !== "in_stock" && true)} onClick={() => updateCart(cloneVariation)} loading={Number(replaceCartLoader)}>
            <i className="me-1 ri-shopping-cart-line " />
            <span>{productInStock ? t("UpdateItem") : t("SoldOut")}</span>
          </Btn>
        </div>
      </div>
    </CustomModal>
  );
};

export default CartVariationModal;
