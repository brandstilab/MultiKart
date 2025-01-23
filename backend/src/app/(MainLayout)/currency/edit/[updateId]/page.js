"use client";
import CurrencyForm from "@/Components/Currency/CurrencyForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const UpdateCurrency = ({ params }) => {
  return (
    params?.updateId && (
      <FormWrapper title="EditCurrency">
        <CurrencyForm updateId={params?.updateId} buttonName="Update" />
      </FormWrapper>
    )
  );
};

export default UpdateCurrency;
