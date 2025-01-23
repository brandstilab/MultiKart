import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const BannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="banner1Image" title="Image" id="banner1Image" showImage={values["banner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("375x586px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "banner1LinkType", multipleNameKey: "banner1Link" }} setSearch={setSearch} />
      <CheckBoxField name={`[content][banner][status]`} title="Status" />
    </>
  );
};

export default BannerTab;