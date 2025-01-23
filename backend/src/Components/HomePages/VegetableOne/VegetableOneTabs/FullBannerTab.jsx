import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import CommonRedirect from "../../CommonRedirect";

const FullBannerTab = ({ values, setFieldValue, helpertext, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="fullBannerImage" title="Image" id="fullBannerImage" showImage={values["fullBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText(helpertext || "1920x1018px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `fullBannerRedirectLinkType`, multipleNameKey: `fullBannerRedirectLink` }} setSearch={setSearch} />
      <CheckBoxField name={`[content][full_banner][status]`} title="Status" />
    </>
  );
};
export default FullBannerTab;
