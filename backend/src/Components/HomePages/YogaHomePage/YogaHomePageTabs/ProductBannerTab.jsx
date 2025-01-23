import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { YogaProductBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const ProductBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_banner][status]`} title="Status" />
      <SimpleInputField
        nameList={[
          { name: `[content][product_banner][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][product_banner][title]`, placeholder: t("EnterTitle"), title: "Title" },
        ]}
      />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={YogaProductBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBanner1Image" title="Image" id="productBanner1Image" showImage={values["productBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBanner1LinkType", multipleNameKey: "productBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_banner][post_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBanner2Image" title="Image" id="productBanner2Image" showImage={values["productBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBanner2LinkType", multipleNameKey: "productBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_banner][post_banner][banner_2][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBannerTab;
