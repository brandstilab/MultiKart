import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const BannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="bannerImage" title="Image" id="bannerImage" showImage={values["bannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "bannerLinkType", multipleNameKey: "bannerLink" }} setSearch={setSearch} />
      <CheckBoxField name={`[content][banner][status]`} title="Status" />
    </>
  );
};

export default BannerTab;
