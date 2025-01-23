
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const DashboardWrapper = ({ classes = {}, children }) => {

    const { t } = useTranslation("common");
    return (
        <Container fluid={true} className="p-0">
            <Row className="g-0">
                <Col {...classes?.colProps}>
                    <Card>
                        <CardBody>
                            <div className="title-header">
                                <div className="d-flex align-items-center">
                                    <h5>{t(classes?.title)}</h5>
                                </div>
                                {classes?.headerRight}
                            </div>
                            {children}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default DashboardWrapper