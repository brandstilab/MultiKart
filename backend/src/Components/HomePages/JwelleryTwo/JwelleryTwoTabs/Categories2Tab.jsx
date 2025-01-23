import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const Categories2Tab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][categories_2][title]`, placeholder: t("EnterTitle"), title: "Title" },
          { name: `[content][categories_2][description]`, placeholder: t("EnterDescription"), title: "Description" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories2"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_2][status]`} title="Status" />
    </>
  );
};
export default Categories2Tab;
