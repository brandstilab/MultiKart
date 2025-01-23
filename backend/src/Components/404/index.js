"use client";
import Btn from "@/Elements/Buttons/Btn";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import ErrorImage from "../../../public/assets/svg/404.png";
import Image from 'next/image';

const NotFoundPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <section className="error-section section-lg-space">
      <Container fluid={true}>
        <Row>
          <Col xl={6} lg={7} className="m-auto">
            <div className="error-content">
              <Image height={162} width={497} src={ErrorImage} className="img-fluid" alt="Error 404 Image" />
              <h2>{t("PageNotFound")}</h2>
              <h3 className="text-content">{t("AccessDeniedText")}</h3>
              <Btn onClick={() => router.back()} color="" className="btn btn-animation mt-4 mx-auto btn-lg">
                {t("BackToPage")}
              </Btn>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFoundPage;
