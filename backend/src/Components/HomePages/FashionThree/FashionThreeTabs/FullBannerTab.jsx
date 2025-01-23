import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const FullBannerTab = ({ values, setFieldValue, helpertext, categoryData,productData,setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <CheckBoxField name={`[content][full_banner][status]`} title="Status" />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="fullBannerImage" title="Image" id="fullBannerImage" showImage={values["fullBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText(helpertext || "153x157px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `fullBannerRedirectLinkType`, multipleNameKey: `fullBannerRedirectLink` }} setSearch={setSearch} />
    </>
  );
};
export default FullBannerTab;
