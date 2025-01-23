"use client";
import React, { useContext, useState } from "react";
import { Col } from "reactstrap";
import { Notice } from "@/Utils/AxiosUtils/API";
import AllNoticeTable from "@/Components/Notice";
import AccountContext from "@/Helper/AccountContext";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import { checkPermission } from "@/Components/Common/checkPermissonList";
import ShowNotice from "@/Components/Notice/ShowNotice";

const NoticeRead = () => {
  const [isCheck, setIsCheck] = useState([]);
  const { accountData } = useContext(AccountContext);
  const role = accountData?.role?.name;

  return (
    <>
      {/* {role === "admin" ? ( */}
        <Col sm="12">
          <AllNoticeTable
            url={Notice}
            moduleName="Notice"
            isCheck={isCheck}
            setIsCheck={setIsCheck}
          
          />
        </Col>
      {/* ) : ( */}
        {/* !checkPermission(["notice.create", "notice.destroy"]) && (
          <FormWrapper title="Notice">
            <ShowNotice />
          </FormWrapper>
        ) */}
      {/* )} */}
    </>
  );
};

export default NoticeRead;
