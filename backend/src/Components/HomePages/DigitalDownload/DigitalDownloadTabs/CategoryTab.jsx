import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const CategoryTab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryIconListCategories"} title="Categories" data={categoryData}  />
      <CheckBoxField name={`[content][categories_icon_list][status]`} title="Status" />
    </>
  );
};
export default CategoryTab;
