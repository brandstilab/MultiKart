import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList4Tab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list_4][title]`, placeholder: t("EnterTitle"), title: "Title" },
          { name: `[content][products_list_4][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList4Product",
            title: "Products",
            inputprops: {
              name: "productList4Product",
              id: "productList4Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list_4][status]`} title="Status" />
    </>
  );
};
export default ProductList4Tab;
