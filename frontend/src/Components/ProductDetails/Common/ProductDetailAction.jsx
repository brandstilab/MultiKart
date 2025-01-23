import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Input, InputGroup } from "reactstrap";
import ProductWholesale from "./ProductWholesale";

const ProductDetailAction = ({ productState, setProductState, extraOption, isDisplay = true }) => {
  const { t } = useTranslation("common");
  const { handleIncDec, isLoading } = useContext(CartContext);
  const { convertCurrency } = useContext(SettingContext);
  const [totalPrice, settotalPrice] = useState(0);
  const router = useRouter();
  const addToCart = () => {
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
  };
  const buyNow = () => {
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
    router.push(`/checkout`);
  };
  const updateQty = (qty) => {
    if (1 > productState?.productQty + qty) return;
    setProductState((prev) => {
      return { ...prev, productQty: productState?.productQty + qty };
    });
    checkStockAvailable();
    wholesalePriceCal();
  };
  const checkStockAvailable = () => {
    if (productState?.selectedVariation) {
      setProductState((prevState) => {
        const tempSelectedVariation = { ...prevState.selectedVariation };
        tempSelectedVariation.stock_status = tempSelectedVariation.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          selectedVariation: tempSelectedVariation,
        };
      });
    } else {
      setProductState((prevState) => {
        const tempProduct = { ...prevState.product };
        tempProduct.stock_status = tempProduct.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          product: tempProduct,
        };
      });
    }
  };

  const wholesalePriceCal = () => {
    let wholesale = productState?.product?.wholesales?.find((value) => value?.min_qty <= productState?.productQty && value?.max_qty >= productState?.productQty) || null;

    if (wholesale && productState?.product.wholesale_price_type == "fixed") {
      setProductState((prev) => {
        return { ...prev, totalPrice: prev?.productQty * wholesale.value };
      });
    } else if (wholesale && productState?.product.wholesale_price_type == "percentage") {
      setProductState((prev) => {
        return { ...prev, totalPrice: prev?.productQty * (prev?.selectedVariation ? prev?.selectedVariation.sale_price : prev?.product.sale_price) };
      });
      setProductState((prev) => {
        return { ...prev, totalPrice: prev?.totalPrice - prev?.totalPrice * (wholesale.value / 100) };
      });
    } else {
      setProductState((prev) => {
        return { ...prev, totalPrice: prev?.productQty * (prev?.selectedVariation ? prev?.selectedVariation.sale_price : prev?.product.sale_price) };
      });
    }
  };

  useEffect(() => {
    wholesalePriceCal();
  }, [totalPrice]);
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
          <div className="qty-section">
            <div className="cart_qty qty-box product-qty">
              <InputGroup>
                <span className="input-group-prepend">
                  <Btn className=" quantity-left-minus" id="quantity-left-minus18" type="submit" onClick={() => updateQty(-1)}>
                    <RiArrowLeftSLine />
                  </Btn>
                </span>
                <Input className="input-number" type="number" value={productState?.productQty} readOnly />
                <span className="input-group-prepend">
                  <Btn type="submit" className=" quantity-left-plus" id="quantity-left-plus18" onClick={() => updateQty(1)}>
                    <RiArrowRightSLine />
                  </Btn>
                </span>
              </InputGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailAction;
