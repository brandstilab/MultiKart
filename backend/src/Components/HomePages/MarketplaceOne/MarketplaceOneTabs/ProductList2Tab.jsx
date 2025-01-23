import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { MarketplaceOneProductList2Title } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductList2Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][category_product][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceOneProductList2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField nameList={[{ name: `[content][category_product][left_panel][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "leftPanelProduct",
                title: "Products",
                inputprops: {
                  name: "leftPanelProduct",
                  id: "leftPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][category_product][left_panel][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <h4 className="fw-semibold mb-3 txt-primary w-100">Product </h4>
          <SimpleInputField nameList={[{ name: `[content][category_product][right_panel][product_category][title]`, placeholder: t("Title"), title: "Tag" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "rightPanelProduct",
                title: "Categories",
                inputprops: {
                  name: "rightPanelProduct",
                  id: "rightPanelProduct",
                  options: categoryData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][category_product][right_panel][product_category][status]`} title="Status" />
          <h4 className="fw-semibold mb-3 txt-primary w-100">Banner</h4>
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productList2Image" title="Image" id="productList2Image" showImage={values["productList2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "rightPanelLinkType", multipleNameKey: "rightPanelLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][category_product][right_panel][product_banner][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductList2Tab;
