import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";

const CategoryProductTab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][category_product][title]`, placeholder: t("EnterTitle"), title: "Title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"productCategory"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product][status]`} title="Status" />
    </>
  );
};
export default CategoryProductTab;
