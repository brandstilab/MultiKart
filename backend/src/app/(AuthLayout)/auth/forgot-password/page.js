"use client";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowBox from "@/Elements/Alerts&Modals/ShowBox";
import Btn from "@/Elements/Buttons/Btn";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import { ForgotPasswordSchema } from "@/Utils/Hooks/Auth/useForgotPassword";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";

const ForgotPassword = () => {
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { t } = useTranslation("common");
  return (
    <div className="box-wrapper">
      <ShowBox showBoxMessage={showBoxMessage} />
      <LoginBoxWrapper>
        <div className="log-in-title">
          <h3>{t("welcome_to_store")}</h3>
          <h4>{t("ForgotPassword")}</h4>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values) => router.push(`/auth/otp-verification`)}
          >
            {() => (
              <Form className="row g-2">
                <Col sm="12">
                  <Field name="email" component={ReactstrapInput} className="form-control" id="email" placeholder="Email Address" label="EmailAddress" />
                </Col>
                <Col sm="12">
                  <Btn title="SendEmail" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" />
                </Col>
                <Col sm="12">
                  <div className="sign-up-box">
                    <h4>{t("HaveAccount")}</h4>
                    <Link href={`/auth/login`}>{t("BackToLogin")}</Link>
                  </div>
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </LoginBoxWrapper>
    </div>
  );
};
export default ForgotPassword;
