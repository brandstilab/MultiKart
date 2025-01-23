import NavTabTitles from "@/Components/Widgets/NavTabs";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import TextLimit from "@/Utils/CustomFunctions/TextLimit";
import React, { useState } from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import CustomerReview from "../Common/CustomerReview";
import QnATab from "../Common/QnATab";

const VerticalProductDetails = ({ productState }) => {
  let [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const ProductDetailsTabTitle = [
    { id: 1, name: "Description" },
    { id: 2, name: "Review" },
    { id: 3, name: "QA" },
  ];

  return (
    <>
      <Col xl="2">
        <NavTabTitles classes={{ navClass: "nav nav-tabs nav-material flex-column nav-border" }} titleList={ProductDetailsTabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Col>
      <Col xl="10">
        <TabContent className="nav-material" activeTab={activeTab}>
          <TabPane className={activeTab == 1 ? "show fade active" : ""}>
            <div className={`product-description more-less-box ${showMore ? "more" : ""}`}>{showMore ? <TextLimit value={productState?.product?.description} /> : <TextLimit value={productState?.product?.description?.substring(0, 1600)} />}</div>
          </TabPane>
          <TabPane className={activeTab == 2 ? "show active" : ""}>
            <div className="single-product-tables ">
              <Row>
                {productState?.product?.can_review || productState?.product?.reviews_count ? (
                  <CustomerReview productState={productState} />
                ) : (
                  <Col xl={12}>
                    <NoDataFound customClass="no-data-added" title="NoReviewYet" description="NoReviewYetDescription" />
                  </Col>
                )}
              </Row>
            </div>
          </TabPane>
          <TabPane className={activeTab == 3 ? "show active" : ""}>
            <QnATab productState={productState} activeTab={activeTab} />
          </TabPane>
        </TabContent>
      </Col>
    </>
  );
};

export default VerticalProductDetails;
