"use client";

import NoticeForm from "@/Components/Notice/NoticeForm";
import { Notice } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";

const NoticeUpdate = ({ params }) => {
  const { mutate, isLoading } = useUpdate(Notice, params?.updateId, `/notice`);
  return (
    params?.updateId && (
      <FormWrapper title="UpdateNotice">
        <NoticeForm
          mutate={mutate}
          updateId={params?.updateId}
          loading={isLoading}
          buttonName="Update"
        />
      </FormWrapper>
    )
  );
};

export default NoticeUpdate;
