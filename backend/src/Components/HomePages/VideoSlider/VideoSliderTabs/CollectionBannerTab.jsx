import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { VideoSliderCollectionBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const CollectionBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={VideoSliderCollectionBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              { name: `[content][collection_banner][banner_1][tag]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][collection_banner][banner_1][title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="collectionBanner1Image" title="Image" id="collectionBanner1Image" showImage={values["collectionBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "collectionBanner1LinkType", multipleNameKey: "collectionBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][collection_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              { name: `[content][collection_banner][banner_2][tag]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][collection_banner][banner_2][title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="collectionBanner2Image" title="Image" id="collectionBanner2Image" showImage={values["collectionBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "collectionBanner2LinkType", multipleNameKey: "collectionBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][collection_banner][banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <SimpleInputField
            nameList={[
              { name: `[content][collection_banner][banner_3][tag]`, placeholder: t("EnterTag"), title: "Tag" },
              { name: `[content][collection_banner][banner_3][title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]}
          />
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="collectionBanner3Image" title="Image" id="collectionBanner3Image" showImage={values["collectionBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "collectionBanner3LinkType", multipleNameKey: "collectionBanner3Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][collection_banner][banner_3][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CollectionBannerTab;
