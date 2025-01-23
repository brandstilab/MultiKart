import CartContext from "@/Context/CartContext";
import Btn from "@/Elements/Buttons/Btn";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiShoppingCartLine } from "react-icons/ri";

const AddToCartDigital = ({ productState }) => {
  const { t } = useTranslation("common");
  const { handleIncDec, isLoading } = useContext(CartContext);
  const router = useRouter();

  const addToCart = () => {
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
  };

  const externalProductLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="dynamic-checkout">
      {!productState?.product?.is_external ? (
        <>
          {productState?.product?.type == "simple" ? (
            <Btn className={`${productState?.product?.status === 0 || productState?.product?.stock_status == "out_of_stock" || productState?.product?.quantity < productState?.productQty ? "border-theme-color btn btn-md scroll-button" : "bg-theme btn-md scroll-button"}`} onClick={addToCart} disabled={productState?.product?.status === 0 || productState?.product?.stock_status == "out_of_stock" || productState?.product?.quantity < productState?.productQty} loading={Number(isLoading)}>
              {productState?.product?.stock_status == "out_of_stock" || productState?.product?.quantity < productState?.productQty ? null : <RiShoppingCartLine className="me-2" />}
              {productState?.product?.stock_status == "out_of_stock" || productState?.product?.quantity < productState?.productQty ? t("SoldOut") : t("AddToCart")}
            </Btn>
          ) : (
            <Btn className={`${productState?.selectedVariation ? (productState?.product?.status === 0 || productState?.product?.variations.every((data) => data.status === 0) || productState?.selectedVariation?.stock_status == "out_of_stock" || productState?.selectedVariation?.quantity < productState?.productQty ? "border-theme-color btn btn-md scroll-button" : "bg-theme btn-md scroll-button") : "bg-theme btn-md scroll-button"}`} disabled={productState?.selectedVariation ? productState?.product?.status === 0 || productState?.product?.variations.every((data) => data.status === 0) || productState?.selectedVariation?.stock_status == "out_of_stock" || productState?.selectedVariation?.quantity < productState?.productQty : true} onClick={addToCart} loading={Number(isLoading)}>
              {productState?.product?.status === 0 || productState?.product?.variations?.every((data) => data.status === 0) || productState?.selectedVariation?.stock_status == "out_of_stock" || productState?.selectedVariation?.quantity < productState?.productQty ? null : <RiShoppingCartLine className="me-2" />}
              {productState?.selectedVariation ? (productState?.selectedVariation?.stock_status == "out_of_stock" || productState?.selectedVariation?.quantity < productState?.productQty ? t("SoldOut") : t("AddToCart")) : t("AddToCart")}
            </Btn>
          )}
        </>
      ) : (
        <Btn className="btn btn-md bg-theme scroll-button" onClick={externalProductLink(productState.product.external_url)} loading={Number(isLoading)}>
          {productState?.product?.external_button_text ? productState?.product?.external_button_text : t("BuyNow")}
        </Btn>
      )}
    </div>
  );
};

export default AddToCartDigital;
