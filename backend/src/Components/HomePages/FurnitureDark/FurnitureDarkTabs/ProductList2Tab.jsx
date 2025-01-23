import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import TabTitle from "@/Components/Widgets/TabTitle";
import { FurnitureDarkProductList2Title } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductList2Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][product_list_2][status]`} title="Status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FurnitureDarkProductList2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="leftPanelImage" title="Image" id="leftPanelImage" showImage={values["leftPanelImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "leftPanelLinkType", multipleNameKey: "leftPanelLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][product_list_2]['left_panel'][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
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
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductList2Tab;
