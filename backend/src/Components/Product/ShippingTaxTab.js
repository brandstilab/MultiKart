import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";


import { useTranslation } from "react-i18next";

const ShippingTaxTab = () => {
  
  const { t } = useTranslation( 'common');
  return (
    <>
      <CheckBoxField name="is_free_shipping" title="FreeShipping" />
      <SimpleInputField nameList={[{ name: "weight", placeholder: t("Enter Weight Gms(E.G 100)"), title: "Weight", helpertext: "*Specify the weight of this product in Gms." },
      {name: "estimated_delivery_text", placeholder: t("EnterEstimatedDeliveryText"), title: "EstimatedDeliveryText", helpertext: "*Specify delivery text e.g Your order is likely to reach you within 5 to 10 days."}, ]} />
      <CheckBoxField name="is_return" title="Return"  helpertext="*Enable to make the product eligible for returns." />
      <SimpleInputField nameList={[{ name: "return_policy_text", placeholder: t("EnterReturnPolicyText"), title: "ReturnPolicyText", helpertext: "*Specify return text e.g Hassle free 7, 15 and 30 days return might be available." }]} />
    </>
  );
};

export default ShippingTaxTab;
