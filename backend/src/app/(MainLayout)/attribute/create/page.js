"use client";
import AttributeForm from "@/Components/Attribute/AttributeForm";
import { attribute } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const AttributeCreate = () => {
  const { mutate, isLoading } = useCreate(attribute, false, `/attribute`);
  return (
    <FormWrapper title="AddAttribute">
      <AttributeForm mutate={mutate} loading={isLoading} buttonName="Save" />
    </FormWrapper>
  );
};

export default AttributeCreate;
