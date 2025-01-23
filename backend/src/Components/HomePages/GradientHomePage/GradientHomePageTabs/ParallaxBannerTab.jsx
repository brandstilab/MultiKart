import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { GradientParallaxBannerTitle, JwelleryTwoProductBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";

const ParallaxBannerTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={GradientParallaxBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              { name: `[content][parallax_banner][banner_1][main_title]`, placeholder: t("EnterMainTitle"), title: "MainTitle" },
              { name: `[content][parallax_banner][banner_1][title]`, placeholder: t("EnterTitle"), title: "Title" },
              { name: `[content][parallax_banner][banner_1][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" },
            ]}
          />
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }}  name="parallaxBanner1Image" title="Image" id="parallaxBanner1Image" showImage={values["parallaxBanner1Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("375x586px")} />
          <CheckBoxField name={`[content][parallax_banner][banner_1][status]`} title="Status" />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              { name: `[content][parallax_banner][banner_2][main_title]`, placeholder: t("EnterMainTitle"), title: "MainTitle" },
              { name: `[content][parallax_banner][banner_2][title]`, placeholder: t("EnterTitle"), title: "Title" },
              { name: `[content][parallax_banner][banner_2][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" },
            ]}
          />
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="parallaxBanner2Image" title="Image" id="parallaxBanner2Image" showImage={values["parallaxBanner2Image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("375x586px")} />
          <CheckBoxField name={`[content][parallax_banner][banner_2][status]`} title="Status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ParallaxBannerTab;
