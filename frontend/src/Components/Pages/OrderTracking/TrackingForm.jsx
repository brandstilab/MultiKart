import Btn from "@/Elements/Buttons/Btn";
import { YupObject, nameSchema } from "@/Utils/Validation/ValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";

const TrackingForm = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const onSubmit = (values) => {
    const queryParams = new URLSearchParams({
      order_number: values?.order_number,
      email_or_phone: values?.email_or_phone,
    });
    router.push(`${"/order/details"}?${queryParams}`);
  };

  return (
    <Formik
      initialValues={{
        order_number: "",
        email_or_phone: "",
      }}
      validationSchema={YupObject({
        email_or_phone: nameSchema,
        order_number: nameSchema,
      })}
      onSubmit={onSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="row g-4">
          <Col xs="12">
            <div className="form-floating theme-form-floating log-in-form">
              <Field className="form-control" name="order_number" type="text" placeholder={t("OrderNumber")} required id="order_number" />
              <label htmlFor="order_number">{t("OrderNumber")}</label>
            </div>
            {errors.order_number && touched.order_number && <ErrorMessage name="order_number" render={(msg) => <div className="invalid-feedback">{t("OrderIsRequired")}</div>} />}
          </Col>
          <Col xs="12">
            <div className="form-floating theme-form-floating log-in-form">
              <Field className="form-control" name="email_or_phone" type="text" placeholder={t("EnterEmailOrPhone")} required id="email_or_phone" />
              <label htmlFor="email_or_phone">{t("EnterPhoneOrEmail")}</label>
            </div>
            {errors.email_or_phone && touched.email_or_phone && <ErrorMessage name="email_or_phone" render={(msg) => <div className="invalid-feedback">{t("EmailOrPhoneIsRequired")}</div>} />}
          </Col>

          <Col xs="12">
            <Btn type="submit" className="btn-solid" title={"Track"} />
          </Col>
        </Form>
      )}
    </Formik>
  );
};

export default TrackingForm;
