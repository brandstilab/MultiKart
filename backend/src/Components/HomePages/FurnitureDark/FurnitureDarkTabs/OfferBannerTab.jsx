import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { FurnitureTwoFeatureBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const OfferBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");

  const { t } = useTranslation("common");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FurnitureTwoFeatureBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image" title="Image" id="offerBanner1Image" showImage={values["offerBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <SimpleInputField
            nameList={[
              { name: `[content][offer_banner][banner_1][title]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][offer_banner][banner_1][sub_title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType", multipleNameKey: "offerBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image" title="Image" id="offerBanner2Image" showImage={values["offerBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <SimpleInputField
            nameList={[
              { name: `[content][offer_banner][banner_2][title]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][offer_banner][banner_2][sub_title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner2LinkType", multipleNameKey: "offerBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner3Image" title="Image" id="offerBanner3Image" showImage={values["offerBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <SimpleInputField
            nameList={[
              { name: `[content][offer_banner][banner_3][title]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][offer_banner][banner_3][sub_title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner3LinkType", multipleNameKey: "offerBanner3Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner_3][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default OfferBannerTab;
