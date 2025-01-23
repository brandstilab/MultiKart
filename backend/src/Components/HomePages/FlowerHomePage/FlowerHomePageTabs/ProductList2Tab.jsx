import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList2Tab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][products_list_2][[title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList2Product",
            title: "Products",
            inputprops: {
              name: "productList2Product",
              id: "productList2Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
    </>
  );
};
export default ProductList2Tab;
