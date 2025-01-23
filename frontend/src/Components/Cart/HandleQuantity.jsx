import CartContext from "@/Context/CartContext";
import Btn from "@/Elements/Buttons/Btn";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { Input, InputGroup } from "reactstrap";

const HandleQuantity = ({ classes = {}, productObj, elem, customIcon }) => {
  const { cartProducts, handleIncDec } = useContext(CartContext);
  const [productQty, setProductQty] = useState(0);

  useEffect(() => {
    const foundProduct = cartProducts.find((el) => (elem?.variation_id ? elem?.variation_id === el?.variation_id : el.product_id === elem?.product_id));
    if (foundProduct) {
      setProductQty(foundProduct.quantity);
    } else {
      setProductQty(0);
    }
  }, [cartProducts]);

  const handleDecrease = useCallback(() => {
    handleIncDec(-1, productObj, productQty, setProductQty, false, elem);
  }, [handleIncDec, productObj, productQty, elem]);

  const handleIncrease = useCallback(() => {
    handleIncDec(1, productObj, productQty, setProductQty, false, elem);
  }, [handleIncDec, productObj, productQty, elem]);

  return (
    <div className="qty-box">
      <InputGroup>
        <span className="input-group-prepend" onClick={handleDecrease}>
          <Btn className="quantity-left-minus" id="quantity-left-minus" type="button">
            {customIcon && productQty <= 1 ? customIcon : <RiSubtractLine />}
          </Btn>
        </span>
        <Input className="input-number qty-input" type="text" name="quantity" value={productQty} readOnly />
        <span className="input-group-prepend" onClick={handleIncrease}>
          <Btn className="quantity-left-plus" id="quantity-left-plus" type="button">
            <RiAddLine />
          </Btn>
        </span>
      </InputGroup>
    </div>
  );
};

export default HandleQuantity;
