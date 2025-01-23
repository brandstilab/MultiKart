import { Form, Formik } from "formik";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AllCountryCode } from "../../Data/AllCountryCode";
import Btn from "../../Elements/Buttons/Btn";
import AccountContext from "../../Helper/AccountContext";
import { updateProfile } from "../../Utils/AxiosUtils/API";
import { getHelperText } from "../../Utils/CustomFunctions/getHelperText";
import useCreate from "../../Utils/Hooks/useCreate";
import { YupObject, nameSchema, phoneSchema } from "../../Utils/Validation/ValidationSchemas";
import FileUploadField from "../InputFields/FileUploadField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

const ProfileSettingTab = () => {
  const { t } = useTranslation("common");
  const { accountData, setAccountContextData } = useContext(AccountContext);
  const { isLoading } = useCreate(updateProfile, false, "/account", false);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        profile_image_id: accountData ? accountData?.profile_image_id : "",
        profile_image: accountData ? accountData.profile_image : "",
        name: accountData ? accountData.name : "",
        email: accountData ? accountData.email : "",
        phone: accountData ? accountData.phone : "",
        country_code: accountData ? `${accountData?.country_code}` : "91",
      }}
      validationSchema={YupObject({
        name: nameSchema,
        email: nameSchema,
        phone: phoneSchema,
      })}
      onSubmit={(values) => {
        values["_method"] = "put";
        if (values["profile_image"] == "") {
          values["profile_image_id"] = null;
        }
        setAccountContextData({ name: values["name"], image: values["profile_image"] });
        // Put Add Or Update Logic Here
      }}
    >
      {({ values, setFieldValue, errors }) => (
        <Form className="theme-form theme-form-2 mega-form row">
          <FileUploadField name="profile_image_id" uniquename={values?.profile_image} errors={errors} id="profile_image_id" title="Avatar" type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("500x100px")} />
          <SimpleInputField nameList={[{ name: "name", title: "Name", require: "true", placeholder: t("EnterName") }]} />
          <SimpleInputField nameList={[{ name: "email", title: "Email", require: "true", placeholder: t("EnterEmail") }]} />
          <div className="country-input mb-4">
            <SimpleInputField nameList={[{ name: "phone", title: "Phone", require: "true", type: "number" }]} />
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
          </div>
          <Btn className="btn btn-theme ms-auto d-inline-block w-auto" type="submit" title="Save"  />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileSettingTab;
