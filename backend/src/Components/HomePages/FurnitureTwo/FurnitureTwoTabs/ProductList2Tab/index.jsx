import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { FurnitureTwoProductListTitle } from "@/Data/TabTitleListData";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import ProductListTab from "./ProductListTab";
import RightPanelTab from "./RightPanelTab";

const ProductList2Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name="[content][product_list_2][status]" title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FurnitureTwoProductListTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ProductListTab productData={productData} values={values} setSearch={setSearch} categoryData={categoryData} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="2">
          <RightPanelTab productData={productData} values={values} setSearch={setSearch} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductList2Tab;
