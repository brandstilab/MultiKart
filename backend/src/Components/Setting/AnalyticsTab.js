import TabTitle from '@/Components/Widgets/TabTitle';
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { settingAnalyticsTab } from "../../Data/TabTitleListData";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";

const AnalyticsTab = ({ errors, touched }) => {
  
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <div className="inside-horizontal-tabs">
        <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={settingAnalyticsTab} errors={errors} touched={touched} />
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <SimpleInputField nameList={[{ name: `[values][analytics][facebook_pixel][pixel_id]`, title: "PixelId" }]} />
            <CheckBoxField name={`[values][analytics][facebook_pixel][status]`} title="Status" />
          </TabPane>
          <TabPane tabId="2">
            <SimpleInputField nameList={[{ name: `[values][analytics][google_analytics][measurement_id]`, title: "MeasurementId" }]} />
            <CheckBoxField name={`[values][analytics][google_analytics][status]`} title="Status" />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default AnalyticsTab;
