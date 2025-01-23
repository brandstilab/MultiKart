import { useQuery } from "@tanstack/react-query";
import request from "../../Utils/AxiosUtils";
import { country } from "../../Utils/AxiosUtils/API";
import SearchableSelectInput from "./SearchableSelectInput";
import SimpleInputField from "./SimpleInputField";
import Loader from "../CommonComponent/Loader";


import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const AddressComponent = ({ values, noAddress }) => {
  const router = useRouter()
  const { t } = useTranslation( 'common');
  const { data, isLoading } = useQuery([country], () => request({ url: country },router), { refetchOnWindowFocus: false, select: (res) => res.data.map((country) => ({ id: country.id, name: country.name, state: country.state })) });
  if (isLoading) return <Loader />;
  return (
    <>
      <SearchableSelectInput
        nameList={[
          {
            name: "country_id",
            require: "true",
            title: "Country",
            inputprops: {
              name: "country_id",
              id: "country_id",
              options: data,
              defaultOption: "Select state",
              close: (values['country_id'] !== '') ? true : false
            },
          },
          {
            name: "state_id",
            require: "true",
            title: "State",
            inputprops: {
              name: "state_id",
              id: "state_id",
              options: values["country_id"] ? data.filter((country) => Number(country.id) === Number(values["country_id"]))?.[0]?.["state"] : [],
              defaultOption: "Select state",
              close: values['state_id'] !== '' ? true : false
            },
            disabled: values["country_id"] ? false : true,
          },
        ]}
      />
      <SimpleInputField nameList={[{ name: "city", placeholder: t("EnterCity"), require: "true" }]} />
      {!noAddress && <SimpleInputField nameList={[{ name: "address", type: "textarea", placeholder: t("EnterAddress"), require: "true" }]} />}
      <SimpleInputField nameList={[{ name: "pincode",placeholder: t("EnterPincode"), require: "true" }]} />
    </>
  );
};

export default AddressComponent;
