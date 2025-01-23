import AddProductDetail from "./AddProductDetail";
import ProductBundle from "./ProductBundle";
import ProductDetailAction from "./ProductDetailAction";

const ProductDetails = ({ productState }) => {
  return (
    <>
      <Col xl={4} lg={5} className="vendor-right-box">
        <div className="right-box-contain">
          <div className="main-right-box-contain"></div>
          <ProductDetails productState={productState} />
          {productState?.product?.type == "classified" && <ProductAttribute productState={productState} setProductState={setProductState} />}
          {productState?.product?.sale_starts_at && productState?.product?.sale_expired_at && <OfferTimer productState={productState} />}
          <ProductDetailAction productState={productState} setProductState={setProductState} />
          <AddProductDetail productState={productState} />
          <ProductInformation productState={productState} />
          {productState?.product?.estimated_delivery_text || (productState?.product?.return_policy_text && productState?.product?.is_return) ? <ProductDeliveryInformation productState={productState} /> : null}
          <PaymentOtions productState={productState} />
          {themeOption?.product?.social_share && productState?.product?.social_share ? <ProductSocial productState={productState} /> : null}
        </div>
      </Col>
      {productState?.product?.cross_sell_products?.length > 0 && (
        <Col xs={12} className="related-product-2">
          <ProductBundle productState={productState} />
        </Col>
      )}
    </>
  );
};

export default ProductDetails;
