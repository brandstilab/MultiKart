"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import TrackingForm from "./TrackingForm";

const TrackingData = ({ params }) => {
  const { t } = useTranslation("common");
  const { isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"Order Tracking"} subNavigation={[{ name: "Order Tracking" }]} />
      <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container w-100" }} customCol={true}>
        <Col xxl={4} xl={5} lg={6} sm={8} className="mx-auto">
          <div className="order-search-content">
            <h3>{t("OrderTracking")}</h3>
            <p>{t("OrderTrackingDescription")}</p>
            <div className="input-box">
              <TrackingForm />
            </div>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default TrackingData;
