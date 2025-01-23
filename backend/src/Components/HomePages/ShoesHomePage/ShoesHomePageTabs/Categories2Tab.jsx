import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const Categories2Tab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories2"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_2][status]`} title="Status" />
    </>
  );
};
export default Categories2Tab;
