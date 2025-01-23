import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CustomerOrderCount from "../Common/CustomerOrderCount";
import ProductContent from "../Common/ProductContent";
import ProductDetailsTab from "../Common/ProductDetailsTab";
import RelatedProduct from "../Common/RelatedProduct";
import ThumbnailProductImage from "../ProductThumbnail/ThumbnailImage";
import ProductDescription from "./ProductDescription";
import WishlistCompareShare from "../Common/WishlistCompareShare";
import PaymentOptions from "../Common/PaymentOptions";
import ProductStatus from "../Common/ProductStatus";

const ProductAccordion = ({ productState, setProductState }) => {
  return (
    <>
      <WrapperComponent classes={{ sectionClass: "collection-wrapper", fluidClass: "container" }} customCol={true}>
        <Col xl={8} lg={7}>
          <Row className="g-sm-4 g-3">
            <Col xl={6}>
              <div className="thumbnail-image-slider">
                <Row className="g-sm-4 g-3">
                  <Col xs={12}>
                    <ThumbnailProductImage productState={productState} setProductState={setProductState} slideToShow={3} />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xl={6}>
              <div className="product-page-details product-description-box">
                <CustomerOrderCount productState={productState} />
                <ProductContent productState={productState} setProductState={setProductState} productAccordion={true} />
                <ProductDescription productState={productState} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={4} lg={5}>
          <div className="product-page-details product-form-box product-right-box">
            <ProductContent productState={productState} setProductState={setProductState} noDetails={true} noModals={true} />
            <WishlistCompareShare productState={productState} />
            <ProductStatus productState={productState} />
            <PaymentOptions productState={productState} />
          </div>
        </Col>
        <Col xs={12}>
          <WrapperComponent classes={{ sectionClass: "tab-product product-details-contain section-b-space", fluidClass: "container p-0" }} customCol={true}>
            <ProductDetailsTab productState={productState} setProductState={setProductState} />
          </WrapperComponent>
        </Col>
        {productState?.product?.related_products?.length > 0 && <RelatedProduct productState={productState} setProductState={setProductState} />}
      </WrapperComponent>
    </>
  );
};

export default ProductAccordion;
