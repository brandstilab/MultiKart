import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { JwelleryTwoProductBannerTitle } from "@/Data/TabTitleListData";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";

const ProductBannerTab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_banner][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={JwelleryTwoProductBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField nameList={[{ name: `[content][product_banner][left_content][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBannerLeftPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBannerLeftPanelProduct",
                  id: "productBannerLeftPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner][left_content][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              { name: `[content][product_banner][center_content][tag]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][product_banner][center_content][title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBannerCenterPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBannerCenterPanelProduct",
                  id: "productBannerCenterPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner][center_content][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <SimpleInputField nameList={[{ name: `[content][product_banner][right_content][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBannerRightPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBannerRightPanelProduct",
                  id: "productBannerRightPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner][right_content][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBannerTab;
