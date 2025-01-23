import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const ParallaxProductTab = ({ productData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][parallax_product][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][parallax_product][title]`, placeholder: t("Title"), title: "Title" },
          { name: `[content][parallax_product][description]`, placeholder: t("Description"), title: "Description", type: "textarea" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "parallaxProducts",
            title: "Products",
            inputprops: {
              name: "parallaxProducts",
              id: "parallaxProducts",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`parallaxProductImage`} title="Image" id={`parallaxProductImage`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`parallaxProductImage`]} helpertext={getHelperText("376x231px")} />
      <CheckBoxField name={`[content][parallax_product][status]`} title="Status" />
    </>
  );
};
export default ParallaxProductTab;
