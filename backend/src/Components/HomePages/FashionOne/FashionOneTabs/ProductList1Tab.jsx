
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const ProductList1Tab = ({ productData, setSearch }) => {
  
  const { t } = useTranslation( "common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][products_list][title]`, placeholder: t("Title"), title: "Title" },
          { name: `[content][products_list][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" },
        ]}
      />
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
      <CheckBoxField name={`[content][products_list][status]`} title="Status" />
    </>
  );
};
export default ProductList1Tab;
