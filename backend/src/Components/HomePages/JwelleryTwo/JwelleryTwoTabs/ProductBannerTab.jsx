import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { JwelleryTwoProductBannerTitle } from "@/Data/TabTitleListData";
import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_banner][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={JwelleryTwoProductBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField nameList={[{ name: `[content][product_banner][left_panel][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
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
          <CheckBoxField name={`[content][product_banner][left_panel][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <h4 className="fw-semibold mb-3 txt-primary w-100">{t("Banner1")}</h4>
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBannerCenterContentImage1" title="Image" id="productBannerCenterContentImage1" showImage={values["productBannerCenterContentImage1"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBannerCenterContent1LinkType", multipleNameKey: "productBannerCenterContent1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_banner][center_panel][banner_1][status]`} title="Status" />
          <h4 className="fw-semibold mb-3 txt-primary w-100">{t("Banner2")}</h4>
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBannerCenterContentImage2" title="Image" id="productBannerCenterContentImage2" showImage={values["productBannerCenterContentImage2"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBannerCenterContent2LinkType", multipleNameKey: "productBannerCenterContent2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_banner][center_panel][banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <SimpleInputField nameList={[{ name: `[content][product_banner][right_panel][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
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
          <CheckBoxField name={`[content][product_banner][right_panel][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBannerTab;
