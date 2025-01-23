import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Progress } from "reactstrap";
import DeliveryReturnModal from "./AllModal/DeliveryReturnModal";
import QuestionAnswerModal from "./AllModal/QuestionAnswerModal";
import SizeModal from "./AllModal/SizeModal";

const ProductStatus = ({ productState }) => {
  const isLogin = Cookies.get("uat");
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");
  const [modal, setModal] = useState("");
  const getQTY = 10;
  const getStockStatus = productState?.selectedVariation?.stock_status ?? productState?.product?.stock_status;
  const activeModal = {
    size: <SizeModal modal={modal} setModal={setModal} productState={productState} />,
    delivery: <DeliveryReturnModal modal={modal} setModal={setModal} productState={productState} />,
    qna: <QuestionAnswerModal modal={modal} setModal={setModal} productState={productState} />,
  };

  const getProgressValue = (productState) => {
    if (productState?.selectedVariation) {
      return (productState?.selectedVariation?.quantity * 100) / 10;
    } else {
      return (productState?.product?.quantity * 100) / 10;
    }
  };
  return (
    <>
      {productState.product?.quantity && (productState.product?.quantity <= 10 || productState.selectedVariation?.quantity <= 10) ? (
        <>
          {getStockStatus !== "out_of_stock" ? (
            <div className="progress-sec">
              <div className="left-progressbar">
                <h6>
                  {t("PleasehurryOnly")} {productState?.selectedVariation?.quantity ?? productState?.product?.quantity} {t("leftinstock")}
                </h6>
                <Progress color={`${getQTY <= 2 ? "danger" : getQTY >= 3 && getQTY <= 7 ? "warning" : ""}`} style={{ height: "8px" }} value={getProgressValue(productState)} />
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ProductStatus;
