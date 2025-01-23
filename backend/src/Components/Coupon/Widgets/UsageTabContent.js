import CheckBoxField from "../../InputFields/CheckBoxField";
import SimpleInputField from "../../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const UsageTabContent = ({ values, loading }) => {
  
  const { t } = useTranslation( 'common');
  return (
    <>
      <CheckBoxField name="is_unlimited" />
      {!values["is_unlimited"] && <SimpleInputField nameList={[{
        name: "usage_per_coupon", placeholder: t("EnterValue"), helpertext: "*Specify the maximum number of times a single coupon can be utilized."
      }, { name: "usage_per_customer", placeholder: t("EnterValue"), helpertext: "*Specify the maximum number of times a single customer can utilize the coupon." }]} />}
    </>
  );
};

export default UsageTabContent;
