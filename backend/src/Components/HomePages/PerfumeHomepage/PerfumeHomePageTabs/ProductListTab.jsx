import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { PerfumeProductListTitle } from "@/Data/TabTitleListData";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const ProductListTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_list][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={PerfumeProductListTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SearchableSelectInput
            nameList={[
              {
                name: "productListProducts",
                title: "Categories",
                inputprops: {
                  name: "productListProducts",
                  id: "productListProducts",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              { name: `[content][product_list][left_panel][title]`, placeholder: t("EnterTitle"), title: "Title" },
              { name: `[content][product_list][left_panel][description]`, placeholder: t("EnterDescription"), title: "Description" },
            ]}
          />
          <CheckBoxField name={`[content][product_list][left_panel][more_button][status]`} title="Status" />
          <SimpleInputField nameList={[{ name: `[content][product_list][left_panel][button_text]`, placeholder: t("EnterButtonText"), title: "ButtonText" }]} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productListLeftPanelLinkType", multipleNameKey: "productListLeftPanelLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_list][left_panel][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductListTab;
