import { mediaConfig } from "@/Data/MediaConfig";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { BrandAPI } from "../../Utils/AxiosUtils/API";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";

const BrandForm = ({ updateId, buttonName }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { data: oldData, isLoading, refetch } = useQuery([updateId], () => request({ url: BrandAPI + "/" + updateId }, router), { refetchOnMount: false, enabled: false });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: updateId ? oldData?.data?.name || "" : "",
          brand_image_id: updateId ? oldData?.data?.brand_image?.id || "" : "",
          brand_image: updateId ? oldData?.data?.brand_image || "" : "",
          brand_banner_id: updateId ? oldData?.data?.brand_banner?.id || "" : "",
          brand_banner: updateId ? oldData?.data?.brand_banner || "" : "",
          meta_title: updateId ? oldData?.data?.meta_title || "" : "",
          meta_description: updateId ? oldData?.data?.meta_description || "" : "",
          brand_meta_image_id: updateId ? oldData?.data?.brand_meta_image?.id : "",
          brand_meta_image: updateId ? oldData?.data?.brand_meta_image : "",
          status: updateId ? Boolean(Number(oldData?.data?.status)) : true,
        }}
        validationSchema={YupObject({
          name: nameSchema,
        })}
        onSubmit={(values) => {
          router.push("/brand");
          // Please add your update or create logic
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <>
            <Form id="blog" className="theme-form theme-form-2 mega-form">
              <SimpleInputField nameList={[{ name: "name", placeholder: t("EnterName"), require: "true" }]} />
              <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="brand_image_id" title="Image" id="brand_image_id" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />
              <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="brand_banner_id" title="BannerImage" id="brand_banner_id" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />
              <SimpleInputField
                nameList={[
                  { name: "meta_title", title: "meta_title", placeholder: t("enter_meta_title") },
                  { name: "meta_description", title: "meta_description", type: "textarea", rows: "3", placeholder: t("enter_meta_description") },
                ]}
              />
              <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="brand_meta_image_id" id="brand_meta_image_id" title="meta_image" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} />
              <CheckBoxField name="status" />
              <FormBtn buttonName={buttonName} />
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default BrandForm;
