import Avatar from "@/Components/Widgets/Avatar";
import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import SettingContext from "@/Context/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import { useContext, useEffect, useState } from "react";
import { Container, Input, InputGroup } from "reactstrap";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import StickyCheckoutButtons from "../StickCheckoutButtons";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ShowProduct = ({ productState, setProductState }) => {
  const [totalPrice, settotalPrice] = useState(0);
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
    totalPrice;
  };

  useEffect(() => {
    wholesalePriceCal();
  }, [totalPrice]);
  const { convertCurrency } = useContext(SettingContext);
  return (
    <div className="sticky-bottom-cart container">
      <Container className="p-0">
        <div className="cart-content">
          <div className="product-image d-md-inline-flex d-none">
            <Avatar data={productState?.selectedVariation?.variation_image ?? productState?.product?.product_thumbnail} placeHolder={placeHolderImage} name={productState?.selectedVariation ? productState?.selectedVariation?.name : productState?.product?.name} />
            <div className="content d-lg-block d-none">
              <h5>{productState?.selectedVariation ? productState?.selectedVariation?.name : productState?.product?.name}</h5>
              <h6>
                {productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.sale_price) : convertCurrency(productState?.product?.sale_price)}
                {productState?.selectedVariation?.discount ?? productState?.product?.discount ? (
                  <>
                    <del>{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.price) : convertCurrency(productState?.product?.price)}</del>
                    <span>{productState?.selectedVariation ? productState?.selectedVariation?.discount : productState?.product?.discount}% Off</span>
                  </>
                ) : null}
              </h6>
            </div>
          </div>
          <div className="middle-value">
            <div className="selection-section">
              <div className="form-group mb-0">
                <div className="product-right product-page-details">
                  <ProductAttribute productState={productState} setProductState={setProductState} stickyAddToCart={true} />
                </div>
              </div>
            </div>
            <div className="qty-box d-sm-inline-block d-none">
              <InputGroup>
                <span className="input-group-prepend">
                  <Btn className=" quantity-left-minus" id="quantity-left-minus18" type="submit" onClick={() => updateQty(-1)}>
                    <RiArrowLeftSLine />
                  </Btn>
                </span>
                <Input className="input-number" type="number" value={productState?.productQty} readOnly />
                <span className="input-group-prepend">
                  <Btn type="submit" className="quantity-left-plus" id="quantity-left-plus18" onClick={() => updateQty(1)}>
                    <RiArrowRightSLine />
                  </Btn>
                </span>
              </InputGroup>
            </div>
          </div>
          <div className="add-btn">
            <StickyCheckoutButtons productState={productState} setProductState={setProductState} extraOption={false} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShowProduct;
