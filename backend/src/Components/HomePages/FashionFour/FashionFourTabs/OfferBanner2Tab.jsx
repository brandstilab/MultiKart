import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";

const OfferBanner2Tab = ({ values, setFieldValue, helpertext }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image1" title="Image" id="offerBanner2Image1" showImage={values["offerBanner2Image1"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText(helpertext || "153x157px")} />
      <CheckBoxField name={`[content][offer_banner_2][status]`} title="Status" />
    </>
  );
};
export default OfferBanner2Tab;
