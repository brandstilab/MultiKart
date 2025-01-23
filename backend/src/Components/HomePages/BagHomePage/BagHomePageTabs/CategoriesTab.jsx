import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const CategoriesTab = ({ setSearch, categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][category][status]`} title="Status" />
    </>
  );
};
export default CategoriesTab;
