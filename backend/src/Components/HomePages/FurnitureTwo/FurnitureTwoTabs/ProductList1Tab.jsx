import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list_1][tag]`, placeholder: t("EnterTitle"), title: "Tag" },
          { name: `[content][products_list_1][title]`, placeholder: t("SubTitle"), title: "Title" },
          { name: `[content][products_list_1][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" },
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
      <CheckBoxField name={`[content][products_list_1][status]`} title="Status" />
    </>
  );
};
export default ProductList1Tab;
