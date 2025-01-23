import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { MarketplaceTwoOfferBanner2Title } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const OfferBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][offer_banner_2][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceTwoOfferBanner2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image1" title="Image" id="offerBanner2Image1" showImage={values["offerBanner2Image1"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner2LinkType1", multipleNameKey: "offerBanner2Link1" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner_1][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image2" title="Image" id="offerBanner2Image2" showImage={values["offerBanner2Image2"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner2LinkType2", multipleNameKey: "offerBanner2Link2" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner_1][banner_1][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default OfferBannerTab;
