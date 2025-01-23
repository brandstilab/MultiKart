"use client";
import BlogForm from "@/Components/Blog/BlogForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const AddBlog = () => {
  return (
    <FormWrapper title="AddBlog">
      <BlogForm  buttonName="Save" />
    </FormWrapper>
  );
};

export default AddBlog;
