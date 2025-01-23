import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";
import OrderFilter from "./OrderFilter";

const OrderStatus = ({ data, filterType, setFilterValue, setFilterType }) => {
  const { t } = useTranslation("common");
  return (
    <Col md="8">
      <Card>
        <CardBody>
          <div className="title-header">
            <div className="d-flex align-items-center">
              <h5>{t("OrderStatus")}</h5>
            </div>
            <OrderFilter setFilterValue={setFilterValue} setFilterType={setFilterType} />
          </div>
          <Row className="g-sm-4 g-3 booking-status-main">
            <Col xxl="4" sm="6" className="booking-status-card">
              <Link className="booking-widget-card card" href={{ pathname: `/order`, query: { status: "pending" } }}>
                <div className="booking-widget-icon">
                  <Image height={26} width={26} src={"/assets/images/svg/box-time.svg"} className="img-fluid" alt="medal-star" />
                </div>
                <div>
                  <h6>{t("Pending")}</h6>
                  <h2>{data?.total_pending_orders}</h2>
                </div>

                <Image height={500} width={500} src={"/assets/images/tiles-bg.png"} className="img-fluid abs-icon" alt="box-time" />
              </Link>
            </Col>
            <Col xxl="4" sm="6" className="booking-status-card">
              <Link className="booking-widget-card card" href={{ pathname: `/order`, query: { status: "processing" } }}>
                <div className="booking-widget-icon">
                  <Image height={26} width={26} src={"/assets/images/svg/note.svg"} className="img-fluid" alt="note" />
                </div>
                <div>
                  <h6>{t("Processing")}</h6>
                  <h2>{data?.total_processing_orders}</h2>
                </div>
                <Image height={500} width={500} src={"/assets/images/tiles-bg.png"} className="img-fluid abs-icon" alt="box-time" />
              </Link>
            </Col>
            <Col xxl="4" sm="6" className="booking-status-card">
              <Link className="booking-widget-card card" href={{ pathname: `/order`, query: { status: "cancelled" } }}>
                <div className="booking-widget-icon">
                  <Image height={26} width={26} src={"/assets/images/svg/box-remove.svg"} className="img-fluid" alt="Box1" />
                </div>
                <div>
                  <h6>{t("cancelled")}</h6>
                  <h2>{data?.total_cancelled_orders}</h2>
                </div>
                <Image height={500} width={500} src={"/assets/images/tiles-bg.png"} className="img-fluid abs-icon" alt="box-time" />
              </Link>
            </Col>
            <Col xxl="4" sm="6" className="booking-status-card">
              <Link className="booking-widget-card card" href={{ pathname: `/order`, query: { status: "shipped" } }}>
                <div className="booking-widget-icon">
                  <Image height={26} width={26} src={"/assets/images/svg/box.svg"} className="img-fluid" alt="Group" />
                </div>
                <div>
                  <h6>{t("shipped")}</h6>
                  <h2>{data?.total_shipped_orders}</h2>
                </div>
                <Image height={500} width={500} src={"/assets/images/tiles-bg.png"} className="img-fluid abs-icon" alt="box-time" />
              </Link>
            </Col>
            <Col xxl="4" sm="6" className="booking-status-card">
              <Link className="booking-widget-card card" href={{ pathname: `/order`, query: { status: "out_for_delivery" } }}>
                <div className="booking-widget-icon">
                  <Image height={26} width={26} src={"/assets/images/svg/group.svg"} className="img-fluid" alt="shop" />
                </div>
                <div>
                  <h6>{t("Outfordelivery")}</h6>
                  <h2>{data?.total_out_of_delivery_orders}</h2>
                </div>
                <Image height={500} width={500} src={"/assets/images/tiles-bg.png"} className="img-fluid abs-icon" alt="box-time" />
              </Link>
            </Col>
            <Col xxl="4" sm="6" className="booking-status-card">
              <Link className="booking-widget-card card" href={{ pathname: `/order`, query: { status: "delivered" } }}>
                <div className="booking-widget-icon">
                  <Image height={26} width={26} src={"/assets/images/svg/shop.svg"} className="img-fluid" alt="boxRemove" />
                </div>
                <div>
                  <h6>{t("delivered")}</h6>
                  <h2>{data?.total_delivered_orders}</h2>
                </div>
                <Image height={500} width={500} src={"/assets/images/tiles-bg.png"} className="img-fluid abs-icon" alt="box-time" />
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
