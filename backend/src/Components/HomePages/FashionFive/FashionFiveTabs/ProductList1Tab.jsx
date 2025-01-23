import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ values, setFieldValue, helpertext, productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][products_list][title]`, placeholder: t("Title"), title: "Title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "productLists",
            title: "Products",
            inputprops: {
              name: "productLists",
              id: "productLists",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list][status]`} title="Status" />
    </>
  );
};
export default ProductList1Tab;
