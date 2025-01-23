'use client'

import BlogForm from "@/Components/Blog/BlogForm";
import { blog } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const BlogUpdate = ({ params }) => {
  const { mutate, isLoading } = useCreate(blog, params?.updateId, "/blog");
  return (
    params?.updateId && (
      <FormWrapper title="EditBlog">
        <BlogForm mutate={mutate} updateId={params?.updateId} loading={isLoading} buttonName="Update" />
      </FormWrapper>
    )
  );
};

export default BlogUpdate;
