import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const CategoryProduct1Tab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product_1][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][category_product_1][title]`, placeholder: t("EnterTitle"), title: "Title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryProduct1Categories"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product_1][status]`} title="Status" />
    </>
  );
};
export default CategoryProduct1Tab;
