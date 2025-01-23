
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList3Tab = ({ productData, setSearch, setFieldValue, values }) => {
  const { t } = useTranslation( "common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][products_list_3][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList3Product",
            title: "Products",
            inputprops: {
              name: "productList3Product",
              id: "productList3Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list_3][status]`} title="Status" />
    </>
  );
};
export default ProductList3Tab;
