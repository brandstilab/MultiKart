import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { FurnitureOneOfferBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const CategoryIconList = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FurnitureOneOfferBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image" title="Image" id="offerBanner1Image" showImage={values["offerBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType", multipleNameKey: "offerBanner1Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image" title="Image" id="offerBanner2Image" showImage={values["offerBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner2LinkType", multipleNameKey: "offerBanner2Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner3Image" title="Image" id="offerBanner3Image" showImage={values["offerBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner3LinkType", multipleNameKey: "offerBanner3Link" }} setSearch={setSearch} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CategoryIconList;
