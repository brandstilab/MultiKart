"use client";
import Btn from "@/Elements/Buttons/Btn";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import useHandleLogin from "@/Utils/Hooks/useLogin";
import { YupObject, emailSchema, passwordSchema } from "@/Utils/Validation/ValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Col, Container, FormGroup, Row } from "reactstrap";

const LoginContainer = () => {
  const { mutate } = useHandleLogin();
  const { t } = useTranslation("common");
  return (
    <>
      <Breadcrumbs title={"Home"} subTitle={"Login"} />
      <section className="login-page section-b-space">
        <Container>
          <Row>
            <Col lg="6">
              <h3>Login</h3>
              <div className="theme-card">
                <Formik
                  initialValues={{
                    email: "john.customer@example.com",
                    password: "123456789",
                  }}
                  validationSchema={YupObject({
                    email: emailSchema,
                    password: passwordSchema,
                  })}
                  onSubmit={mutate}
                >
                  {({ errors, touched, setFieldValue }) => (
                    <Form className="theme-form">
                      <FormGroup>
                        <label htmlFor="email">{t("Email")}</label>
                        <Field name="email" className="form-control" id="email" placeholder="Email" required />
                        {errors.email && touched.email && <ErrorMessage name="email" render={(msg) => <div className="invalid-feedback d-block">{errors.email}</div>} />}
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="review">{t("Password")}</label>
                        <Field name="password" type="password" className="form-control" id="review" placeholder="Enter your password" required />
                        {errors.password && touched.password && <ErrorMessage name="password" render={(msg) => <div className="invalid-feedback d-block">{errors.password}</div>} />}
                      </FormGroup>
                      <Btn  type="submit" className="btn-solid">
                        {t("Login")}
                      </Btn>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col lg="6" className="right-login">
              <h3>{t("NewCustomer")}</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">{t("CreateAAccount")}</h6>
                <p>{t("SignUpDescription")}</p>
                <a href="#" className="btn btn-solid">
                  {t("CreateAccount")}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LoginContainer;
