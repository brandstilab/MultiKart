
import SettingContext from "@/Helper/SettingContext";
import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import { Table } from "reactstrap";

const ReceiptModalTable = ({ data }) => {
    const { convertCurrency } = useContext(SettingContext)
    
    const { t } = useTranslation( 'common');
    return (
        <Table>
            <thead>
                <tr>
                    <th className="quantity">{t("Qty")}</th>
                    <th className="description">{t("ProductName")}</th>
                    <th className="price">{t("Price")}</th>
                </tr>
            </thead>
            <tbody>
                {data?.products?.map((elem, index) => {
                    return (
                        <tr key={index}>
                            <td className="quantity">{elem?.pivot?.quantity}</td>
                            <td className="description">{elem?.pivot?.variation?.name || elem.name}</td>
                            <td className="price">{convertCurrency(elem?.pivot?.subtotal)}</td>
                        </tr>
                    )
                })}
                <tr className="total-box">
                    <td colSpan="2" className="text-end description">{t("Total")}:</td>
                    <td className="price">{convertCurrency(data?.amount ? data?.amount : 0)}</td>
                </tr>
                {!data.is_digital_only &&
                    <tr className="total-box">
                        <td colSpan="2" className="text-end description">{t("Shipping")}:</td>
                        <td className="price">{convertCurrency(data?.shipping_total ? data?.shipping_total : 0)}</td>
                    </tr>
                }

                <tr className="total-box">
                    <td colSpan="2" className="text-end description">{t("Tax")}:</td>
                    <td className="price">{convertCurrency(data?.tax_total ? data?.tax_total : 0)}</td>
                </tr>
                <tr className="total-box">
                    <td colSpan="2" className="text-end description">{t("Discount")}:</td>
                    <td className="price">{convertCurrency(data?.coupon_total_discount ? data?.coupon_total_discount : 0)}</td>
                </tr>
                <tr className="total-box">
                    <td colSpan="2" className="text-end description">{t("GrandTotal")}:</td>
                    <td className="price">{convertCurrency(data?.total ? data?.total : 0)}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ReceiptModalTable;