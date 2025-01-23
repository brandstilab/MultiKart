import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import DescriptionInput from "../Widgets/DescriptionInput";
import { useRouter } from "next/navigation";

const NoticeForm = ({ mutate, updateId, loading, buttonName }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { data: oldData, isLoading, refetch } = useQuery(["notice/id"], () => request({ url: `notice/${updateId}` }, router), { refetchOnMount: false, enabled: false });
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
        priority: updateId ? oldData?.data?.priority : "",
      }}
      validationSchema={YupObject({ title: nameSchema, description: nameSchema, priority: nameSchema })}
      onSubmit={
        (values) => router.push("/notice")
        // Put update or create logic here
      }
    >
      {({ values, setFieldValue }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField nameList={[{ name: "title", placeholder: t("EnterTittleName"), require: "true" }]} />
            <DescriptionInput values={values} setFieldValue={setFieldValue} title={t("Description")} nameKey="description" errorMessage={"description is a required field"} />
            <SearchableSelectInput
              nameList={[
                {
                  name: "priority",
                  title: "priority",
                  require: "true",
                  inputprops: {
                    name: "priority",
                    id: "priority",
                    options: [
                      { id: "high", name: "High" },
                      { id: "low", name: "Low" },
                    ],
                    close: true,
                  },
                },
              ]}
            />
            <FormBtn loading={loading} buttonName={buttonName} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default NoticeForm;
