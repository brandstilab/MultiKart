import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CustomerOrderCount from "../Common/CustomerOrderCount";
import OfferTimer from "../Common/OfferTimer";
import PaymentOptions from "../Common/PaymentOptions";
import ProductBundle from "../Common/ProductBundle";
import ProductContent from "../Common/ProductContent";
import ProductDeliveryInformation from "../Common/ProductDeliveryInformation";
import ProductDetailsTab from "../Common/ProductDetailsTab";
import ProductInformation from "../Common/ProductInformation";
import ProductStatus from "../Common/ProductStatus";
import RelatedProduct from "../Common/RelatedProduct";
import WishlistCompareShare from "../Common/WishlistCompareShare";
import ThumbnailProductImage from "../ProductThumbnail/ThumbnailImage";

const ProductColumn = ({ productState, setProductState, direction }) => {
  return (
    <section className="collection-wrapper">
      <Container>
        <Row className="g-sm-4 g-3">
          <Col xl="4">
            <ThumbnailProductImage productState={productState} slideToShow={3} />
          </Col>
          <Col xl="4" lg="7">
            <div className="product-right product-description-box product-page-details">
              <CustomerOrderCount productState={productState} />
              <ProductContent productState={productState} setProductState={setProductState} noQuantityButtons={true} productAccordion={true} />
              {/* <WishlistCompareShare productState={productState} /> */}
              <ProductInformation productState={productState} />
              <ProductDeliveryInformation productState={productState} />
              <PaymentOptions productState={productState} />
            </div>
          </Col>
          <Col xl="4" lg="5">
            <div className="product-right product-form-box product-page-details">
              <ProductContent productState={productState} setProductState={setProductState} noDetails={true} noModals={true} />
              <ProductStatus productState={productState} />
              <WishlistCompareShare productState={productState} />
              {productState?.product.status && productState?.product?.sale_starts_at && productState?.product?.sale_expired_at && <OfferTimer productState={productState} />}
              {productState?.product?.cross_sell_products?.length > 0 && <ProductBundle productState={productState} setProductState={setProductState} />}
            </div>
          </Col>
        </Row>
        <WrapperComponent classes={{ sectionClass: "tab-product product-details-contain section-b-space m-0", fluidClass: "container" }} customCol={true}>
          <ProductDetailsTab productState={productState} setProductState={setProductState} />
        </WrapperComponent>
        {productState?.product?.related_products?.length > 0 && <RelatedProduct productState={productState} setProductState={setProductState} />}
      </Container>
    </section>
  );
};

export default ProductColumn;
