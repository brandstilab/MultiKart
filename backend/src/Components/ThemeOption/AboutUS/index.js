import TabTitle from "@/Components/Widgets/TabTitle";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { AboutUsTabTitle } from "../../../Data/TabTitleListData";
import AboutTab from "./AboutTab";
import TeamTab from "./TeamTab";
import TestimonialTab from "./TestimonialTab";

const AboutUsTab = ({ values, setFieldValue }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={AboutUsTabTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AboutTab values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="2">
          <TeamTab values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="3">
          <TestimonialTab values={values} setFieldValue={setFieldValue} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AboutUsTab;
