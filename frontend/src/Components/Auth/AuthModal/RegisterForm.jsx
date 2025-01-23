import SearchableSelectInput from "@/Components/Widgets/InputFields/SearchableSelectInput";
import { AllCountryCode } from "@/Data/CountryCode";
import Btn from "@/Elements/Buttons/Btn";
import { RegisterAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { YupObject, emailSchema, nameSchema, passwordConfirmationSchema, passwordSchema, phoneSchema } from "@/Utils/Validation/ValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "reactstrap";

const RegisterForm = () => {
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { mutate, isLoading } = useCreate(RegisterAPI, false, false, "Register Successfully", false, false, false, false, setShowBoxMessage);
  const { t } = useTranslation("common");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        country_code: "91",
        phone: "",
      }}
      validationSchema={YupObject({
        name: nameSchema,
        email: emailSchema,
        password: passwordSchema,
        password_confirmation: passwordConfirmationSchema,
        phone: phoneSchema,
      })}
      onSubmit={mutate}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="auth-form-box">
          {showBoxMessage && (
            <div role="alert" className="alert alert-danger login-alert">
              <i className="ri-error-warning-line"></i> {showBoxMessage}
            </div>
          )}
          <div className="auth-box mb-3 form-box">
            <label htmlFor="email">{t("FullName")}</label>
            <Field className="form-control" name="name" type="text" id="fname" placeholder={t("FirstName")} required />
            {errors.name && touched.name && <ErrorMessage name="name" render={(msg) => <div className="invalid-feedback  d-block">{errors.name}</div>} />}
          </div>
          <div className="auth-box form-box mb-3">
            <label htmlFor="email">{t("Email")}</label>
            <Field className="form-control" name="email" type="text" id="email" placeholder={t("Email")} required />
            {errors.email && touched.email && <ErrorMessage name="email" render={(msg) => <div className="invalid-feedback d-block">{errors.email}</div>} />}
          </div>

          <div className="auth-box form-box mb-3 phone-field">
            <div className="form-box">
              <label htmlFor="phone">{t("Phone")}</label>
              <SearchableSelectInput nameList={[{ name: "country_code", notitle: "true", inputprops: { name: "country_code", id: "country_code", options: AllCountryCode, }, },]} />
              <Field className="form-control" name="phone" placeholder={t("EnterPhoneNumber")} type="number" />
              {errors.phone && touched?.phone && <ErrorMessage render={() => <div className="invalid-feedback">{errors.phone}</div>} />}
            </div>
          </div>

          <div className="auth-box form-box mb-3">
            <label htmlFor="review">{t("Password")}</label>
            <Field className="form-control" type="password" name="password" id="review" placeholder={t("EnterYourPassword")} required />
            {errors.password && touched.password && <ErrorMessage name="password" render={(msg) => <div className="invalid-feedback d-block">{errors.password}</div>} />}
          </div>
          <div className="mb-3">
            <div className="form-box">
              <label htmlFor="review">{t("ConfirmPassword")}</label>
              <Field className="form-control" name="password_confirmation" type="password" id="lname" placeholder={t("ConfirmYourPassword")} required />
              {errors.password_confirmation && touched.password_confirmation && <ErrorMessage name="password_confirmation" render={(msg) => <div className="invalid-feedback d-block">{errors.password_confirmation}</div>} />}
            </div>
          </div>
          <div className="auth-box form-box mb-3">
            <div className="forgot-box">
              <div className="form-check ps-0 m-0 custom-check-box">
                <Input type="checkbox" id="flexCheckDefault" className="checkbox_animated check-box" onChange={(e) => setCheckboxChecked(e.target.checked)} />
                <label htmlFor="flexCheckDefault" className="form-check-label text-red">
                  {t("IAgreeWithTermsAndPrivacy")}
                </label>
              </div>
            </div>
          </div>

          <Btn loading={isLoading} type="submit" className={`btn ${Object.keys(errors).length === 0 && checkboxChecked ? "" : "disabled"}`}>
            {t("CreateAccount")}
          </Btn>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
