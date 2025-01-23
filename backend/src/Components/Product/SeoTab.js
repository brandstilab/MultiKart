import { useTranslation } from "react-i18next";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";



const SeoTab = ({ setFieldValue, values, updateId }) => {
  
  const { t } = useTranslation( 'common');
  return (
    <>
      <SimpleInputField nameList={[{ name: "meta_title", placeholder: t("EnterMetaTitle") }, { name: "meta_description", placeholder: t("EnterMetaDescription"), type: "textarea" }]} />
      <FileUploadField name="product_meta_image_id" title="ProductMetaImage" id="product_meta_image_id" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} />
    </>
  );
};

export default SeoTab;
