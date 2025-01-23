import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useContext, useEffect, useMemo } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import CategoryContext from "../../Helper/CategoryContext";
import request from "../../Utils/AxiosUtils";
import { nameSchema, YupObject } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import MultiSelectField from "../InputFields/MultiSelectField";
import SimpleInputField from "../InputFields/SimpleInputField";

import { mediaConfig } from "@/Data/MediaConfig";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const CategoryForm = ({ setResetData, updateId, loading, type, buttonName }) => {
  const { t } = useTranslation("common");
  const { categoryState } = useContext(CategoryContext);
  const router = useRouter();
  const { data: oldData, isLoading, refetch } = useQuery(["category/" + updateId], () => request({ url: `category/${updateId}` }, router), { enabled: false });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  const updatedData = useMemo(() => {
    return categoryState;
  }, [categoryState]);

  if (updateId && isLoading) return <Loader />;

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: updateId ? oldData?.data?.name || "" : "",
        description: updateId ? oldData?.data?.description || "" : "",
        category_image_id: updateId ? oldData?.data?.category_image?.id : "",
        meta_title: updateId ? oldData?.data?.meta_title || "" : "",
        meta_description: updateId ? oldData?.data?.meta_description || "" : "",
        category_meta_image_id: updateId ? oldData?.data?.category_meta_image?.id : "",
        category_meta_image: updateId ? oldData?.data?.category_meta_image : "",
        category_icon_id: updateId ? oldData?.data?.category_icon?.id : "",
        category_image: updateId ? oldData?.data?.category_image : "",
        category_icon: updateId ? oldData?.data?.category_icon : "",
        commission_rate: updateId ? oldData?.data?.commission_rate : "",
        type: type,
        status: updateId ? Boolean(Number(oldData?.data?.status)) : true,
        parent_id: updateId ? Number(oldData?.data?.parent_id) || undefined : undefined,
      }}
      validationSchema={YupObject({
        name: nameSchema,
      })}
      onSubmit={(values, helpers) => {
        setResetData && setResetData(true);
        router.push(`/category`);
      }}
    >
      {({ setFieldValue, values, errors }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField
              nameList={[
                {
                  name: "name",
                  title: "Name",
                  placeholder: t("EnterCategoryName"),
                  require: "true",
                },
                {
                  name: "description",
                  type: "textarea",
                  rows: "3",
                  placeholder: t("EnterCategoryDescription"),
                },
              ]}
            />
            {type == "product" && <SimpleInputField nameList={[{ name: "commission_rate", title: "CommissionRate", postprefix: "%", inputaddon: "true", placeholder: t("EnterCommissionRate"), min: "0", max: "100", type: "number", helpertext: "*Define the percentage of earnings retained as commission." }]} />}
            <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name="parent_id" title={"SelectParent"} data={updatedData} />
            <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="category_image_id" id="category_image_id" title="Image" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} loading={loading} />
            <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="category_icon_id" id="category_icon_id" title="Icon" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} loading={loading} />
            <SimpleInputField
              nameList={[
                { name: "meta_title", title: "meta_title", placeholder: t("enter_meta_title") },
                { name: "meta_description", title: "meta_description", type: "textarea", rows: "3", placeholder: t("enter_meta_description") },
              ]}
            />
            <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="category_meta_image_id" id="category_meta_image_id" title="Image" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} loading={loading} />
            <CheckBoxField name="status" />
            <FormBtn loading={loading} buttonName={buttonName} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};
export default CategoryForm;
