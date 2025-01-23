"use client";
import AttributeForm from "@/Components/Attribute/AttributeForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const UpdateAttributes = ({ params }) => {
  return (
    params?.updateId && (
      <FormWrapper title="EditAttribute">
        <AttributeForm updateId={params?.updateId} buttonName="Update" />
      </FormWrapper>
    )
  );
};

export default UpdateAttributes;
