import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { FaqAPI } from "../../Utils/AxiosUtils/API";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const FaqForm = ({ updateId, buttonName }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { data: oldData, isLoading, refetch } = useQuery(["faq/id"], () => request({ url: `${FaqAPI}/${updateId}` }, router), { refetchOnMount: false, enabled: false });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: updateId ? oldData?.data?.title || "" : "",
        description: updateId ? oldData?.data?.description : "",
        status: updateId ? Boolean(Number(oldData?.data?.status)) : true,
      }}
      validationSchema={YupObject({ title: nameSchema, description: nameSchema })}
      onSubmit={
        (values) => router.push("/faq")
        //  Put your logic here
      }
    >
      {() => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField
              nameList={[
                { name: "title", placeholder: t("EnterTitle"), require: "true" },
                { name: "description", type: "textarea", title: "Description", placeholder: t("EnterDescription"), require: "true" },
              ]}
            />
            <CheckBoxField name="status" />
            <FormBtn buttonName={buttonName} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FaqForm;
