import Cookies from "js-cookie";
import { useContext, useMemo, useState } from "react";
import { Progress } from "reactstrap";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { RiShoppingCartLine, RiTruckLine } from "react-icons/ri";
import CartVariationModal from "./CartVariationModal";
import SelectedCart from "./SelectedCart";

const HeaderCartBottom = ({ modal, setModal, shippingFreeAmt, shippingCal }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { setCartCanvas } = useContext(ThemeOptionContext);
  const [selectedVariation, setSelectedVariation] = useState("");
  const { t } = useTranslation("common");
  const { cartProducts, getTotal, clearCart } = useContext(CartContext);
  const pathname = usePathname();
  const isAuth = Cookies.get("uat");
  // Getting total when cartProducts changes
  const total = useMemo(() => {
    return getTotal(cartProducts);
  }, [cartProducts, modal]);

  const handelCheckout = () => {
    Cookies.set("CallBackUrl", "/checkout");
  };
  return (
    <>
      {cartProducts?.length > 0 && (
        <>
          <div className="pere-text-box success-box">
            {shippingFreeAmt > getTotal(cartProducts) ? (
              <p>
                {t("Spend")} <span className="shipping">{convertCurrency(shippingFreeAmt - getTotal(cartProducts))}</span> {t("moreandenjoy")} <span className="shipping">{t("FREESHIPPING!")}</span>
              </p>
            ) : (
              <p>
                <span className="shipping">{t("Congratulations")}!</span> {t("Enjoyfreeshippingonus")}!
              </p>
            )}
            <Progress multi>
              {shippingCal <= 30 ? (
                <Progress striped animated color="danger" value={shippingCal}>
                  <div className="progress-icon">
                    <RiTruckLine />
                  </div>
                </Progress>
              ) : shippingCal >= 31 && shippingCal <= 80 ? (
                <Progress striped animated color="warning" value={shippingCal}>
                  <div className="progress-icon">
                    <RiTruckLine />
                  </div>
                </Progress>
              ) : (
                <Progress striped animated value={shippingCal}>
                  <div className="progress-icon">
                    <RiTruckLine />
                  </div>
                </Progress>
              )}
            </Progress>
          </div>
          <div className="sidebar-title">
            <a href={Href} onClick={clearCart}>
              {t("ClearCart")}
            </a>
          </div>
          <SelectedCart setSelectedVariation={setSelectedVariation} setModal={setModal} modal={modal} />
        </>
      )}
      <CartVariationModal modal={modal} setModal={setModal} selectedVariation={selectedVariation} />
      {!cartProducts?.length && (
        <div className="cart_media empty-cart">
          <ul className="empty-cart-box">
            <div>
              <div className="icon">
                <RiShoppingCartLine />
              </div>
              <h5>{t("EmptyCartDescription")}</h5>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderCartBottom;
