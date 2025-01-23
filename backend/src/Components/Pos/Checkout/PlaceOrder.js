import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Btn from "../../../Elements/Buttons/Btn";

const PlaceOrder = ({ values }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = () => {
    // Put Your Logic Here
    router.push(`/order/details/1000`);
  };
  return (
    <Btn className="btn btn-theme payment-btn mt-4" onClick={handleClick} disabled={values["consumer_id"] && values["billing_address_id"] && values["shipping_address_id"] && values["payment_method"] && values["delivery_description"] ? false : true}>
      {t("PlaceOrder")}
    </Btn>
  );
};

export default PlaceOrder;
