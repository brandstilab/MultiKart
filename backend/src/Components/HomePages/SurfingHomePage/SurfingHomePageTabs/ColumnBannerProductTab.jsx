import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { MedicalColumnBannerProductTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
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
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="columnOfferBanner1Image" title="Image" id="columnOfferBanner1Image" showImage={values["columnOfferBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "columnOfferBanner1LinkType", multipleNameKey: "columnOfferBanner1Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][column_banner_product][offer_banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField nameList={[{ name: `[content][column_banner_product][product_list_1][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "columnProductList1Product",
                title: "Products",
                inputprops: {
                  name: "columnProductList1Product",
                  id: "columnProductList1Product",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][column_banner_product][product_list_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField name="columnOfferBanner2Image" title="Image" id="columnOfferBanner2Image" showImage={values["columnOfferBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "columnOfferBanner2LinkType", multipleNameKey: "columnOfferBanner2Link" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][column_banner_product][offer_banner_2][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="4">
          <SimpleInputField nameList={[{ name: `[content][column_banner_product][product_list_2][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "columnProductList2Product",
                title: "Products",
                inputprops: {
                  name: "columnProductList2Product",
                  id: "columnProductList2Product",
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
