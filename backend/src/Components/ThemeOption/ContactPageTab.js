import { useTranslation } from "react-i18next";
import SimpleInputField from "../InputFields/SimpleInputField";
import ContactWrapper from "./ContactWrapper";

const ContactPageTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: "[options][contact_us][title]",  title: "Title", placeholder: t("EnterTitle") },
          { name: "[options][contact_us][description]", type: "textarea", title: "Description", placeholder: t("EnterDescription") },
        ]}
      />
      <ContactWrapper contactDetails={{ value: "detail_1", title: "Detail1" }} />
      <ContactWrapper contactDetails={{ value: "detail_2", title: "Detail2" }} />
      <ContactWrapper contactDetails={{ value: "detail_3", title: "Detail3" }} />
      <ContactWrapper contactDetails={{ value: "detail_4", title: "Detail4" }} />
    </>
  );
};
export default ContactPageTab;
