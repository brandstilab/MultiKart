import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { ToolsCategoryProductTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const CategoryProductTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][category_product][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ToolsCategoryProductTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField nameList={[{ name: `[content][category_product][left_panel][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "categoryLeftContentProduct",
                title: "Products",
                inputprops: {
                  name: "categoryLeftContentProduct",
                  id: "categoryLeftContentProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][category_product][left_panel][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <h4 className="fw-semibold mb-3 txt-primary w-100">{t("Product")} </h4>
          <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryRightContentCategories"} title="Categories" data={categoryData} />
          <CheckBoxField name={`[content][category_product][right_panel][product_category][status]`} title="Status" />
          <h4 className="fw-semibold mb-3 txt-primary w-100">{t("Banner")} </h4>
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="categoryRightContentImage" title="Image" id="categoryRightContentImage" showImage={values["categoryRightContentImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "categoryRightContentBannerLinkType", multipleNameKey: "categoryRightContentBannerLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][category_product][right_panel][product_banner][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CategoryProductTab;
