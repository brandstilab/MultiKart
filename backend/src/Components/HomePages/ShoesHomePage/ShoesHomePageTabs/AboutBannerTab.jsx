import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { ShoesAboutBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const AboutBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][about_banner][status]`} title="Status" />
      <SimpleInputField
        nameList={[
          { name: `[content][about_banner][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][about_banner][title]`, placeholder: t("EnterTitle"), title: "Title" },
          { name: `[content][about_banner][description]`, placeholder: t("EnterDescription"), title: "Description" },
        ]}
      />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ShoesAboutBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="aboutBanner1Image" title="Image" id="aboutBanner1Image" showImage={values["aboutBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "aboutBanner1LinkType", multipleNameKey: "aboutBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][about_banner][collection_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="aboutBanner2Image" title="Image" id="aboutBanner2Image" showImage={values["aboutBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "aboutBanner2LinkType", multipleNameKey: "aboutBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][about_banner][collection_banner][banner_2][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AboutBannerTab;
