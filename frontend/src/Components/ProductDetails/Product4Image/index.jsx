import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { Col } from "reactstrap";
import CustomerOrderCount from "../Common/CustomerOrderCount";
import PaymentOptions from "../Common/PaymentOptions";
import ProductBundle from "../Common/ProductBundle";
import ProductContent from "../Common/ProductContent";
import ProductDeliveryInformation from "../Common/ProductDeliveryInformation";
import ProductDetailsTab from "../Common/ProductDetailsTab";
import ProductInformation from "../Common/ProductInformation";
import ProductStatus from "../Common/ProductStatus";
import WishlistCompareShare from "../Common/WishlistCompareShare";
import FourImage from "./FourImage";
import RelatedProduct from "../Common/RelatedProduct";

const Product4Image = ({ productState, setProductState }) => {
  return (
    <WrapperComponent classes={{ sectionClass: "collection-wrapper ratio_asos", fluidClass: "container", row: "g-4" }} customCol={true}>
      <Col lg={6}>
        <FourImage productState={productState} />
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
          {productState?.product?.cross_sell_products?.length > 0 && (
            <Col xs={12} className="related-product-2">
              <ProductBundle productState={productState} setProductState={setProductState} />
            </Col>
          )}
        </div>
      </Col>
      <WrapperComponent classes={{ sectionClass: "tab-product product-details-contain m-0 section-b-space", fluidClass: "container" }} customCol={true}>
        <ProductDetailsTab productState={productState} setProductState={setProductState} />
      </WrapperComponent>
      {productState?.product?.related_products?.length > 0 && <RelatedProduct productState={productState} setProductState={setProductState} />}

    </WrapperComponent>
  );
};

export default Product4Image;
