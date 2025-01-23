import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import { MarijuanaOfferBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import { mediaConfig } from "@/Data/MediaConfig";

const OfferBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][offer_banner][status]`} title="Status" />
      <SimpleInputField
        nameList={[
          { name: `[content][offer_banner][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][offer_banner][title]`, placeholder: t("EnterTitle"), title: "Title" },
          { name: `[content][offer_banner][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" },
        ]}
      />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarijuanaOfferBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image" title="Image" id="offerBanner1Image" showImage={values["offerBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType", multipleNameKey: "offerBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image" title="Image" id="offerBanner2Image" showImage={values["offerBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner2LinkType", multipleNameKey: "offerBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner][banner_2][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default OfferBannerTab;
