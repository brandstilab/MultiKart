import { useContext, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { FashionSevenProductList2Title } from "@/Data/TabTitleListData";

import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";

const ProductList2Tab = ({ setFieldValue, values, productData,categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  
  const { t } = useTranslation( "common");
  const buttonText = values["content"]["products_list_2"]?.["left_panel"]["more_button"];
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][products_list_2][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FashionSevenProductList2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              { name: `[content][products_list_2][left_panel][title]`, placeholder: t("EnterTitle"), title: "Title" },
              { name: `[content][products_list_2][left_panel][description]`, placeholder: t("Description"), title: "Description" },
            ]}
          />
          <CheckBoxField name={`[content][products_list_2][left_panel][more_button]`} title="More Button" />
          {buttonText && <SimpleInputField nameList={[{ name: `[content][products_list_2][left_panel][button_text]`, placeholder: t("EnterTitle"), title: "ButtonText" }]} />}
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "leftPanelLinkType", multipleNameKey: "leftPanelLink" }} setSearch={setSearch} />
       
        </TabPane>
        <TabPane tabId="2">
          <SearchableSelectInput
            nameList={[
              {
                name: "productList2Product",
                title: "Products",
                inputprops: {
                  name: "productList2Product",
                  id: "productList2Product",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
        </TabPane>
      <CheckBoxField name={`[content][products_list_2][left_panel][status]`} title="Status" />
      </TabContent>

    </div>
  );
};
export default ProductList2Tab;
