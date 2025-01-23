import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { PagesAPI } from "../../Utils/AxiosUtils/API";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";
import DescriptionInput from "../Widgets/DescriptionInput";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const PageForm = ({ updateId, buttonName }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { data: oldData, isLoading, refetch } = useQuery([`page/id`], () => request({ url: `${PagesAPI}/${updateId}` }, router), { enabled: false, select: (data) => data?.data });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: updateId ? oldData?.title || "" : "",
        content: updateId ? oldData?.content || "" : "",
        meta_title: updateId ? oldData?.meta_title || "" : "",
        meta_description: updateId ? oldData?.meta_description || "" : "",
        page_meta_image_id: updateId ? oldData?.page_meta_image_id?.id || "" : "",
        page_meta_image: updateId ? oldData?.page_meta_image || "" : "",
        status: updateId ? Boolean(Number(oldData?.status)) : true,
      }}
      validationSchema={YupObject({
        title: nameSchema,
      })}
      onSubmit={(values) => {
        router.push("/page");
        values.status = Number(values.status);
        //  Put your logic here
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <>
          <Form id="blog" className="theme-form theme-form-2 mega-form">
            <SimpleInputField nameList={[{ name: "title", placeholder: t("EnterTitle"), require: "true" }]} />
            <DescriptionInput values={values} setFieldValue={setFieldValue} title={"Content"} nameKey="content" />
            <SimpleInputField
              nameList={[
                { name: "meta_title", title: "MetaTitle", placeholder: t("EnterTitle") },
                { name: "meta_description", title: "MetaDescription", placeholder: t("EnterDescription") },
              ]}
            />
            <FileUploadField name="page_meta_image_id" title="PageMetaImage" id="page_meta_image_id" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />
            <CheckBoxField name="status" />
            <FormBtn  buttonName={buttonName} />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default PageForm;
