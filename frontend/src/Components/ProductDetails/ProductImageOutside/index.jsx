import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CustomerOrderCount from "../Common/CustomerOrderCount";
import PaymentOptions from "../Common/PaymentOptions";
import ProductBundle from "../Common/ProductBundle";
import ProductContent from "../Common/ProductContent";
import ProductDeliveryInformation from "../Common/ProductDeliveryInformation";
import ProductDetailsTab from "../Common/ProductDetailsTab";
import ProductInformation from "../Common/ProductInformation";
import ProductStatus from "../Common/ProductStatus";
import RelatedProduct from "../Common/RelatedProduct";
import WishlistCompareShare from "../Common/WishlistCompareShare";
import MainImageSlider from "./MainImageSlider";
import OutsideImageSlider from "./ProductOutsideSlider";

const ProductImageOutside = ({ productState, setProductState, direction }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);


  return (
    <section className="collection-wrapper">
      <Container>
        <Row>
          <Col lg="6">
            <MainImageSlider productState={productState} nav2={nav2} sliderRef1={sliderRef1} setNav1={setNav1} />
          </Col>
          <Col lg="6" className="rtl-text">
            <div className="thumbnail-image-outside">
              <div className="product-page-details">
                <CustomerOrderCount productState={productState} />
                <ProductContent productState={productState} setProductState={setProductState} />
                <WishlistCompareShare productState={productState} />
                <ProductStatus productState={productState} />
                <ProductInformation productState={productState} />
                <ProductDeliveryInformation productState={productState} />
                <PaymentOptions productState={productState} />
                {productState?.product?.cross_sell_products?.length > 0 && <ProductBundle productState={productState} setProductState={setProductState} />}
              </div>
              <div className="image-outside-thumbnail">
                <OutsideImageSlider productState={productState} sliderRef2={sliderRef2} nav1={nav1} setNav2={setNav2} />
              </div>
            </div>
          </Col>
          <WrapperComponent classes={{ sectionClass: "tab-product product-details-contain m-0 section-b-space", fluidClass: "container" }} customCol={true}>
            <ProductDetailsTab productState={productState} setProductState={setProductState} />
          </WrapperComponent>
          {productState?.product?.related_products?.length > 0 && <RelatedProduct productState={productState} setProductState={setProductState} />}
        </Row>
      </Container>
    </section>
  );
};

export default ProductImageOutside;
