import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { FashionFourProductListTitle } from "@/Data/TabTitleListData";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";

const ProductListTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");

  const { t } = useTranslation("common");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][products_list][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FashionFourProductListTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <MultiSelectField values={values} setFieldValue={setFieldValue} name={"productListCategories"} title="Categories" data={categoryData} />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              { name: `[content][products_list][products][tag]`, placeholder: t("Title"), title: "Title" },
              { name: `[content][products_list][products][title]`, placeholder: t("SubTitle"), title: "Sub Title" },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: "productLists",
                title: "Products",
                inputprops: {
                  name: "productLists",
                  id: "productLists",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][products_list][products][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductListTab;
