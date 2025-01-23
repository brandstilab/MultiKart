'use client'
import BrandForm from "@/Components/Brand/BrandForm";
import { BrandAPI } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const CreateBrand = () => {
  return (
    <FormWrapper title="CreateBrand">
      <BrandForm  buttonName="Save"/>
    </FormWrapper>
  );
};

export default CreateBrand;
