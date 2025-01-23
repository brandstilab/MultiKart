import TabTitle from "@/Components/Widgets/TabTitle";
import Image from "next/image";
import { useState } from "react";
import { Input, Label, Row, TabContent, TabPane } from "reactstrap";
import { SellerAboutStore, SellerDashboardTitles, SellerSetailsStore } from "../../Data/TabTitleListData";
import AboutSeller from "./SellerDashboard/AboutSeller";
import Selling from "./SellerDashboard/Selling";
import ServiceSeller from "./SellerDashboard/ServiceSeller";
import StepTab from "./SellerDashboard/StepTab";
import { useTranslation } from "react-i18next";

const SellerTab = ({ values, setFieldValue, errors, touched }) => {
  const [activeTab, setActiveTab] = useState("1");

  const { t } = useTranslation("common");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={SellerDashboardTitles} errors={errors} touched={touched} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AboutSeller values={values} setFieldValue={setFieldValue} errors={errors} />
        </TabPane>
        <TabPane tabId="2">
          <ServiceSeller values={values} setFieldValue={setFieldValue} errors={errors} />
        </TabPane>
        <TabPane tabId="3">
          <StepTab values={values} setFieldValue={setFieldValue} errors={errors} />
        </TabPane>
        <TabPane tabId="4">
          <Selling values={values} setFieldValue={setFieldValue} errors={errors} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SellerTab;
