import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][category_product][title]`, placeholder: t("EnterTitle"), title: "Title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"productCategories"} title="Categories" data={categoryData} />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`categoryProductImage`} title="Image" id={`categoryProductImage`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`categoryProductImage`]} helpertext={getHelperText("806x670px")} />
      <CheckBoxField name={`[content][category_product][status]`} title="Status" />
    </>
  );
};
export default CategoryProductTab;
