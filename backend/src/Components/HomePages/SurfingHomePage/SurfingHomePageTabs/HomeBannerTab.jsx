import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const HomeBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`homeBannerImage`} title="Image" id={`homeBannerImage`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`homeBannerImage`]} helpertext={getHelperText("376x231px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `homeRedirectLinkType`, multipleNameKey: `homeRedirectLink` }} setSearch={setSearch} />
      <CheckBoxField name={`[content][home_banner][status]`} title="Status" />
    </>
  );
};

export default HomeBannerTab;
