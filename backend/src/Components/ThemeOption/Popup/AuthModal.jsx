import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const AuthModal = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return <FileUploadField name="authImage" title="Image" id="authImage" showImage={values["authImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("90x90px")} />;
};

export default AuthModal;
