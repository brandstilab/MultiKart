import ProductBox from "@/Components/Widgets/ProductBox";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const RelatedProduct = ({ productState, customContainerClass }) => {
  const { t } = useTranslation("common");
  const { filteredProduct } = useContext(ProductIdsContext);
  // const filterProduct = useMemo(() => {
  //   return filteredProduct?.data?.data?.filter((el) => productState?.product?.related_products?.includes(el.id));
  // }, [filteredProduct, productState?.product?.related_products]);

  return (
    <WrapperComponent
      classes={{
        sectionClass: "pt-0 section-b-space m-0",
        fluidClass: customContainerClass ? customContainerClass : "",
      }}
      noRowCol={true}
    >
      <div className="product-related">
        <h2>{t("RelatedProducts")}</h2>
      </div>
      <div>
        <Row className="row row-cols-xxl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-sm-4 g-3">
          {productState?.product?.related_products?.length && (
            <>
              {filteredProduct?.map((product, i) => (
                <Col key={i}>
                  <ProductBox product={product} style="vertical" />
                </Col>
              ))}
            </>
          )}
        </Row>
      </div>
    </WrapperComponent>
  );
};

export default RelatedProduct;
