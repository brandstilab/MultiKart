import TabTitle from "@/Components/Widgets/TabTitle";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { FashionSixBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import { mediaConfig } from "@/Data/MediaConfig";

const BannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][offer_banner][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FashionSixBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner1Image" title="Image" id="banner1Image" showImage={values["banner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner1LinkType", multipleNameKey: "banner1Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner2Image" title="Image" id="banner2Image" showImage={values["banner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner2LinkType", multipleNameKey: "banner2Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner3Image" title="Image" id="banner3Image" showImage={values["banner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner3LinkType", multipleNameKey: "banner3Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner4Image" title="Image" id="banner4Image" showImage={values["banner4Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner4LinkType", multipleNameKey: "banner4Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="5">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner5Image" title="Image" id="banner5Image" showImage={values["banner5Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner5LinkType", multipleNameKey: "banner5Link" }} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="6">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner6Image" title="Image" id="banner6Image" showImage={values["banner6Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner6LinkType", multipleNameKey: "banner6Link" }} setSearch={setSearch} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default BannerTab;
