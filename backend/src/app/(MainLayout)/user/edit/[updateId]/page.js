"use client";
import UserForm from "@/Components/User/UserForm";
import { user } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";

const UserUpdate = ({ params }) => {
  const { mutate, isLoading } = useUpdate(user,params?.updateId,`/user`,"user updated successfully");
  return (
    params?.updateId && (
      <FormWrapper title="EditUser">
        <UserForm
          mutate={mutate}
          updateId={params?.updateId}
          loading={isLoading}
          buttonName="Update"
        />
      </FormWrapper>
    )
  );
};

export default UserUpdate;
