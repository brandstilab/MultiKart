import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";

const IncludeProducts = ({ productList, setSearch }) => {
  return (
    <SearchableSelectInput
      nameList={[
        {
          name: "products",
          title: "products",
          require: "true",
          inputprops: {
            name: "products",
            id: "products",
            options: productList || [],
            setsearch: setSearch,
          },
        },
      ]}
    />
  );
};

export default IncludeProducts;
