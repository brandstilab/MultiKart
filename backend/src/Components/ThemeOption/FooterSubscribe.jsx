import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";


import { useTranslation } from "react-i18next";

const FooterSubscribe = ({values,setFieldValue}) => {
    
    const { t } = useTranslation( 'common');
  return (
    <>
      <FileUploadField
        name="FooterSubscribeImage"
        title="Image"
        id="FooterSubscribeImage"
        showImage={values["FooterSubscribeImage"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("1155x670px")}
      />
      <SimpleInputField
        nameList={[
          {
            name: `[options][footer][title]`,
            placeholder: t("EnterTitle"),
            title: "Title",
          },
          {
            name: `[options][footer][sub_title]`,
            placeholder: t("EnterSubTitle"),
            title: "EnterSubTitle",
          },
        ]}
      />
    </>
  );
};

export default FooterSubscribe;
