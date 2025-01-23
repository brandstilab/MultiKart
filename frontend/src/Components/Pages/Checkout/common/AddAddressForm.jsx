import request from "@/Utils/AxiosUtils";
import { CountryAPI } from "@/Utils/AxiosUtils/API";
import { YupObject, nameSchema, phoneSchema } from "@/Utils/Validation/ValidationSchema";
import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SelectForm from "./SelectForm";

const AddAddressForm = ({ isLoading, type, editAddress, setEditAddress, modal, setModal, isFooterDisplay, method }) => {
  const router = useRouter();
  useEffect(() => {
    modal !== "edit" && setEditAddress && setEditAddress({});
  }, [modal]);
  const { data } = useQuery([CountryAPI], () => request({ url: CountryAPI }, router), {
    refetchOnWindowFocus: false,
    select: (res) => res.data.map((country) => ({ id: country.id, name: country.name, state: country.state })),
  });

  const { t } = useTranslation("common");
  return (
    <Formik
      initialValues={{
        title: editAddress ? editAddress?.title : "",
        street: editAddress ? editAddress?.street : "",
        country_id: editAddress ? editAddress?.country_id : "",
        state_id: editAddress ? editAddress?.state_id : "",
        city: editAddress ? editAddress?.city : "",
        pincode: editAddress ? editAddress?.pincode : "",
        phone: editAddress ? editAddress?.phone : "",
        type: type ? type : null,
        country_code: editAddress ? editAddress?.country_code : "91",
      }}
      validationSchema={YupObject({
        title: nameSchema,
        street: nameSchema,
        city: nameSchema,
        country_id: nameSchema,
        state_id: nameSchema,
        pincode: nameSchema,
        phone: phoneSchema,
      })}
      onSubmit={(values) => {
        if (editAddress) {
          values["_method"] = method ? method : "PUT";
        }
        values["pincode"] = values["pincode"].toString();
        // Put your logic here

        setModal(false);
      }}
    >
      {({ values, setFieldValue }) => <SelectForm values={values} setFieldValue={setFieldValue} setModal={setModal} isLoading={isLoading} data={data} isFooterDisplay={isFooterDisplay} />}
    </Formik>
  );
};

export default AddAddressForm;
