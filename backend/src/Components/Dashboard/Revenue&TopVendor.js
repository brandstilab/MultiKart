import { Col, Row } from "reactstrap";
import DashboardWrapper from "./DashboardWrapper";
import DashboardChart from "./DashboardChart";
import { Form, Formik } from "formik";
import TopStoreTable from "./TopStore/TopStoreTable";
import { checkPermission } from "../Common/checkPermissonList";

const RevenueAndTopVendor = ({ role }) => {
  return (
    <Row className="dashboard-form theme-form">
      <Col xl={role === "vendor" ? 12 : 7} md={6}>
        <DashboardWrapper classes={{ colProps: { sm: 12 }, title: "AverageRevenue" }}>
          <DashboardChart />
        </DashboardWrapper>
      </Col>
      <Col xl={5} md={6}>
        <Formik initialValues={{ filter_by: "" }}>
          {({ values, setFieldValue }) => (
            <Form>
              <TopStoreTable values={values} setFieldValue={setFieldValue} />
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default RevenueAndTopVendor;
