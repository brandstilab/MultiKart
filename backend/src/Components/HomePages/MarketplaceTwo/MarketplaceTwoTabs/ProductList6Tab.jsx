import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList6Tab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][products_list_6][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList6Product",
            title: "Products",
            inputprops: {
              name: "productList6Product",
              id: "productList6Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list_6][status]`} title="Status" />
    </>
  );
};
export default ProductList6Tab;
