import { Col, Form, Row } from "reactstrap";
import { checkPermission } from "@/Components/Common/checkPermissonList";
import { Formik } from "formik";
import TopSellingProduct from "./TopSellingProduct";

const RecentOrderTable = () => {
    return (
        <Row className="theme-form dashboard-form">
                <Col xs="12">
                    <Formik initialValues={{ filter_by: "" }}>
                        {({ values, setFieldValue }) => (
                            <Form>
                                <TopSellingProduct values={values} setFieldValue={setFieldValue} />
                            </Form>
                        )}
                    </Formik>
                </Col>
        </Row>
    );
};

export default RecentOrderTable;
