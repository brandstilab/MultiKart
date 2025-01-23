import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { FlowerOfferBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const OfferBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FlowerOfferBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner1Image" title="Image" id="banner1Image" showImage={values["banner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner1LinkType", multipleNameKey: "banner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner2Image" title="Image" id="banner2Image" showImage={values["banner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner2LinkType", multipleNameKey: "banner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner][banner_2][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default OfferBannerTab;
