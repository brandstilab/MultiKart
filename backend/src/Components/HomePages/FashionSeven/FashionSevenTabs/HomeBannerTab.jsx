import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const HomeBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="homeBannerImage" title="Image" id="homeBannerImage" showImage={values["homeBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1859x550px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "homeBannerLinkType", multipleNameKey: "homeBannerLink" }} setSearch={setSearch} />
    </>
  );
};

export default HomeBannerTab;
