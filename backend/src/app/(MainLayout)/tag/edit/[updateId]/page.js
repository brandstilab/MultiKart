"use client";

import TagForm from "@/Components/Tag/TagForm";
import { tag } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";

const RoleUpdate = ({ params }) => {
  
  const { mutate, isLoading } = useUpdate(tag, params?.updateId, `/tag`);
  return (
    params?.updateId && (
      <FormWrapper title="EditTag">
        <TagForm
          mutate={mutate}
          updateId={params?.updateId}
          loading={isLoading}
          type={"product"}
          buttonName="Update"
        />
      </FormWrapper>
    )
  );
};

export default RoleUpdate;
