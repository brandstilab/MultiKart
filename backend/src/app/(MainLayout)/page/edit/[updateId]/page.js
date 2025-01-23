"use client";
import PageForm from "@/Components/Pages/PageForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const UpdatePage = ({ params }) => {
  return (
    params?.updateId && (
      <FormWrapper title="UpdatePage">
        <PageForm updateId={params?.updateId} buttonName="Update" />
      </FormWrapper>
    )
  );
};

export default UpdatePage;
