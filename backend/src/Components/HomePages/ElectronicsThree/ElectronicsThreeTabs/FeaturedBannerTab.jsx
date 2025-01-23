import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { FurnitureTwoFeatureBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const FeaturedBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation("common");
  
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FurnitureTwoFeatureBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="featuredBanner1Image" title="Image" id="featuredBanner1" showImage={values["featuredBanner1"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "featuredBanner1LinkType", multipleNameKey: "featuredBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][featured_banners][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="featuredBanner2Image" title="Image" id="featuredBanner2Image" showImage={values["featuredBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "featuredBanner2LinkType", multipleNameKey: "featuredBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][featured_banners][banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="featuredBanner3Image" title="Image" id="featuredBanner3Image" showImage={values["featuredBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "featuredBanner3LinkType", multipleNameKey: "featuredBanner3Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][featured_banners][banner_3][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FeaturedBannerTab;
