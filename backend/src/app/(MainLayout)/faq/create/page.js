'use client'
import FaqForm from "@/Components/Faq/FaqForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const CreateFaq = () => {
    return (
        <FormWrapper title="AddFaq">
            <FaqForm  buttonName="Save" />
        </FormWrapper>
    )
}

export default CreateFaq