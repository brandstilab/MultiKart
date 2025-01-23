import SearchableSelectInput from "@/Components/Widgets/InputFields/SearchableSelectInput";
import { AllCountryCode } from "@/Data/CountryCode";
import Btn from "@/Elements/Buttons/Btn";
import { Href } from "@/Utils/Constants";
import useHandlePhnLogin from "@/Utils/Hooks/usePhnLogin";
import { YupObject, nameSchema } from "@/Utils/Validation/ValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col } from "reactstrap";

const NumberLoginForm = ({ setState }) => {
  const { t } = useTranslation("common");
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { mutate, isLoading } = useHandlePhnLogin(setShowBoxMessage,setState);

  return (
    <Formik
      initialValues={{
        country_code: "91",
        phone: "",
      }}
      validationSchema={YupObject({
        phone: nameSchema,
      })}
      onSubmit={mutate}
    >
      {({ errors, touched, setFieldValue }) => (
        <div className="auth-form-box ">
          {showBoxMessage && (
            <div role="alert" className="alert alert-danger login-alert">
              <i className="ri-error-warning-line"></i> {showBoxMessage}
            </div>
          )}
          <Form>
            <Col xs="12" className="phone-field mb-3">
              <div className="form-box">
                <SearchableSelectInput
                  nameList={[
                    {
                      name: "country_code",
                      notitle: "true",
                      inputprops: {
                        name: "country_code",
                        id: "country_code",
                        options: AllCountryCode,
                      },
                    },
                  ]}
                />
                <Field className="form-control" name="phone" placeholder={t("EnterPhoneNumber")} type="number" />
                {errors.phone && touched?.phone && <ErrorMessage render={() => <div className="invalid-feedback">{errors.phone}</div>} />}
              </div>
            </Col>
            <Btn  type="submit" loading={isLoading}>
              {t("SendOtp")}
            </Btn>
            <a onClick={() => setState("login")} href={Href} className="modal-back">
              <i className="ri-arrow-left-line"></i>
            </a>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default NumberLoginForm;
