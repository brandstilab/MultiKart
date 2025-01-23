import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import UpdateStatus from './UpdateStatus'
import { Form, Formik } from 'formik'
import NumberTable from './NumberTable'

const OrderNumberTable = ({refetch, moduleName, data, orderStatusData, setOrderStatus, orderStatus, mutate, orderStatusUpdate, edit }) => {

  const originalDate = new Date(); // Current date and time
  const year = originalDate.getFullYear();
  const month = ('0' + (originalDate.getMonth() + 1)).slice(-2); // Months are zero-indexed, so we add 1
  const day = ('0' + originalDate.getDate()).slice(-2);
  const hours = ('0' + originalDate.getHours()).slice(-2);
  const minutes = ('0' + originalDate.getMinutes()).slice(-2);
  const formattedDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
    return (
        <Container fluid={true} className='p-0'>
            <Row>
                <Col xs="12">
                    <Card>
                        <CardBody>
                            <div className="title-header">
                                <div className="d-flex align-items-center"><h5>{moduleName}</h5></div>
                                {edit && <Formik 
                                initialValues={{
                                    order_status_id: "",
                                    date:formattedDate,
                                }}>
                                    {({ values, setFieldValue }) => (
                                        <Form>
                                            {!data?.sub_orders?.length &&
                                                (orderStatus?.slug != 'cancelled' && orderStatus?.slug != 'delivered')
                                                && <UpdateStatus refetch={refetch} values={values} setFieldValue={setFieldValue} orderStatusData={orderStatusData} data={data} setOrderStatus={setOrderStatus} orderStatus={orderStatus} mutate={mutate} orderStatusUpdate={orderStatusUpdate} />}
                                        </Form>
                                    )}
                                </Formik>}
                            </div>
                            <NumberTable data={data} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderNumberTable