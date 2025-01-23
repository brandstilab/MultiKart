import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";

const SliderProductsTab = ({ values, setFieldValue, productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <CheckBoxField name="[content][slider_products][status]" title="Status" />
      <h4 className="fw-semibold mb-3 txt-primary w-100">Product Slider </h4>
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productSliderImage" title="Image" id="productSliderImage" showImage={values["productSliderImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between">
          {values["content"]?.["slider_products"]?.["product_slider_1"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        <div className="rule-edit-form">
          <SimpleInputField nameList={[{ name: "[content][slider_products][product_slider_1][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "sliderProduct1",
                title: "Products",
                inputprops: {
                  name: "sliderProduct1",
                  id: "sliderProduct1",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name="[content][slider_products][product_slider_1][status]" title="Status" />
        </div>
      </div>
    </>
  );
};

export default SliderProductsTab;
