"use client";
import { Col, Container, Row } from "reactstrap";

const AuthLayout = ({ children }) => {
  return (
    <section className="log-in-section section-b-space">
      <Container className="w-100">
        <Row>
          <Col xl="5" lg="6" className="mx-auto">
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AuthLayout;
