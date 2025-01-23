import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import DetailTable from './DetailTable';
import { useTranslation } from "react-i18next";

const OrderDetailsTable = ({ moduleName, data }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <Container fluid={true}>
            <Row>
                <Col xs="12">
                    <Card >
                        <CardBody>
                            <div className="title-header">
                                <div className="d-flex align-items-center"><h5 >{t(moduleName)}</h5></div>
                            </div>
                            <DetailTable data={data} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderDetailsTable