import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { ElectronicsTwoHomeBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const HomeBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation("common");

  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ElectronicsTwoHomeBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="homeBanner1Image" title="Image" id="homeBanner1Image" showImage={values["homeBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "homeBanner1LinkType", multipleNameKey: "homeBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][home_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="homeBanner2Image" title="Image" id="homeBanner2Image" showImage={values["homeBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "homeBanner2LinkType", multipleNameKey: "homeBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][home_banner][banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="homeBanner3Image" title="Image" id="homeBanner3Image" showImage={values["homeBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "homeBanner3LinkType", multipleNameKey: "homeBanner3Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][home_banner][banner_3][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default HomeBannerTab;
