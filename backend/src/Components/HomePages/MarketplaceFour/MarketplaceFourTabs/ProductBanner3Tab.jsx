import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import { MarketplaceFourProductBanner1Title } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductBanner3Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_banner_3][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceFourProductBanner1Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBanner3LeftContentImage" title="Image" id="productBanner3LeftContentImage" showImage={values["productBanner3LeftContentImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBanner3LeftContentLinkType", multipleNameKey: "productBanner3LeftContentLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_banner_3][left_panel][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SearchableSelectInput
            nameList={[
              {
                name: "productBanner3rightPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBanner3rightPanelProduct",
                  id: "productBanner3rightPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner_3][right_panel][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBanner3Tab;
