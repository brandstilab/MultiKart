import RatingBox from "@/Components/Collection/CollectionSidebar/RatingBox";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiQuestionnaireLine, RiRulerLine, RiTruckLine } from "react-icons/ri";
import AddToCartButton from "./AddToCartButton";
import DeliveryReturnModal from "./AllModal/DeliveryReturnModal";
import QuestionAnswerModal from "./AllModal/QuestionAnswerModal";
import SizeModal from "./AllModal/SizeModal";
import ProductAttribute from "./ProductAttribute/ProductAttribute";
import ProductDetailAction from "./ProductDetailAction";

const ProductContent = ({ productState, setProductState, productAccordion, noDetails, noQuantityButtons, noModals }) => {
  const { t } = useTranslation("common");
  const { handleIncDec, isLoading } = useContext(CartContext);
  const { convertCurrency } = useContext(SettingContext);
  const { setCartCanvas, themeOption } = useContext(ThemeOptionContext);
  const router = useRouter();
  const addToCart = () => {
    setCartCanvas(true);
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
  };
  const buyNow = () => {
    handleIncDec(productState?.productQty, productState?.product, false, false, false, productState);
    router.push(`/checkout`);
  };
  const [modal, setModal] = useState("");
  const activeModal = {
    size: <SizeModal modal={modal} setModal={setModal} productState={productState} />,
    delivery: <DeliveryReturnModal modal={modal} setModal={setModal} productState={productState} />,
    qna: <QuestionAnswerModal modal={modal} setModal={setModal} productState={productState} />,
  };

  return (
    <>
      {!noDetails && (
        <>
          <h2 className="main-title">{productState?.selectedVariation?.name ?? productState?.product?.name}</h2>
          {!productState?.product?.is_external && (
            <div className="product-rating">
              <RatingBox totalRating={productState?.selectedVariation?.rating_count ?? productState?.product?.rating_count} />
              <span className="divider">|</span>
              <a href={Href} className="mb-0">
                {productState?.selectedVariation?.reviews_count || productState?.product?.reviews_count || 0} {t("Review")}
              </a>
            </div>
          )}
          <div className="price-text">
            <h3>
              <span className="text-dark fw-normal">MRP:</span>
              {productState?.selectedVariation?.sale_price ? convertCurrency(productState?.selectedVariation?.sale_price) : convertCurrency(productState?.product?.sale_price)}

              {productState?.selectedVariation?.discount || productState?.product?.discount ? <del>{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.price) : convertCurrency(productState?.product?.price)}</del> : null}

              {productState?.selectedVariation?.discount || productState?.product?.discount ? (
                <span className="discounted-price">
                  {productState?.selectedVariation ? productState?.selectedVariation?.discount : productState?.product?.discount} % {t("Off")}
                </span>
              ) : null}
            </h3>
            <span>{t("InclusiveAllTheTax")}</span>
          </div>
          {productState?.product.short_description && <p className="description-text">{productState?.product.short_description}</p>}
        </>
      )}
      {!noModals ? (
        productState?.product?.size_chart_image || productState?.product?.is_return ? (
          <>
            <div className="size-delivery-info">
              {productState?.product?.size_chart_image && productState?.product?.size_chart_image.original_url && (
                <a href={Href} onClick={() => setModal("size")}>
                  <RiRulerLine /> {t("SizeChart")}
                </a>
              )}
              {themeOption?.product?.shipping_and_return && productState?.product?.is_return ? (
                <a href={Href} onClick={() => setModal("delivery")}>
                  <RiTruckLine /> {t("DeliveryReturn")}
                </a>
              ) : null}
              <a href={Href} onClick={() => setModal("qna")}>
                <RiQuestionnaireLine /> {t("Askaquestion")}
              </a>
            </div>
            {modal && activeModal[modal]}
          </>
        ) : null
      ) : null}

      {!noQuantityButtons && (
        <>
          {productState?.selectedVariation?.short_description && (
            <div className="product-contain">
              <p>{productState?.selectedVariation?.short_description ?? productState?.product?.short_description}</p>
            </div>
          )}
          {productState?.product.status && !productAccordion && <>{productState?.product?.type == "classified" && <ProductAttribute productState={productState} setProductState={setProductState} />}</>}
        </>
      )}
      {!productAccordion && (
        <div className="product-buttons">
          <ProductDetailAction productState={productState} setProductState={setProductState} />
          <AddToCartButton productState={productState} isLoading={isLoading} addToCart={addToCart} buyNow={buyNow} />
        </div>
      )}
    </>
  );
};

export default ProductContent;
