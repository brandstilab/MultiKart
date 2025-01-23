import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const FullBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][parallax_banner][main_title]`, placeholder: t("EnterMainTitle"), title: "MainTitle" },
          { name: `[content][parallax_banner][title]`, placeholder: t("EnterTitle"), title: "Title" },
          { name: `[content][parallax_banner][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" },
        ]}
      />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="fullBannerImage" title="Image" id="fullBannerImage" showImage={values["fullBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
      <CheckBoxField name={`[content][parallax_banner][status]`} title="Status" />
    </>
  );
};

export default FullBannerTab;
