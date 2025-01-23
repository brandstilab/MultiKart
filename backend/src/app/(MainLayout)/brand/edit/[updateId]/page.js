'use client'
import BrandForm from "@/Components/Brand/BrandForm";
import { BrandAPI } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const TaxUpdate = ({ params }) => {
  const { t } = useTranslation( 'common');
  const { mutate, isLoading } = useUpdate(BrandAPI, params?.updateId, "/brand");
  return (
    params?.updateId && (
      <Row>
        <Col sm="8" className="m-auto">
          <Card >
            <CardBody>
              <div className="card-header-2">
                <h5>{t("EditBrand")}</h5>
              </div>
              <BrandForm mutate={mutate} updateId={params?.updateId} loading={isLoading} buttonName="Update"/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default TaxUpdate;