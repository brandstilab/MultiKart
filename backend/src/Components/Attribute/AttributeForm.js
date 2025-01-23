import { useQuery } from "@tanstack/react-query";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import Btn from "../../Elements/Buttons/Btn";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { attributeValues, nameSchema, YupObject } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import SimpleInputField from "../InputFields/SimpleInputField";
import CreateAttributes from "./Widgets/CreateAttributes";

const AttributeForm = ({ updateId, buttonName }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    data: oldData,
    isLoading,
    refetch,
  } = useQuery(["role/id"], () => request({ url: `attribute/${updateId}` }, router), {
    refetchOnMount: false,
    enabled: false,
    select: (data) => data.data,
  });
  useEffect(() => {
    if (updateId) {
      refetch();
    }
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: updateId ? oldData?.name || "" : "",
        style: updateId ? oldData?.style || "" : "rectangle",
        value: updateId ? oldData?.attribute_values || [] : [{ value: "", hex_color: "" }],
      }}
      validationSchema={YupObject({
        name: nameSchema,
        value: attributeValues,
      })}
      onSubmit={(values) => {
        values["status"] = 1;
        router.push(`/attribute`);
        // Put Add Or Update Logic Here
      }}
    >
      {({ values }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <CreateAttributes />
          <Row className="mb-0 align-items-center">
            <Col sm="12">
              <FieldArray
                name="value"
                render={(arrayHelpers) => {
                  return (
                    <>
                      {values["value"].map((item, i) => (
                        <Fragment key={i}>
                          <Row className="g-sm-4 g-3 align-items-center attribute-row">
                            <Col className="custom-row">
                              <SimpleInputField nameList={[{ noshowerror: true, name: `value[${i}][value]`, title: "Value", require: "true", placeholder: t("EnterValue"), isremovefield: arrayHelpers, values: values, keys: i }]} />
                              <div className="invalid-feedback feedback-right ">
                                <ErrorMessage
                                  name={`value[${i}][value]`}
                                  render={(msg) => (
                                    <div className="invalid-feedback d-block">
                                      {t("Value")} {t("IsRequired")}
                                    </div>
                                  )}
                                />
                              </div>
                            </Col>
                            {values.style == "color" && <SimpleInputField nameList={[{ name: `value[${i}][hex_color]`, type: "color", title: "Value", placeholder: t("EnterValue"), isremovefield: arrayHelpers, values: values, key: i }]} />}
                          </Row>
                        </Fragment>
                      ))}
                      <Col xs="4" className="offset-2">
                        <Btn className="btn-theme" onClick={() => arrayHelpers.push({ value: "" })} title="AddValue" />
                      </Col>
                    </>
                  );
                }}
              />
            </Col>
          </Row>
          <div className="align-items-start value-form">
            <div className="d-flex">
              <FormBtn buttonName={buttonName} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AttributeForm;
