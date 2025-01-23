import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
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
import SliderImage from "./SliderImage";

const ProductSlider = ({ productState, setProductState }) => {
  const { setCollectionMobile } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <WrapperComponent classes={{ sectionClass: "collection-wrapper ratio_asos product-details-box", fluidClass: "container" }} noRowCol={true}>
    
        <SliderImage productState={productState} />
        <Row>
          <Col xxl="9" xl="8" lg="7">
            <Row className="g-4">
              <div className="col-12 rtl-text">
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
              </div>
              <WrapperComponent classes={{ sectionClass: "tab-product section-b-space product-details-contain m-0 px-0", fluidClass: "container" }} customCol={true}>
                <ProductDetailsTab productState={productState} />
              </WrapperComponent>
            </Row>
          </Col>
          <ProductDetailSidebar productState={productState} />
        </Row>
        <RelatedProduct productState={productState} />
      </WrapperComponent>
    </>
  );
};

export default ProductSlider;
