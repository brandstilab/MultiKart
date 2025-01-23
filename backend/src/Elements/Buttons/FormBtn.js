import { useRouter } from "next/navigation";
import React from "react";
import Btn from "./Btn";

const FormBtn = ({ loading, buttonName = "Save"}) => {
  const router = useRouter();
  return (
    <div className="ms-auto justify-content-end dflex-wgap mt-sm-4 mt-2 save-back-button">
      <Btn className="btn-primary" type="submit" title={buttonName} loading={Number(loading)} />
    </div>
  );
};

export default FormBtn;
