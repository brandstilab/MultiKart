import Btn from "@/Elements/Buttons/Btn";
import { RegisterAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import useCreate from "@/Utils/Hooks/useCreate";
import { YupObject, emailSchema, nameSchema, passwordConfirmationSchema, passwordSchema } from "@/Utils/Validation/ValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, Col, Container, Row } from "reactstrap";

const RegisterContainer = () => {
  const { mutate, isLoading } = useCreate(RegisterAPI, false, `/auth/register`, "Register Successfully");
  const { t } = useTranslation("common");
  return (
    <>
    
      <Breadcrumbs title={"Home"} subTitle={"CreateAccount"} />
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>{t("CreateAccount")}</h3>
              <div className="theme-card">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                  }}
                  validationSchema={YupObject({
                    name: nameSchema,
                    email: emailSchema,
                    password: passwordSchema,
                    password_confirmation: passwordConfirmationSchema,
                  })}
                  onSubmit={mutate}
                >
                  {({ errors, touched, setFieldValue }) => (
                    <Form className="theme-form">
                      <Row className="form-row">
                        <Col md="4">
                          <label htmlFor="email">{t("FullName")}</label>
                          <Field className="form-control" name="name" type="text" id="fname" placeholder="First name" required />
                          {errors.name && touched.name && <ErrorMessage name="name" render={(msg) => <div className="invalid-feedback  d-block">{errors.name}</div>} />}
                        </Col>
                        <Col md="4">
                          <label htmlFor="email">{t("Email")}</label>
                          <Field className="form-control" name="email" type="text" id="email" placeholder="Email" required />
                          {errors.email && touched.email && <ErrorMessage name="email" render={(msg) => <div className="invalid-feedback d-block">{errors.email}</div>} />}
                        </Col>
                      </Row>
                      <Row className="form-row">
                        <Col md="6">
                          <label htmlFor="review">{t("Password")}</label>
                          <Field className="form-control" type="password" name="password" id="review" placeholder="Enter your password" required />
                          {errors.password && touched.password && <ErrorMessage name="password" render={(msg) => <div className="invalid-feedback d-block">{errors.password}</div>} />}
                        </Col>
                        <Col md="6">
                          <label htmlFor="review">{t("ConfirmPassword")}</label>
                          <Field className="form-control" name="password_confirmation" type="password" id="lname" placeholder="Confirm your password" required />
                          {errors.password_confirmation && touched.password_confirmation && <ErrorMessage name="password_confirmation" render={(msg) => <div className="invalid-feedback d-block">{errors.password_confirmation}</div>} />}
                        </Col>

                        <Btn loading={isLoading} type="submit" className=" btn-solid w-auto">
                          {t("CreateAccount")}
                        </Btn>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RegisterContainer;
