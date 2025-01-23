"use client";
import StoreForm from "@/Components/Store/StoreForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const StoreCreate = () => {
  return (
    <FormWrapper title="AddStore">
      <StoreForm buttonName="Save" />
    </FormWrapper>
  );
};

export default StoreCreate;
