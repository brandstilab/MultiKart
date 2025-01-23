import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import { MarketplaceFourProductAndBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductBanner2Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_banner_2][][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceFourProductAndBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField nameList={[{ name: `[content][product_banner_2][right_panel][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBanner2LeftPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBanner2LeftPanelProduct",
                  id: "productBanner2LeftPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner_2][left_panel][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <h4 className="fw-semibold mb-3 txt-primary w-100">Banner 1</h4>
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBanner2Image1" title="Image" id="productBanner2Image1" showImage={values["productBanner2Image1"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBanner2LinkType1", multipleNameKey: "productBanner2Link1" }} setSearch={setSearch} />
          <CheckBoxField name="[content][product_banner_2][center_panel][banner_1][status]" title="Status" />
          <h4 className="fw-semibold mb-3 txt-primary w-100">Banner 2</h4>
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBanner2Image2" title="Image" id="productBanner2Image2" showImage={values["productBanner2Image2"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBanner2LinkType2", multipleNameKey: "productBanner2Link2" }} setSearch={setSearch} />
          <CheckBoxField name="[content][product_banner_2][center_panel][banner_2][status]" title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <SimpleInputField nameList={[{ name: `[content][product_banner_2][right_panel][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBanner2RightPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBanner2RightPanelProduct",
                  id: "productBanner2RightPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner_2][right_panel][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBanner2Tab;
