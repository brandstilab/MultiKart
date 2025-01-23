import CommonRedirect from "@/Components/HomePages/CommonRedirect";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { MarketplaceCategoryProductOfferBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";
import { TabContent, TabPane } from "reactstrap";

const SliderProduct2 = ({ setActive, active, values, productData, setSearch, setFieldValue, categoryData }) => {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation("common");

  return (
    <>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(4)}>
          {values["content"]?.["slider_products"]?.["product_slider_3"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 4 && (
          <>
            <div className="rule-edit-form">
              <SimpleInputField nameList={[{ name: "[content][categories_products][right_panel][products_list][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
              <SearchableSelectInput
                nameList={[
                  {
                    name: "categoryRightContentProduts",
                    title: "Products",
                    inputprops: {
                      name: "categoryRightContentProduts",
                      id: "categoryRightContentProduts",
                      options: productData || [],
                      setsearch: setSearch,
                    },
                  },
                ]}
              />
              <CheckBoxField name="[content][categories_products][right_panel][products_list][status]" title="Status" />
            </div>
          </>
        )}
      </div>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(5)}>
          {values["content"]?.["slider_products"]?.["product_slider_4"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 5 && (
          <div className="inside-horizontal-tabs">
            <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceCategoryProductOfferBannerTitle} />
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="categoryProductOfferBanner1Image" title="Image" id="categoryProductOfferBanner1Image" showImage={values["categoryProductOfferBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
                <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "categoryProductOfferBanner1LinkType", multipleNameKey: "categoryProductOfferBanner1Link" }} setSearch={setSearch} />
                <CheckBoxField name={`[content][categories_products][right_panel][offer_banner][banner_1][status]`} title="Status" />
              </TabPane>
              <TabPane tabId="2">
                <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="categoryProductOfferBanner2Image" title="Image" id="categoryProductOfferBanner2Image" showImage={values["categoryProductOfferBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
                <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "categoryProductOfferBanner2LinkType", multipleNameKey: "categoryProductOfferBanner2Link" }} setSearch={setSearch} />
                <CheckBoxField name={`[content][categories_products][right_panel][offer_banner][banner_2][status]`} title="Status" />
              </TabPane>
            </TabContent>
          </div>
        )}
      </div>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(6)}>
          {values["content"]?.["slider_products"]?.["product_slider_3"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 6 && (
          <>
            <div className="rule-edit-form">
              <SimpleInputField nameList={[{ name: "[content][categories_products][right_panel][category_product][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
              <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryRightContentCategories"} title="Categories" data={categoryData} />
              <CheckBoxField name="[content][categories_products][right_panel][category_product][status]" title="Status" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SliderProduct2;
