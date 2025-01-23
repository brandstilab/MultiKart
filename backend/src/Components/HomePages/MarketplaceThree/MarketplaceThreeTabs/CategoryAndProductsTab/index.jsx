import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import { MarketplaceThreeCategoriesAndProductTitle } from "@/Data/TabTitleListData";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import TabTitle from "../../../../Widgets/TabTitle";
import CategoryProductTab1 from "./CategoryProductTab1";
import CategoryProductTab2 from "./CategoryProductTab2";

const CategoryAndProductsTab = ({ values, setFieldValue, description, productData, setSearch, categoryData }) => {
  const [active, setActive] = useState(0);

  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <CheckBoxField name={`[content][categories_products][status]`} title="Status" />
      <div className="inside-horizontal-tabs">
        <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceThreeCategoriesAndProductTitle} />
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <CategoryProductTab1 active={active} setActive={setActive} values={values} productData={productData} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} />
          </TabPane>
          <TabPane tabId="2">
            <CategoryProductTab2 active={active} setActive={setActive} values={values} description={description} productData={productData} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData}/>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};
export default CategoryAndProductsTab;
