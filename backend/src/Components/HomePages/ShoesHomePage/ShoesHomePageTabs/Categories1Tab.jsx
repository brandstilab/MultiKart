import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const Categories1Tab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories1"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_1][status]`} title="Status" />
    </>
  );
};
export default Categories1Tab;
