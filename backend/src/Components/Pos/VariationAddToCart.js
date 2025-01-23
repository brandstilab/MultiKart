import Btn from "@/Elements/Buttons/Btn";

import { useTranslation } from "react-i18next";

const VariationAddToCart = ({ cloneVariation, setFieldValue, setModal }) => {
  const { t } = useTranslation("common");
  const addToCart = (allProduct) => {
    if (cloneVariation.selectedVariation) {
      const params = {
        product_id: allProduct?.id,
        variation_id: cloneVariation?.selectedVariation?.id,
        quantity: cloneVariation?.productQty,
      };
      setFieldValue("variation_id", cloneVariation?.selectedVariation?.id);
      // Put Your Logic Here
      setModal(false);
    }
  };
  return (
    <div className="addtocart_btn">
      {cloneVariation?.selectedVariation?.stock_status == "in_stock" || (cloneVariation?.product?.stock_status == "in_stock" && cloneVariation?.product.type === "simple") ? (
        <Btn onClick={() => addToCart(cloneVariation.product)} className="add-button addcart-button btn buy-button">
          {" "}
          {t("AddToCart")}{" "}
        </Btn>
      ) : (
        <Btn disabled={true} className="btn btn-animation disabled">
          {cloneVariation?.selectedVariation?.stock_status == "out_of_stock" || cloneVariation?.product.stock_status == "out_of_stock" ? t("OutOfStock") : t("AddToCart")}
        </Btn>
      )}
    </div>
  );
};
export default VariationAddToCart;
