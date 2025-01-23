import AccountContext from "@/Context/AccountContext";
import request from "@/Utils/AxiosUtils";
import { CountryAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AccountSection from "./CheckoutFormData/AccountSection";
import BillingAddressForm from "./CheckoutFormData/BillingAddressForm";
import DeliverySection from "./CheckoutFormData/DeliverySection";
import PaymentSection from "./CheckoutFormData/PaymentSection";
import ShippingAddressForm from "./CheckoutFormData/ShippingAddressForm";

const CheckoutForm = ({ values, setFieldValue, errors }) => {
  const { accountData, refetch } = useContext(AccountContext);
  const { t } = useTranslation("common");
  const [address, setAddress] = useState([]);
  const router = useRouter();
  useEffect(() => {
    accountData?.address.length > 0 && setAddress((prev) => [...accountData?.address]);
  }, [accountData]);

  const { data } = useQuery([CountryAPI], () => request({ url: CountryAPI }, router), {
    refetchOnWindowFocus: false,
    select: (res) => res.data.map((country) => ({ id: country.id, name: country.name, state: country.state })),
  });

  return (
    <>
      <AccountSection setFieldValue={setFieldValue} values={values} />
      <ShippingAddressForm setFieldValue={setFieldValue} errors={errors} data={data} values={values} />
      <BillingAddressForm setFieldValue={setFieldValue} errors={errors} data={data} values={values} />
      <DeliverySection values={values} setFieldValue={setFieldValue} />
      <PaymentSection values={values} setFieldValue={setFieldValue} />
    </>
  );
};

export default CheckoutForm;
