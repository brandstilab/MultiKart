import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const OfferBanner3Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner3Image" title="Image" id="offerBanner3Image" showImage={values["offerBanner3Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner3LinkType", multipleNameKey: "offerBanner3Link" }} setSearch={setSearch} />
      <CheckBoxField name={`[content][offer_banner_3]][status]`} title="Status" />
    </>
  );
};

export default OfferBanner3Tab;
