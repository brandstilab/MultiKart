import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ productData, setSearch, setFieldValue, values }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][products_list_1][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList1Product",
            title: "Products",
            inputprops: {
              name: "productList1Product",
              id: "productList1Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list_1][status]`} title="Status" />
    </>
  );
};
export default ProductList1Tab;
