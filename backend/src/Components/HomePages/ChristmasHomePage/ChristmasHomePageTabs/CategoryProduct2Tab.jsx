import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const CategoryProduct2Tab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][category_product_2][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryProduct2Categories"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product_2][status]`} title="Status" />
    </>
  );
};
export default CategoryProduct2Tab;
