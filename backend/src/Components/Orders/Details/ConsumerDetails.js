import { Card, CardBody } from 'reactstrap';
import { useTranslation } from "react-i18next";

const ConsumerDetails = ({ data }) => {

    const { t } = useTranslation('common');
    return (
        <Card>
            <CardBody>
                <div className="title-header" >
                    <div className="d-flex align-items-center">
                        <h5>{("Consumer Details")}</h5>
                    </div>
                </div>
                <div className="customer-detail tracking-wrapper">
                    <ul>
                        <li>
                            <label>{t("Name")}:</label>
                            <h4>{data?.consumer?.name}</h4>
                        </li>
                        <li>
                            <label>{t("EmailAddress")}:</label>
                            <h4>{data?.consumer?.email}</h4>
                        </li>
                        <li>
                            <label>{t("BillingAddress")}:</label>
                            <h4>
                                {data?.billing_address?.street}
                                {data?.billing_address?.city} {data?.billing_address?.state?.name} {
                                    data?.billing_address?.country?.name}
                                {data?.billing_address?.pincode} <br />
                                {t("Phone")} : {data?.billing_address?.phone}
                            </h4>
                        </li>
                        {!data?.is_digital_only &&
                            <li>
                                <label>{t("ShippingAddress")}:</label>
                                <h4>
                                    {data?.shipping_address?.street}
                                    {data?.shipping_address?.city} {data?.shipping_address?.state?.name} {
                                        data?.shipping_address?.country?.name}
                                    {data?.shipping_address?.pincode} <br />
                                    {t("Phone")} :  {data?.shipping_address?.phone}
                                </h4>
                            </li>
                        }
                        {!data?.is_digital_only &&
                            <li>
                                <label>{t("DeliverySlot")}:</label>
                                <h4>{data?.delivery_description}</h4>
                            </li>
                        }
                        <li>
                            <label>{t("PaymentMode")}:</label>
                            <h4>{data?.payment_method?.toUpperCase()}</h4>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card >
    )
}

export default ConsumerDetails