import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const FullBannerTab = ({ values, setFieldValue,productData,categoryData,setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="fullBannerImage" title="Image" id="fullBannerImage" showImage={values["fullBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1920x1018px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "fullBannerLinkType", multipleNameKey: "fullBannerLink" }} setSearch={setSearch} />
      <CheckBoxField name={`[content][parallax_banner][status]`} title="Status" />
    </>
  );
};

export default FullBannerTab;
