"use client";

import UserForm from "@/Components/User/UserForm";
import { user } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const AddNewUser = () => {
  
  const { mutate, isLoading } = useCreate(user, false, `/user`);
  return (
    <FormWrapper title="AddUser">
      <UserForm mutate={mutate} loading={isLoading} buttonName="Save User"/>
    </FormWrapper>
  );
};

export default AddNewUser;
