import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import { JwelleryTwoProductBannerTitle, MedicalColumnBannerProductTitle } from "@/Data/TabTitleListData";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import TabTitle from "@/Components/Widgets/TabTitle";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { mediaConfig } from "@/Data/MediaConfig";

const ColumnBannerProductTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][column_banner_product][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MedicalColumnBannerProductTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image" title="Image" id="offerBanner1Image" showImage={values["offerBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType", multipleNameKey: "offerBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][column_banner_product][offer_banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField nameList={[{ name: `[content][column_banner_product][product_list_1][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "productList1Product",
                title: "Products",
                inputprops: {
                  name: "productList1Product",
                  id: "productList1Product",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][column_banner_product][product_list_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner2Image" title="Image" id="offerBanner2Image" showImage={values["offerBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner2LinkType", multipleNameKey: "offerBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][column_banner_product][offer_banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="4">
          <SimpleInputField nameList={[{ name: `[content][column_banner_product][product_list_2][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
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
          <CheckBoxField name={`[content][column_banner_product][product_list_2][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ColumnBannerProductTab;
