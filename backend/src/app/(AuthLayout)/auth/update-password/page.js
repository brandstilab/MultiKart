"use client"
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import Btn from "@/Elements/Buttons/Btn";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import useUpdatePassword, { UpdatePasswordSchema } from "@/Utils/Hooks/Auth/useUpdatePassword";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";

const UpdatePassword = () => {
    const { t } = useTranslation( 'common');
    const { mutate, isLoading } = useUpdatePassword();
  return (
    <>
      <div className="box-wrapper">
        <LoginBoxWrapper>
          <div className="log-in-title">
            <h4>{t("UpdatePassword")}</h4>
          </div>
          <div className="input-box">
            <Formik
              initialValues={{
                password: "",
                password_confirmation: "",
              }}
              validationSchema={UpdatePasswordSchema}
              onSubmit={mutate}>
              {() => (
                <Form className="row g-2">
                  <Col sm="12">
                    <Field name="password" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder="Password" label="Password" />
                  </Col>
                  <Col sm="12">
                    <Field name="password_confirmation" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder="Confirm Password" label="ConfirmPassword" />
                  </Col>
                  <Col sm="12">
                    <Btn title="Submit" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" loading={Number(isLoading)} />
                  </Col>
                </Form>
              )}
            </Formik>
          </div>
        </LoginBoxWrapper>
      </div>
    </>
  );
};
export default UpdatePassword;
