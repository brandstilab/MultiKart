'use client'
import { useState } from "react";
import ProductForm from "@/Components/Product/ProductForm";
import { product } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";

const UpdateProduct = ({ params }) => {
  const [resetKey, setResetKey] = useState(false)
  const [saveButton, setSaveButton] = useState(false)
  const { mutate, isLoading } = useCreate(product, params?.updateId, !saveButton ? product : false, false, (resDta) => {
    if (resDta?.status == 200 || resDta?.status == 201) {
      setResetKey(true)
    }
  });

  return (
    params?.updateId && (
      <ProductForm saveButton={saveButton} setSaveButton={setSaveButton} values={mutate} mutate={mutate} updateId={params?.updateId} loading={isLoading} title={"EditProduct"} key={resetKey}  buttonName="Update"/>
    )
  );
};

export default UpdateProduct;
