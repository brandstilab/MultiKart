'use client'
import TaxForm from "@/Components/Tax/TaxForm";
import { tax } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const TaxUpdate = ({ params }) => {
  
  const { t } = useTranslation( 'common');
  return (
    params?.updateId && (
      <Row>
        <Col sm="8" className="m-auto">
          <Card >
            <CardBody>
              <div className="card-header-2">
                <h5>{t("EditTax")}</h5>
              </div>
              <TaxForm  updateId={params?.updateId}  buttonName="Update"/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default TaxUpdate;