import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list][tag]`, placeholder: t("EnterTitle"), title: "Tag" },
          { name: `[content][products_list][title]`, placeholder: t("SubTitle"), title: "Title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"productList1Categories"} title="Categories" data={categoryData} />
      <CheckBoxField name={`[content][products_list][status]`} title="Status" />
    </>
  );
};
export default ProductList1Tab;
