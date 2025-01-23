import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const ProductList2Tab = ({ productData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
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
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productList2Image" title="Image" id="productList2Image" type="file" values={values} setFieldValue={setFieldValue} showImage={values["productList2Image"]} helpertext={getHelperText("1920x637px")} />=
      <CheckBoxField name={`[content][products_list_2][status]`} title="Status" />
    </>
  );
};
export default ProductList2Tab;
