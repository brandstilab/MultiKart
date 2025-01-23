import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";

const MainBannerTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][main_banner][main_title]`, placeholder: t("EnterMainTitle"), title: "MainTitle" },
          { name: `[content][main_banner][title]`, placeholder: t("EnterTitle"), title: "Title" },
          { name: `[content][main_banner][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" },
        ]}
      />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="mainBannerImage" title="Image" id="mainBannerImage" showImage={values["mainBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("375x586px")} />
      <CheckBoxField name={`[content][main_banner][status]`} title="Status" />
    </>
  );
};

export default MainBannerTab;
