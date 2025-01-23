import CommonRedirect from "@/Components/HomePages/CommonRedirect";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";

const SliderProduct1 = ({ setActive, active, values, productData, setFieldValue, setSearch, categoryData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(1)}>
          {values["content"]?.["categories_products"]?.["left_panel"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 1 && (
          <>
            <div className="rule-edit-form">
              <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryLeftContentCategories"} title="Categories" data={categoryData} />
              <CheckBoxField name="[content][categories_products][left_panel][categories][status]" title="Status" />
            </div>
          </>
        )}
      </div>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(2)}>
          {values["content"]?.["slider_products"]?.["product_slider_2"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 2 && (
          <>
            <div className="rule-edit-form">
              <SimpleInputField nameList={[{ name: "[content][categories_products][left_panel][products_list][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
              <SearchableSelectInput
                nameList={[
                  {
                    name: "categoryLeftContentProduts",
                    title: "Products",
                    inputprops: {
                      name: "categoryLeftContentProduts",
                      id: "categoryLeftContentProduts",
                      options: productData || [],
                      setsearch: setSearch,
                    },
                  },
                ]}
              />
              <CheckBoxField name="[content][categories_products][left_panel][products_list][status]" title="Status" />
            </div>
          </>
        )}
      </div>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(3)}>
          {values["content"]?.["slider_products"]?.["product_slider_2"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 3 && (
          <>
            <div className="rule-edit-form">
              <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`categoryLeftContentBannerImage`} title="Image" id={`categoryLeftContentBannerImage`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`categoryLeftContentBannerImage`]} helpertext={getHelperText("376x231px")} />
              <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `categoryLeftContentBannerLinkType`, multipleNameKey: `categoryLeftContentBannerLink` }} setSearch={setSearch} />
              <CheckBoxField name="[content][categories_products][left_panel][banner][status]" title="Status" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SliderProduct1;
