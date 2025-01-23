import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const ProductList1Tab = ({ productData, setSearch}) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][products_list][title]`, placeholder: t("EnterTitle"), title: "Title" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productListProduct",
            title: "Products",
            inputprops: {
              name: "productListProduct",
              id: "productListProduct",
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
