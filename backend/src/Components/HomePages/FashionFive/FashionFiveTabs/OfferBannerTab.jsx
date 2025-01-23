import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const BannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBannerImage" title="Image" id="offerBannerImage" showImage={values["offerBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("375x586px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBannerLinkType", multipleNameKey: "offerBannerLink" }} setSearch={setSearch} />
      <CheckBoxField name={`[content][offer_banner][status]`} title="Status" />
    </>
  );
};

export default BannerTab;
