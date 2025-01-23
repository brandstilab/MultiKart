import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React from "react";
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
import ThumbnailImage from "./ThumbnailImage";
import OfferTimer from "../Common/OfferTimer";

const ProductThumbnail = ({ productState, setProductState, customTab }) => {
  console.log('ooo bjua',productState?.product.status , productState?.product?.sale_starts_at ,productState?.product?.sale_expired_at);
  
  return (
    <WrapperComponent classes={{ sectionClass: "collection-wrapper", fluidClass: "container" }} customCol={true}>
      <Col sm={12}>
        <Container fluid className="p-0">
          <Row className="g-sm-4 g-3">
            <Col lg={6}>
              <ThumbnailImage productState={productState} setProductState={setProductState} slideToShow={4} />
            </Col>
            <Col lg={6} className="rtl-text">
              <div className="product-page-details">
                <CustomerOrderCount productState={productState} />
                <ProductContent productState={productState} setProductState={setProductState} />
                <WishlistCompareShare productState={productState} />
                <ProductStatus productState={productState} />
                {productState?.product.status && productState?.product?.sale_starts_at && productState?.product?.sale_expired_at && <OfferTimer productState={productState} />}
                <ProductInformation productState={productState} />
                <ProductDeliveryInformation productState={productState} />
                <PaymentOptions productState={productState} />
                {productState?.product?.cross_sell_products?.length > 0 && <ProductBundle productState={productState} setProductState={setProductState} />}
              </div>
            </Col>
          </Row>
        </Container>
        <WrapperComponent classes={{ sectionClass: "tab-product product-details-contain section-b-space", fluidClass: "container" }} customCol={true}>
          <ProductDetailsTab productState={productState} setProductState={setProductState} />
        </WrapperComponent>
      </Col>
      {productState?.product?.related_products?.length > 0 && <RelatedProduct productState={productState} setProductState={setProductState} />}
    </WrapperComponent>
  );
};

export default ProductThumbnail;
