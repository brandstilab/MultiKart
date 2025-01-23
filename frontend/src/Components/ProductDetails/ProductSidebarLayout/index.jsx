import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CustomerOrderCount from "../Common/CustomerOrderCount";
import PaymentOptions from "../Common/PaymentOptions";
import ProductBundle from "../Common/ProductBundle";
import ProductContent from "../Common/ProductContent";
import ProductDeliveryInformation from "../Common/ProductDeliveryInformation";
import ProductDetailSidebar from "../Common/ProductDetailSidebar";
import ProductDetailsTab from "../Common/ProductDetailsTab";
import ProductInformation from "../Common/ProductInformation";
import ProductStatus from "../Common/ProductStatus";
import RelatedProduct from "../Common/RelatedProduct";
import WishlistCompareShare from "../Common/WishlistCompareShare";
import ThumbnailProductImage from "../ProductThumbnail/ThumbnailImage";

const ProductSidebarLayout = ({ productState, setProductState, direction }) => {
  return (
    <WrapperComponent classes={{ sectionClass: "collection-wrapper", fluidClass: "container" }} customCol={true}>
      <Container fluid className="p-0">
        <Row>
          {direction == "left" && <ProductDetailSidebar customClass={"collection-filter product-sidebar-box"} productState={productState} />}
          <Col lg="9" sm="12">
            <Container fluid className="p-0">
              <Row>
                <Col lg="6">
                  <ThumbnailProductImage productState={productState} setProductState={setProductState} slideToShow={3} />
                </Col>
                <Col lg="6" className="rtl-text">
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
          </Col>
          {direction == "right" && <ProductDetailSidebar customClass={"product-sidebar-box"} productState={productState} />}
        </Row>
      </Container>

      <WrapperComponent classes={{ sectionClass: "tab-product product-details-contain m-0", fluidClass: "container" }} customCol={true}>
        <ProductDetailsTab productState={productState} setProductState={setProductState} />
      </WrapperComponent>

      {productState?.product?.related_products?.length > 0 && <RelatedProduct customContainerClass="section-t-space" productState={productState} setProductState={setProductState} />}
    </WrapperComponent>
  );
};

export default ProductSidebarLayout;
