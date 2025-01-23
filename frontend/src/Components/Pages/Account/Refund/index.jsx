"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Breadcrumb from "@/Utils/CommonComponents/Breadcrumb";
import { Col, TabPane } from "reactstrap";
import AccountSidebar from "../Common/AccountSidebar";
import ResponsiveMenuOpen from "../Common/ResponsiveMenuOpen";
import RefundTable from "./RefundTable";

const AccountRefund = () => {
  return (
    <>
      <Breadcrumb title={"Refund"} subNavigation={[{ name: "Refund" }]} />
      <WrapperComponent classes={{ sectionClass: "dashboard-section section-b-space user-dashboard-section", fluidClass: "container" }} customCol={true}>
        <AccountSidebar tabActive={"refund"} />
        <Col lg={9}>
          <div className="faq-content">
            <div className="tab-content">
              <ResponsiveMenuOpen />
              <TabPane className="show fade active">
                <RefundTable />
              </TabPane>
            </div>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default AccountRefund;
