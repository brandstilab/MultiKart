import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CustomerOrderCount from "../Common/CustomerOrderCount";
import PaymentOptions from "../Common/PaymentOptions";
import ProductBundle from "../Common/ProductBundle";
import ProductContent from "../Common/ProductContent";
import ProductDeliveryInformation from "../Common/ProductDeliveryInformation";
import ProductInformation from "../Common/ProductInformation";
import ProductStatus from "../Common/ProductStatus";
import RelatedProduct from "../Common/RelatedProduct";
import ThumbnailProductImage from "../ProductThumbnail/ThumbnailImage";
import VerticalProductDetails from "./VerticalProductDetails";
import WishlistCompareShare from "../Common/WishlistCompareShare";

const ProductVerticalTab = ({ productState, setProductState, customTab }) => {
  return (
    <WrapperComponent classes={{ sectionClass: "product-section collection-wrapper", fluidClass: "container" }} customCol={true}>
      <Col sm={12}>
        <Container fluid className="p-0">
          <Row>
            <Col lg={6}>
              <ThumbnailProductImage productState={productState} setProductState={setProductState} slideToShow={4} />{" "}
            </Col>
            <Col lg={6} className="rtl-text">
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
            </Col>
          </Row>
        </Container>
        <WrapperComponent classes={{ sectionClass: "tab-product m-0 vertical-tab section-b-space", fluidClass: "container", row: "outer-border g-0" }} customCol={true}>
          <VerticalProductDetails productState={productState} />
        </WrapperComponent>
      </Col>
      {productState?.product?.related_products?.length > 0 && <RelatedProduct productState={productState} setProductState={setProductState} />}
    </WrapperComponent>
  );
};

export default ProductVerticalTab;
