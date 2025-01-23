import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import TabTitle from "@/Components/Widgets/TabTitle";
import { ElectronicThreeProductList2Title } from "@/Data/TabTitleListData";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";

const CategoryProducts1Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][category_product_1][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ElectronicThreeProductList2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <MultiSelectField values={values} setFieldValue={setFieldValue} name="categoryProduct1Categories" title="Categories" data={categoryData} />
          <CheckBoxField name={`[content][category_product_1][categories][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SearchableSelectInput
            nameList={[
              {
                name: "categoryProduct1Product",
                title: "Products",
                inputprops: {
                  name: "categoryProduct1Product",
                  id: "categoryProduct1Product",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][category_product_1][products][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CategoryProducts1Tab;
