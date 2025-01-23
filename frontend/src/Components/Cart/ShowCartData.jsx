import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Table } from "reactstrap";
import NoDataFound from "../Widgets/NoDataFound";
import CartData from "./CartData";

const ShowCartData = () => {
  const { getTotal, cartProducts } = useContext(CartContext);
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <Row>
      {cartProducts?.length > 0 ? (
        <>
          <Col xs={12}>
            <div className="table-responsive">
              <Table className="cart-table">
                <thead>
                  <tr className="table-head">
                    <th scope="col">{t("Image")}</th>
                    <th scope="col">{t("ProductName")}</th>
                    <th scope="col">{t("Price")}</th>
                    <th scope="col">{t("Quantity")}</th>
                    <th scope="col">{t("Total")}</th>
                    <th scope="col">{t("Action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((elem, i) => (
                    <CartData elem={elem} key={i} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4" className="d-md-table-cell d-none">
                      {t("TotalPrice")} :
                    </td>
                    <td className="d-md-none">{t("TotalPrice")} :</td>
                    <td>
                      <h2>{convertCurrency(getTotal(cartProducts)?.toFixed(2))}</h2>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Col>
        </>
      ) : (
        <NoDataFound customClass="no-data-added" imageUrl={`/assets/svg/empty-items.svg`} title="NoItemsAdded" description="NoItemsAddedDescription" height={230} width={270} />
      )}
    </Row>
  );
};

export default ShowCartData;
