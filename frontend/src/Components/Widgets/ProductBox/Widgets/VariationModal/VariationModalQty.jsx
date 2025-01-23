import CartContext from "@/Context/CartContext";
import Btn from "@/Elements/Buttons/Btn";
import { useContext, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Input } from "reactstrap";

const VariationModalQty = ({ cloneVariation, setCloneVariation }) => {
  const { cartProducts } = useContext(CartContext);
  const [totalPrice, settotalPrice] = useState(0);
  const updateQuantity = (qty) => {
    if (1 > cloneVariation?.productQty + qty) return;
    setCloneVariation((prev) => {
      return { ...prev, productQty: cloneVariation?.productQty + qty };
    });
    checkStockAvailable();
    wholesalePriceCal();
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

  const wholesalePriceCal = () => {
    let wholesale = cloneVariation?.product?.wholesales?.find((value) => value?.min_qty <= cloneVariation?.productQty && value?.max_qty >= cloneVariation?.productQty) || null;

    if (wholesale && cloneVariation?.product.wholesale_price_type == "fixed") {
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.productQty * wholesale.value };
      });
    } else if (wholesale && cloneVariation?.product.wholesale_price_type == "percentage") {
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.productQty * (prev?.selectedVariation ? prev?.selectedVariation.sale_price : prev?.product.sale_price) };
      });
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.totalPrice - prev?.totalPrice * (wholesale.value / 100) };
      });
    } else {
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.productQty * (prev?.selectedVariation ? prev?.selectedVariation.sale_price : prev?.product.sale_price) };
      });
    }
    totalPrice;
  };

  useEffect(() => {
    wholesalePriceCal();
  }, [totalPrice]);
  return (
    <div className="qty-section">
      <div className="qty-box ">
        <div className="input-group">
          <span className="input-group-prepend">
            <Btn color="transparent" className=" quantity-left-minus" onClick={() => updateQuantity(-1)}>
              <RiArrowLeftSLine />
            </Btn>
          </span>
          <Input className="input-number " type="text" name="quantity" value={cloneVariation?.productQty} readOnly />
          <span className="input-group-prepend">
            <Btn color="transparent" className=" quantity-right-plus" onClick={() => updateQuantity(1)}>
              <RiArrowRightSLine />
            </Btn>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VariationModalQty;
