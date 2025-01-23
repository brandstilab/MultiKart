import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const ProductBannerTab = ({ values, setFieldValue, isTitleDescription, helpertext, categoryData, setSearch, productData }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBannerImage" title="Image" id="productBannerImage" showImage={values["productBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText(helpertext || " 375x586px")} />
      <SearchableSelectInput
        nameList={[
          {
            name: "productBannerProducts",
            title: "Products",
            inputprops: {
              name: "productBannerProducts",
              id: "productBannerProducts",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][product_banner][status]`} title="Status" />
    </>
  );
};
export default ProductBannerTab;
