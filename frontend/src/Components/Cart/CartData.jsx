import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import { WishlistAPI } from "@/Utils/AxiosUtils/API";
import { Href } from "@/Utils/Constants";
import useCreate from "@/Utils/Hooks/useCreate";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Col, Row } from "reactstrap";
import CartProductDetail from "./CartProductDetail";
import HandleQuantity from "./HandleQuantity";

const CartData = ({ elem }) => {
  const { t } = useTranslation("common");
  const { removeCart } = useContext(CartContext);
  const { convertCurrency } = useContext(SettingContext);
  const { mutate } = useCreate(WishlistAPI, false);

  const removeItem = () => {
    removeCart(elem?.variation_id ? elem?.variation_id : elem.product_id, elem?.id);
  };

  return (
    <tr>
      <CartProductDetail elem={elem} />
      <td>
        <Link href={`/product/${elem?.product?.slug}`}>{elem?.variation?.name ?? elem?.product?.name}</Link>
        <Row className="mobile-cart-content">
          <Col>
            <div className="qty-box">
              <HandleQuantity productObj={elem?.product} classes={{ customClass: "quantity-price" }} elem={elem} />
            </div>
          </Col>
          <Col className="table-price">
            <h2 className="td-color">
              {convertCurrency(elem?.product?.sale_price)}
              {elem?.product?.discount || elem?.product?.discount ? <del className="text-content">{convertCurrency(elem?.product?.price)}</del> : null}
            </h2>
          </Col>
          <Col>
            <a href={Href} className="icon remove-btn" onClick={removeItem}>
              <RiCloseLine />
            </a>
          </Col>
        </Row>
      </td>
      <td className="table-price">
        <h2>
          {convertCurrency(elem?.product?.sale_price)}
          {elem?.product?.discount || elem?.product?.discount ? <del className="text-content">{convertCurrency(elem?.product?.price)}</del> : null}
        </h2>
        {elem?.product?.price - elem?.product?.sale_price != 0 || elem?.product?.price - elem?.product?.sale_price < 0 ? (
          <h6 className="theme-color">
            {t("YouSave")}: {convertCurrency(Math.abs(elem?.product?.price - elem?.product?.sale_price).toFixed(2))}
          </h6>
        ) : null}
      </td>

      <td>
        <div className="qty-box">
          <HandleQuantity productObj={elem?.product} classes={{ customClass: "quantity-price" }} elem={elem} />
        </div>
      </td>

      <td className="subtotal">
        <h2 className="td-color">{convertCurrency(elem?.sub_total)}</h2>
      </td>

      <td>
        <a href={Href} className="icon remove-btn" onClick={removeItem}>
          <RiCloseLine />
        </a>
      </td>
    </tr>
  );
};

export default CartData;
