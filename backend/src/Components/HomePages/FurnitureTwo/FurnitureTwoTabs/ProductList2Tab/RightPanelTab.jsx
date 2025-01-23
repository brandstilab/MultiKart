import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";

const RightPanelTab = ({ values, productData ,setSearch}) => {
  const { t } = useTranslation("common");
  
  return (
    <div className="shipping-accordion-custom">
      <div className="p-3 rule-dropdown d-flex justify-content-between">
        {values["content"]?.["product_list_2"]?.["right_panel"]?.["title"] || "Text Here"}
        <RiArrowDownLine />
      </div>
      <div className="rule-edit-form">
        <SimpleInputField nameList={[{ name: "[content][product_list_2][right_panel][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
        <SearchableSelectInput
          nameList={[
            {
              name: "rightPanelProduct",
              title: "Products",
              inputprops: {
                name: "rightPanelProduct",
                id: "rightPanelProduct",
                options: productData || [],
                setsearch: setSearch,
              },
            },
          ]}
        />
        <CheckBoxField name="[content][product_list_2][right_panel][status]" title="Status" />
      </div>
    </div>
  );
};

export default RightPanelTab;
