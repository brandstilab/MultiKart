"use client";
import NoticeForm from "@/Components/Notice/NoticeForm";
import { Notice } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const NoticeCreate = () => {
  const { mutate, isLoading } = useCreate(Notice, false, `/notice`);
  return (
    <FormWrapper title="AddNotice">
      <NoticeForm loading={isLoading} mutate={mutate} buttonName="Save" />
    </FormWrapper>
  );
};

export default NoticeCreate;
