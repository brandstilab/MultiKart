import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { store } from "../../Utils/AxiosUtils/API";
import { getHelperText } from "../../Utils/CustomFunctions/getHelperText";
import { YupObject, passwordConfirmationSchema, passwordSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import AddressComponent from "../InputFields/AddressComponent";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { StoreInitialValue } from "./Widgets/StoreInitialValue";
import { StoreValidationSchema } from "./Widgets/StoreValidationSchema";
import StoreVendor from "./Widgets/StoreVendor";

const StoreForm = ({ updateId, buttonName }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    data: oldData,
    isLoading,
    refetch,
  } = useQuery(["store/id"], () => request({ url: store + "/" + updateId }, router), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
    select: (data) => data?.data,
  });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...StoreInitialValue(updateId, oldData) }}
        validationSchema={YupObject({
          ...StoreValidationSchema,
          password: !updateId && passwordSchema,
          password_confirmation: !updateId && passwordConfirmationSchema,
        })}
        onSubmit={(values) => {
          // Put Your Logic Here
          router.push(`/store`);
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className="theme-form theme-form-2 mega-form">
            <Row>
              <FileUploadField values={values} setFieldValue={setFieldValue} title="StoreLogo" type="file" id="store_logo_id" name="store_logo_id" updateId={updateId} errors={errors} touched={touched} helpertext={getHelperText("500x500px")} />
              <SimpleInputField
                nameList={[
                  { name: "store_name", placeholder: t("EnterStoreName"), require: "true" },
                  { name: "description", title: "StoreDescription", type: "textarea", placeholder: t("EnterDescription"), require: "true" },
                ]}
              />
              <AddressComponent values={values} />
              <StoreVendor />
              <div>
                {!updateId && (
                  <>
                    <SimpleInputField
                      nameList={[
                        { name: "password", type: "password", placeholder: t("EnterPassword"), require: "true" },
                        { name: "password_confirmation", title: "ConfirmPassword", type: "password", placeholder: t("Re-EnterPassword"), require: "true" },
                      ]}
                    />
                  </>
                )}
              </div>
              <SimpleInputField
                nameList={[
                  { name: "facebook", type: "url", placeholder: t("EnterFacebookurl") },
                  { name: "pinterest", type: "url", placeholder: t("EnterPinteresturl") },
                  { name: "instagram", type: "url", placeholder: t("EnterInstagramurl") },
                  { name: "twitter", type: "url", placeholder: t("EnterTwitterurl") },
                  { name: "youtube", type: "url", placeholder: t("EnterYoutubeurl") },
                ]}
              />
              <CheckBoxField name="hide_vendor_email" title="HideEmail" />
              <CheckBoxField name="hide_vendor_phone" title="HidePhone" />
              <CheckBoxField name="status" />
              <FormBtn buttonName={buttonName} />
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StoreForm;
