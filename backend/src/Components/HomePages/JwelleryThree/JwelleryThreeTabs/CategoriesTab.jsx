import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";

const CategoriesTab = ({ setSearch, categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][categories][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][categories][status]`} title="Status" />
    </>
  );
};
export default CategoriesTab;
