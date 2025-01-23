import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";
import { FashionFiveKnockoutDealsTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const KnockoutDealsTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");

  const { t } = useTranslation("common");

  return (
    <div className="inside-horizontal-tabs">
      <SimpleInputField nameList={[{ name: `[content][knockout_deals][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FashionFiveKnockoutDealsTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="mainBannerImage" title="Image" id="mainBannerImage" showImage={values["mainBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "mainBannerLinkType", multipleNameKey: "mainBannerLink" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="gridBanner1Image" title="Image" id="gridBanner1Image" showImage={values["gridBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "gridBanner1LinkType", multipleNameKey: "gridBanner1Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="gridBanner2Image" title="Image" id="gridBanner2Image" showImage={values["gridBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "gridBanner2LinkType", multipleNameKey: "gridBanner2Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="gridBanner3Image" title="Image" id="gridBanner3Image" showImage={values["gridBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "gridBanner3LinkType", multipleNameKey: "gridBanner3Link" }} setSearch={setSearch} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default KnockoutDealsTab;
