import { MarketplaceFourProductBanner1Title } from "@/Data/TabTitleListData";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import TabTitle from "@/Components/Widgets/TabTitle";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductBanner1Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_banner_1][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceFourProductBanner1Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productBanner1LeftContentImage" title="Image" id="productBanner1LeftContentImage" showImage={values["productBanner1LeftContentImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productBanner1LeftContentLinkType", multipleNameKey: "productBanner1LeftContentLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_banner_1][left_panel][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SearchableSelectInput
            nameList={[
              {
                name: "productBanner1rightPanelProduct",
                title: "Products",
                inputprops: {
                  name: "productBanner1rightPanelProduct",
                  id: "productBanner1rightPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField name={`[content][product_banner_1][right_panel][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBanner1Tab;
