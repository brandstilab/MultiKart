import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const CollectionBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="collectionBannerImage" title="Image" id="collectionBannerImage" showImage={values["collectionBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1859x550px")} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "collectionBannerLinkType", multipleNameKey: "collectionBannerLink" }} setSearch={setSearch} />
      <CheckBoxField name={`[content][collection_banner][status]`} title="Status" />
    </>
  );
};

export default CollectionBannerTab;
