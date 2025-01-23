import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const CategoryProductTab = ({ values, setFieldValue, setSearch, categoryData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product][tag]`, placeholder: t("EnterTitle"), title: "Tag" },
          { name: `[content][category_product][title]`, placeholder: t("EnterSubTitle"), title: "Title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryProductList"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product][status]`} title="Status" />
    </>
  );
};
export default CategoryProductTab;
